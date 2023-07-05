import { createOrder } from "../services/mercadopago.js";
import { CODES_HTTP } from "../constants/global.js"
import { getFacturas, updateFactura } from "../DAO/factura.dao.js";

export const payment = async ( req, res ) => {
    const reqpayment = req.body;

    if( reqpayment.payservice == "mercadopago" ){
        try {
            
            //agregar numero de fatura
            let numfactura;
            // const facturaArray = await getFacturas();
            // for( let numFac of facturaArray ){
            //     numfactura = numFac.num_factura + 1;
            // }
            // await updateFactura(numfactura)

            //crear objeto para enviar data para crear la orden
            let payment;

            //crear orden mercado pago
            // const result = await createOrder( payment );

            return res.status(CODES_HTTP.OK).json({
                success: true,
                message: "result.body"
            });

        } catch (error) {
            console.log("Error al crear orden mercado pago:", error);
            return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Algo va mal"
            });
        }
    }

    res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Servicio de pago no disponible"
    })

}

export const recivedWebHookMercadoPago = async ( req, res ) => {
    
}