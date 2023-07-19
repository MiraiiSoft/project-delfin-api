import { getColorByColor, getColorById } from "../../DAO/color.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const color = req.body.color
    const query = await getColorByColor(color)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El color " +color+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.colorID)
    const query = await getColorById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El color con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}