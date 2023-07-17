import { getCategoriaById, getCategoriaByName } from "../../DAO/categoria.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.categoria
    const query = await getCategoriaByName(name)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La categoria " +name+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.categoriaID)
    const query = await getCategoriaById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La categoria con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}