import { CODES_HTTP } from "../constants/global.js";

export const dataUploadImg = ( req, res, next ) => {
    
    const { nombreCarpeta, imgs } = req.body;

    if( !req.body ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Petición vacia"
    });

    if( !nombreCarpeta ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Falta el nombre de la carpeta"
    });

    if( imgs == undefined || imgs.length == 0 ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "Faltan las imagenes para almacenar"
    });

    for( let img of imgs ){
        if( !img.nombre ) return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Falta el nombre de la imagen"
        });

        if( !img.base64 ) return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Falta la imagen"
        });
    }

    next();
}