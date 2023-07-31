import { getProductoByBarCode, getProductoById } from "../../DAO/producto.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const barCode = req.body.codigo_barras
    const query = await getProductoByBarCode(barCode)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El producto con codigo de barras " +barCode+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistName = async ( req, res, next ) => {
    const barCode = req.body.codigo_barras
    const query = await getProductoByBarCode(barCode)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El producto con codigo de barras " +barCode+ " no esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.productoID)
    const query = await getProductoById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El producto con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}