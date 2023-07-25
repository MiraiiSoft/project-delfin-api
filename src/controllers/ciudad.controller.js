import { CODES_HTTP } from "../constants/global.js"
import loggerCiudad from "../utils/logger/logger.ciudad.js"
import {getCiudades, createCiudad, getCiudadById, updateCiudadById, deleteCiudadById} from '../DAO/ciudad.dao.js'

export const getAllCiudades = async(req,res)=>{
    try {
        const todasCiudades =  await getCiudades()
        loggerCiudad.info({message: "PeticiónExitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion Exitosa",
            data: todasCiudades
        });
    } catch (error) {
        loggerCiudad.info("Error al obtener las Ciudades")
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las Ciudades: " + error
        });
    }
}
export const getOneCiudad = async(req, res) =>{
    try {
        const oneCiudad = await getCiudadById(parseInt(req.params.ciudadID))
        loggerCiudad.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion Exitosa",
            data: oneCiudad
        });
    } catch (error) {
        loggerCiudad.info({message: "errpr al obetener la ciudad" + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la ciudad: " +error
        });
    }
}

export const addCiudad = async(req,res) =>{
    try {
        const ciudad = await createCiudad(req.body)
        loggerCiudad.info({message: "Ciudad agregada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Ciudad agregada con exito",
            data: ciudad
        });
    } catch (error) {
        loggerCiudad.info({message: "Error agregar la ciudad: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la ciudad" + error
        });
    }
}

export const updateCiudad = async (req, res) => {
    try {
        const actualizarCiudad = await updateCiudadById(parseInt(req.params.ciudadID), req.body)
        loggerCiudad.info({message: "La ciudad actualizada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "La ciudad fue actualiza con exito",
            data: actualizarCiudad
        });
    } catch (error) {
        loggerCiudad.info({message: "Error al actualizar la ciudad: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la ciudad: " +error
        });
    }
}

export const deleteCiudad = async (req, res) =>{
    try {
        const eliminarCiudad = await deleteCiudadById(parseInt(req.params.ciudadID), req.body)
        loggerCiudad.info({message: "Ciudad eliminada con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Ciudad eliminada con exito",
            data: eliminarCiudad
        });
    } catch (error) {
        loggerCiudad.info({message: "Error al eliminar la ciudad: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la ciudad" + error
        });
    }
}

