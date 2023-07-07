import { createOrder } from "../services/mercadopago.js";
import { CODES_HTTP } from "../constants/global.js"
import getNextSeqValue from "../helpers/getNextSequenceValue.js";
import { createEnvio } from "../DAO/envio.dao.js";

export const payment = async ( req, res ) => {
    const reqpayment = req.body;

    if( reqpayment.payservice == "mercadopago" ){
        try {
            console.log(req.userLogin)
            //agregar numero de fatura
            // let numfactura = await getNextSeqValue("compraid")
            // if( numfactura == null) throw new Error("Error al generar numero factura")
            
            //crear objeto para enviar data para crear la orden
            // let payment = reqpayment.items;

            //crear orden mercado pago
            // const result = await createOrder( payment );

            //Llenar entidades para generar venta

            return res.status(CODES_HTTP.OK).json({
                success: true,
                message: "result.body"
            });

        } catch (error) {
            console.log("Error al crear orden mercado pago:", error);
            return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Algo va mal:" + error
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