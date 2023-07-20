import {CODES_HTTP} from "../constants/global.js"
import { getColores, getColorById, createColor, updateColorById, eliminarColorById } from "../DAO/color.dao.js"
import loggerColor from "../utils/logger/logger.color.js"

export const getAllColor = async ( req, res ) => {
    try {
        const todosColores = await getColores()
        console.log("Peticion Exitosa")
        loggerColor.info({message: "Peticion Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa",
            data: todosColores
        });
    } catch (error) {
        console.log("Error al obtener colores: ".error)
        loggerColor.info({message: "Error al obtener colores: "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener colores: "+ error
        });      
    }
}

export const getOneColor = async ( req, res ) => {
    try {
        const oneColor = await getColorById(parseInt(req.params.colorID))
        console.log("Peticón Exitosa")
        loggerColor.info({message: "Peticion Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petición Exitosa",
            data: oneColor
        });
    } catch (error) {
        console.log("Error al obetener el color: ".error)
        loggerColor.info({message: "Error al obtener el Color: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el Color: " + error
        });
    }
}

export const addColor = async ( req, res ) => {
    try {
        const color = await createColor(req.body)
        console.log("El color fue agregado con exito")
        loggerColor.info({message: "El color fue agregado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El color fue agregado con exito",
            data : color
        });
    } catch (error) {
        console.log("Error al crear el Color: ".error)
        loggerColor.info({message: "Error al crear el Color: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el Color: " + error
        });
    }
}

export const updateColor = async ( req, res ) => {
    try {
        const actualizarColor = await updateColorById(parseInt(req.params.colorID), req.body)
        console.log("El color fue Actualizado con exito")
        loggerColor.info({message: "El color fue Actualizado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El color fue Actualizado con exito",
            data: actualizarColor
        });
    } catch (error) {
        console.log("Error al Actualizar el color: ".error)
        loggerColor.info({message: "Error al actualizar el Color: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el Color: " + error
        });
    }
}

export const deleteColor = async ( req, res ) => {
    try {
        const eliminarColor = await eliminarColorById(parseInt(req.params.colorID), req.body)
        loggerColor.info({message: "El color fue Eliminado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El color fue Eliminado con exito",
            data: eliminarColor
        });
    } catch (error) {
        console.log("Error al Eliminar el Color: ".error)
        loggerColor.info({message: "Error al Eliminar el Color: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al Eliminar el Color: " + error
        });
    }
}