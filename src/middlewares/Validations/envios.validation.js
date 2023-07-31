import { getEnvioById } from "../../DAO/envio.dao.js";
import { getLoginById } from "../../DAO/login.dao.js";
import { CODES_HTTP } from "../../constants/global.js";


export const noExistIdLogin = async ( req, res, next ) => {
    const id_login = req.body.id_login
    const query = await getLoginById(id_login)
    
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El id_login=" +id_login+ " al que quieres asignar este envio no existe en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.envioID)
    const query = await getEnvioById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El envio con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}