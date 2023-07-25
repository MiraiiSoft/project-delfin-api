import { getDireccionById } from "../../DAO/direccion.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.direccionID)
    const query = await getDireccionById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "La direccion con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}