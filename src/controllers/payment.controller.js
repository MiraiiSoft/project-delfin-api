import { createOrder } from "../services/mercadopago.js";
import { CODES_HTTP } from "../constants/global.js";
import getNextSeqValue from "../helpers/getNextSequenceValue.js";
import { createEnvio } from "../DAO/envio.dao.js";
import { createPago, setToken } from "../DAO/pago.dao.js";
import { createVenta, setStatus } from "../DAO/venta.dao.js";
import { createDetalleVenta } from "../DAO/detalleVenta.dao.js";
import { getcarritoByIdLogin } from "../DAO/carrito.dao.js";
import loggerPayment from "../utils/logger/logger.payment.js";
import { discountProduct } from "../DAO/producto.dao.js";
import { getVentaById } from "../DAO/venta.dao.js";
import { setMonto } from "../DAO/detalleVenta.dao.js";
import {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} from "../services/paypal.js";
import axios from "axios";

export const payment = async (req, res) => {
  const reqpayment = req.body;
  if (reqpayment.payservice == "mercadopago") {
    try {
      //Llenar entidades para generar venta

      //agregar numero de fatura
      let numfactura = await getNextSeqValue("compraid");
      if (numfactura == null)
        throw new Error("Error al generar numero factura");
      numfactura = numfactura.toString().padStart(10, "0");

      //crear envio
      const envio = await createEnvio({
        id_login: req.userLogin,
        paqueteria: reqpayment.envio.paqueteria,
        status_envio: "",
      });

      //crear pago
      const pago = await createPago({
        tocken_pago: "",
        monto: 0,
      });

      //crear venta
      const venta = await createVenta({
        status_venta: "pendiente",
        id_envio: envio.id_envio,
        id_pago: pago.id_pago,
      });

      //buscar carrito
      const carrito = await getcarritoByIdLogin(req.userLogin);

      //crear detalle de venta
      for (let product of reqpayment.products) {
        await createDetalleVenta({
          cantidad_producto: product.cantidad_producto,
          monto_total: product.monto_total,
          id_producto: product.id_producto,
          id_carrito: carrito.id_carrito,
          id_login: req.userLogin,
          num_factura: numfactura,
          id_venta: venta.id_venta,
        });
      }

      //crear objeto para enviar data para crear la orden
      let payment = {
        venta: venta.id_venta,
        items: reqpayment.items,
      };

      //crear orden mercado pago
      const result = await createOrder(payment);

      return res.status(CODES_HTTP.OK).json({
        success: true,
        message: result.body,
      });
    } catch (error) {
      loggerPayment.info({
        message: "Error al crear orden mercado pago:" + error,
      });
      console.log("Error al crear orden mercado pago:", error);
      return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Algo va mal:" + error,
      });
    }
  }
  if (reqpayment.payservice == "paypal") {
    try {
      //Llenar entidades para generar venta

      //agregar numero de fatura
      let numfactura = await getNextSeqValue("compraid");
      if (numfactura == null)
        throw new Error("Error al generar numero factura");
      numfactura = numfactura.toString().padStart(10, "0");

      //crear envio
      const envio = await createEnvio({
        id_login: req.userLogin,
        paqueteria: reqpayment.envio.paqueteria,
        status_envio: "",
      });

      //crear pago
      const pago = await createPago({
        tocken_pago: "",
        monto: 0,
      });

      //crear venta
      const venta = await createVenta({
        status_venta: "Creada",
        id_envio: envio.id_envio,
        id_pago: pago.id_pago,
      });

      //buscar carrito
      const carrito = await getcarritoByIdLogin(req.userLogin);
      let totalMXN = 0;
      reqpayment.items.forEach((item) => {
        totalMXN += item.unit_price * item.quantity;
      });
      //crear detalle de venta
      for (let product of reqpayment.products) {
        await createDetalleVenta({
          cantidad_producto: product.cantidad_producto,
          monto_total: product.monto_total,
          id_producto: product.id_producto,
          id_carrito: carrito.id_carrito,
          id_login: req.userLogin,
          num_factura: numfactura,
          id_venta: venta.id_venta,
        });
      }

      
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "MXN",
              value: totalMXN,
            },
          },
        ],
        application_context: {
          brand_name: "mycompany.com",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${process.env.API_URL}/api/payment/capture-order?saleId=${venta.id_venta}`,
          cancel_url: `${process.env.CLIENT_URL}/site/cart/3`,
        },
      };
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");

      const {
        data: { access_token },
      } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      });

      const response = await axios.post(
        `${PAYPAL_API}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      return res.status(CODES_HTTP.OK).json({
        success: true,
        message: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  res.status(CODES_HTTP.BAD_REQUEST).json({
    success: false,
    message: "Servicio de pago no disponible",
  });
};

export const captureOrder = async (req, res) => {
  const { token, saleId } = req.query;
  const venta = await getVentaById(parseInt(saleId));

  for (const producto of venta[0].producto) {
    await discountProduct(producto.cantidad_producto, producto.id_producto);
  }
  

  

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    ); 
    await setToken(parseInt(saleId),response.data.links[0].href)
    await setStatus(parseInt(saleId))
    console.log(process.env.CLIENT_URL);
    res.redirect(`${process.env.CLIENT_URL}/site/user/compras`);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
export const cancelOrder = (req, res) => res.send("cancelada");

export const recivedWebHookMercadoPago = async (req, res) => {};
