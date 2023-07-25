import { getPaisById, getPaisByName } from "../../DAO/pais.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.pais
    const query = await getPaisByName(name)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El pais " +name+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistName = async ( req, res, next ) => {
    const name = req.params.namePais
    const query = await getPaisByName(name)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El pais con name=" +name+ " no se encuentra en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.paisID)
    const query = await getPaisById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El pais con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}