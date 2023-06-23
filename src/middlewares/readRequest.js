import { CODES_HTTP } from "../constants/global.js";

export const readQueryUrl = ( req, res, next ) => {
    const { url } = req.query;

    if( !url ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Falta el parametro 'url'"
    })

    next();
};