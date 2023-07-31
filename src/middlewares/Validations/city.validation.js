import { getCiudadById, getCiudadByName } from "../../DAO/ciudad.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.ciudad
    const query = await getCiudadByName(name)
    if ( query && query.id_pais === req.body.id_pais )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La ciudad " +name+ " ya esta registrado en la DB"
        })
       
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.ciudadID)
    const query = await getCiudadById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La ciudad con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}