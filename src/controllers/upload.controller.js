import { CODES_HTTP } from "../constants/global.js";
import { uploadImg, deleteImg } from "../services/firebase.js";

export const uploadImgs = async( req, res ) => {

    const { nombreCarpeta, imgs } = req.body;

    let urlImgs = [];

    for( let img of imgs ){
        
        try {
            const urlImg = await uploadImg( nombreCarpeta, img.nombre, img.base64 );
            urlImgs.push( {
                nombre: img.nombre,
                url: urlImg
            } );

        } catch (error) {
            //si ocurre un error antes de subir todas las imagenes eliminar las que ya se subieron
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
    res.json({
        success: true,
        message: "delete img"
    })
}