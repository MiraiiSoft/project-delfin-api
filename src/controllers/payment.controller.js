import { createOrder } from "../services/mercadopago.js";
import { CODES_HTTP } from "../constants/global.js"
import getNextSeqValue from "../helpers/getNextSequenceValue.js";
import { createEnvio } from "../DAO/envio.dao.js";
import { createPago } from "../DAO/pago.dao.js";
import { createVenta } from "../DAO/venta.dao.js";
import { createDetalleVenta } from "../DAO/detalleVenta.dao.js";
import { getcarritoByIdLogin } from "../DAO/carrito.dao.js";
import loggerPayment from "../utils/logger/logger.payment.js";
export const payment = async ( req, res ) => {
    const reqpayment = req.body;

    if( reqpayment.payservice == "mercadopago" ){
        try {

            //Llenar entidades para generar venta
            
            //agregar numero de fatura
            let numfactura = await getNextSeqValue("compraid")
            if( numfactura == null) throw new Error("Error al generar numero factura")
            numfactura = numfactura.toString().padStart(10, "0");
            
            //crear envio
            const envio = await createEnvio({
                id_login: req.userLogin,
                paqueteria: reqpayment.envio.paqueteria,
                status_envio: ""
            });

            //crear pago
            const pago = await createPago({
                tocken_pago: "",
                monto: 0
            });

            //crear venta
            const venta = await createVenta({
                
                status_venta: "pendiente",
                id_envio: envio.id_envio,
                id_pago: pago.id_pago
            });

            //buscar carrito
            const carrito = await getcarritoByIdLogin(req.userLogin);
            
            //crear detalle de venta
            for( let product of reqpayment.products ){
                await createDetalleVenta({
                    cantidad_producto: product.cantidad_producto,
                    monto_total: product.monto_total,
                    id_producto: product.id_producto,
                    id_carrito: carrito.id_carrito,
                    id_login: req.userLogin,
                    num_factura: numfactura,
                    id_venta: venta.id_venta
                });
            }
            
            //crear objeto para enviar data para crear la orden
            let payment = {
                venta: venta.id_venta,
                items: reqpayment.items
            };

            //crear orden mercado pago
            const result = await createOrder( payment );


            return res.status(CODES_HTTP.OK).json({
                success: true,
                message: result.body
            });

        } catch (error) {
            loggerPayment.info({message: "Error al crear orden mercado pago:" + error})
            console.log("Error al crear orden mercado pago:", error);
            return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Algo va mal:" + error
            });
        }
    }

    res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Servicio de pago no disponible",
    })

}

export const recivedWebHookMercadoPago = async ( req, res ) => {
    
}