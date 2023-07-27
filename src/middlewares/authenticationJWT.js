import { verifyToken } from "../helpers/JWT.js";
import { CODES_HTTP } from "../constants/global.js";
import { getLoginById } from "../DAO/login.dao.js";

export const tokenValidation = async ( req, res, next ) => {
    try {
        const token = req.header('token');
        if( !token ) return res.status(CODES_HTTP.UNAUTHORIZED).json({
            success: false,
            message: "Acceso denegado"
        });
        
        const payload = verifyToken(token);
        req.userLogin = payload.message;
        
        const userLogin = await getLoginById( req.userLogin );
        if( !userLogin ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No existe la cuenta"
        });

        next();

    } catch (error) {
        res.status(CODES_HTTP.UNAUTHORIZED).json({
            success: false,
            message: "Sin autorización"
        });
    }
}

export const isAdmin = async ( req, res, next ) => {
    const user = await getLoginById( req.userLogin );
    
    if( user.roll.roll.toLowerCase() == "admin" ){
        next();
        return;
    }

    res.status(CODES_HTTP.FORBIDDEN).json({
        success: false,
        message: "Requiere rol Admin"
    })
}

export const isUsuario = async ( req, res, next ) => {
    const user = await getLoginById( req.userLogin );
    
    if( user.roll.roll.toLowerCase() == "usuario" ){
        next();
        return;
    }

    res.status(CODES_HTTP.FORBIDDEN).json({
        success: false,
        message: "Requiere rol Usuario"
    })
}

export const isInvitado = async ( req, res, next ) => {
    const user = await getLoginById( req.userLogin );
    
    if( user.roll.roll.toLowerCase() == "invitado" ){
        next();
        return;
    }

    res.status(CODES_HTTP.FORBIDDEN).json({
        success: false,
        message: "Requiere rol Invitado"
    })
}