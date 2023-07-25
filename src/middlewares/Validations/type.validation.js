import { getTipoById, getTipoByName } from "../../DAO/tipo.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.tipo
    const query = await getTipoByName(name)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El tipo " +name+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.tipoID)
    const query = await getTipoById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El tipo con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}