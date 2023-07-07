import { CODES_HTTP } from "../../constants/global.js";
import { getCategoriaById, getCategoriaByName } from "../../DAO/categoria.dao.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.codigo_barras
    const query = await getCategoriaByName(name)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El producto con cosigo_barras=" +name+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.productoID)
    const query = await getCategoriaById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El producto con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}