import { createOrder } from "../services/mercadopago";
import { CODES_HTTP } from "../constants/global.js"

export const payment = async ( req, res ) => {
    const reqpayment = req.body;

    if( reqpayment.payservice == "mercadopago" ){
        try {
            
            //agregar numero de fatura
            let numfactura;

            //crear objeto para enviar data para crear la orden
            let payment;

            //crear orden mrcado pago
            const result = await createOrder( payment );

            return res.status(CODES_HTTP.OK).json({
                success: true,
                message: result.body
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