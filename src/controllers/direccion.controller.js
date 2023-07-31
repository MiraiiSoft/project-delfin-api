import { CODES_HTTP } from "../constants/global.js";
import { getDirecciones, createDirecciones, getDireccionById, updateDireccionById, deleteDireccionById } from "../DAO/direccion.dao.js";
import loggerDireccion from "../utils/logger/logger.direccion.js";

export const getAllDirecciones = async(req , res) =>{
    try {
        const todasDirecciones = await getDirecciones()
        loggerDireccion.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petición Exitosa",
            data: todasDirecciones
        });
    } catch (error) {
        loggerDireccion.info("Error al obtener las Direcciones: " + error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener direcciones: " + error
        });
    }
}

export const getOneDireccion = async(req, res) =>{
    try {
        const oneDirreccion = await getDireccionById(parseInt(req.params.direccionID))
        loggerDireccion.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
           success: true,
           message: "Peticion Exitosa" ,
           data: oneDirreccion
        });

    } catch (error) {
        loggerDireccion.info({message: "Error al obtener la Direccion: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la Direccion: " + error
        });
    }
}
export const addDireccion = async(req,res)=>{
    try {
        const direccion = await createDirecciones(req.body)
        loggerDireccion.info({message: "Direccion creada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El color fue creado con exito",
            data: direccion
        });
    } catch (error) {
        loggerDireccion.info({message: "Direccion creada con Exitos"})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el color: " + error
        });
    }
}

export const updatedDireccion = async(req,res) =>{
    try {
        const actualizarDireccion = await updateDireccionById(parseInt(req.params.direccionID), req.body)
        loggerDireccion.info({message: "Dirección actualizada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Direccion actualizada con exito",
            data: actualizarDireccion
        });
    } catch (error) {
        loggerDireccion.info({message: "Error al actualizar la Direccion: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la direccion: " + error
        });
    }
}

export const deleteDireccion = async(req,res) =>{
    try {
        const eliminarDireccion = await deleteDireccionById(parseInt(req.params.direccionID), req.body)
        loggerDireccion.info({message: "Direccion actualizada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Direccion eliminada con exito",
            data: eliminarDireccion
        });
    } catch (error) {
        loggerDireccion.info({message: "Direccion eliminada con exito"})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la Direccion"
        });
    }
}