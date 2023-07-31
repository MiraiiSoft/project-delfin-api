import { CODES_HTTP } from "../constants/global.js";
import { uploadImg, deleteImg } from "../services/firebase.js";
import loggerUpload from "../utils/logger/logger.upload.js";

export const uploadImgs = async( req, res ) => {

    const { nombreCarpeta, imgs } = req.body;

    let urlImgs = [];

    for( let img of imgs ){
        
        try {
            const nameImage = img.nombre + "_" + Date.now();
            const urlImg = await uploadImg( nombreCarpeta, nameImage, img.base64 );
            loggerUpload.info({message: "Peticion Exitosa"})
            urlImgs.push( {
                nombre: nameImage,
                url: urlImg
            } );

        } catch (error) {
            //si ocurre un error antes de subir todas las imagenes eliminar las que ya se subieron
            for( let img of urlImgs ){
                await deleteImg( img.url )
                    .catch((error) => { return error; });

            }
            loggerUpload.info({message: "Error al subir imagen: " + error })
            console.log("Error al subir imagen:", error)
            return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Error al subir imagen: " + error 
            });
        }
    }
    res.status(CODES_HTTP.OK).json({
        success: true,
        data: urlImgs
    });
}

export const deleteImgs = async( req, res ) => {

    const { url } = req.query;
    
    try {
        await deleteImg( url );
        loggerUpload.info({message: "Imagen eliminada"})
    } catch (error) {
        loggerUpload.info({message: "Error al eliminar imagen: " + error })
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar imagen firebase: " + error
        });
    }

    res.status(CODES_HTTP.OK).json({
        success: true,
        message: "delete img"
    });
}