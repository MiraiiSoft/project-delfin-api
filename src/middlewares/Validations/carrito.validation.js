import { getCarritoById, getcarritoByIdLogin } from "../../DAO/carrito.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existName = async ( req, res, next ) => {
    const id_login = req.body.id_login
    const query = await getcarritoByIdLogin(id_login)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Ya existe un carrito con id_login=" +id_login+ " en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.cartID)
    const query = await getCarritoById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El carrito con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}