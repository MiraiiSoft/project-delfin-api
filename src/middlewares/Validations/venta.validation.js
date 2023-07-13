import { getEnvioById } from "../../DAO/envio.dao.js";
import { getPagoById } from "../../DAO/pago.dao.js";
import { getVentaById } from "../../DAO/venta.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existIdEnvio = async ( req, res, next ) => {
    const id_envio = req.body.id_envio
    const query = await getEnvioById(id_envio)
    
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El id_envio=" +id_envio+ " al que quieres asignar esta venta no existe en la DB"
        })
    
    next()
}

export const existIdPago = async ( req, res, next ) => {
    const id_pago = req.body.id_pago
    const query = await getPagoById(id_pago)
    
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El id_pago=" +id_pago+ " al que quieres asignar esta venta no existe en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.ventaID)
    const query = await getVentaById(id)
    
    if ( query.length === 0 )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La venta con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}