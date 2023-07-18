import { createEnvio, deleteEnvioById, getEnvioById, getEnvios, updateEnvioById } from "../DAO/envio.dao.js";
import { CODES_HTTP } from "../constants/global.js";

export const getAllEnvios = async ( req, res ) => {
    try {
        const envios = await getEnvios()
        console.log("Petición Exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petción Exitosa",
            data: envios
        });
    } catch (error) {
        console.log("Error al obtener los envios: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los envios: " + error
        });
    }
}

export const getOneEnvios = async ( req, res ) => {
    try {
        const envio = await getEnvioById(parseInt(req.params.envioID))
        console.log("Petición Exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petción Exitosa",
            data: envio
        });
    } catch (error) {
        console.log("Error al obtener el envio: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el envio: " + error
        });
    }
}

export const addEnvios = async ( req, res ) => {
    try {
        const newEnvio = await createEnvio(req.body)
        console.log("Envio creado con exito")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Envio creado con exito",
            data: newEnvio
        });
    } catch (error) {
        console.log("Error al crear el envio: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el envio: " + error
        });
    }
}

export const updateEnvios = async ( req, res ) => {
    try {
        const actEnvio = await updateEnvioById(parseInt(req.params.envioID),req.body)
        console.log("Envio actualizado con exito")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Envio actualizado con exito",
            data: actEnvio
        });
    } catch (error) {
        console.log("Error al actualizar el envio: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el envio: " + error
        });
    }
}

export const deleteEnvios = async ( req, res ) => {
    try {
        const deleteEnvio = await deleteEnvioById(parseInt(req.params.envioID))
        console.log("Envio eliminado con exito")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Envio eliminado con exito",
            data: deleteEnvio
        });
    } catch (error) {
        console.log("Error al eliminar el envio: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el envio: " + error
        });
    }
}