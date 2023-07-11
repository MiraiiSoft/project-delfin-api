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
        
        const userLogin = await getLoginById(payload.message);
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
