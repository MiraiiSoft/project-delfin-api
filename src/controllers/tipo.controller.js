import { CODES_HTTP } from "../constants/global";
import { eliminarColorById } from "../DAO/color.dao";
import { getAllTipos, getTipoById, createTipo, updateTipo, deleteTipoById } from "../DAO/tipo.dao";
import loggerTipo from "../utils/logger/logger.tipo";

export const getTipos = async(req, res) =>{
    try {
        const todosTipos = await getAllTipos()
        loggerTipo.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petición Exitosa",
            data: todosTipos
        });
    } catch (error) {
        loggerTipo.info({message: "Error al obetener Tipos: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obetener Colores: " + error
        });
    }
}

export const getOneTipo = async (req, res) =>{
    try {
        const oneTipo = await getTipoById(parseInt(req.params.tipoID))
        loggerTipo.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Petición Exitosa",
            data: oneTipo
        });
    } catch (error) {
        loggerTipo.info({message: "Error al Obtener el Tipo: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el Tipo: " + error
        });
    }
}

export const addTipo = async(req, res) => {
    try {
        const tipo = await createTipo(req.body)
        loggerTipo.info({message: "El tipo se agrego con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El color fue agregado con exito",
            data: tipo
        });
    } catch (error) {
        loggerTipo.info({message: "Error al crear el Tipo: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el tipo: " + error
        });
    }
}
export const updateColor = async (req, res) => {
    try {
        const actualizarTipo = await updateTipo(parseInt(req.params.tipoID), req.body)
        loggerTipo.info({message: "El tipo fue Actualizado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El tipo fue actualizado con exito",
            data: actualizarTipo
        });
    } catch (error) {
        loggerTipo.info({message: "Error al actualizar tipo: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el tipo: " + error
        });
    }
}
export const deleteTipo = async(req, res) => {
    try {
        const eliminarTipo = await deleteTipoById(parseInt(req.params.tipoID), req.body)
        loggerTipo.info({message: "Tipo eliminado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El conol fue eliminado con exito",
            data: eliminarTipo
        });
    } catch (error) {
        loggerTipo.info({message: "Error al eliminar tipo: " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false, 
            message: "Error al eliminar el tipo: "+ error
        });
    }
}

