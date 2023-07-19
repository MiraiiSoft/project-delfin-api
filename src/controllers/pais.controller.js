import { CODES_HTTP } from "../constants/global.js";
import { createPais, getPaises, getPaisByName, updatePais, deletePais } from "../DAO/pais.dao.js";
import loggerPais from "../utils/logger/logger.pais.js";
export const getAllPaises = async ( req, res ) => {
    try {
        const paises = await getPaises();
        loggerPais.info({message: "No se han encontrado paises"})
        if( !paises ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se han encontrado paises"
        });
        res.status(CODES_HTTP.OK).json({
            success: true,
            data: paises
        })
    } catch (error) {
        loggerPais.info({message: "A ocurrido un error:" + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error:" + error
        })
    }
}

export const getOnePaisByName = async ( req, res ) => {
    const { namePais } = req.params;
    try {
        const pais = await getPaisByName( namePais );
        loggerPais.info({message: "No se encontro el pais"})
        if( !pais ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se encontro el pais"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            data: pais
        });

    } catch (error) {
        loggerPais.info({message: "A ocurrio un error:" + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrio un error:" + error
        });
    }
}

export const createPaiss = async ( req, res ) => {
    const { pais } = req.body;
    try {
        loggerPais.info({message: "Pais agregado"})
        const p = await createPais({
            pais 
        });

        if( !p ) return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Algo a ocurrio al agregar el pais"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Pais agregado"
        });

    } catch (error) {
        loggerPais.info({message: "A ocurrio un error:" + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrio un error:" + error
        })
    }
}

export const updatePaiss = async ( req, res ) => {
    const { paisID } = req.params;
    const { pais } = req.body;

    try {
        const update = await updatePais( parseInt(paisID),{
            pais
        } );
        loggerPais.info({message: "Pais actualizado"})
        if( !update ) return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrio un error al actualizar"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Pais actualizado"
        })

    } catch (error) {
        loggerPais.info({message: "A ocurrido un error: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        });
    }
}

export const deletePaiss = async ( req, res ) => {
    const { paisID } = req.params;
    try {
        await deletePais( parseInt(paisID) );
        loggerPais.info({message: "Pais eliminado"})
        res.status(CODES_HTTP.NO_CONTENT).json()
    } catch (error) {
        loggerPais.info({message: "A ocurrio un error:" + error })
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrio un error:" + error 
        });
    }
}