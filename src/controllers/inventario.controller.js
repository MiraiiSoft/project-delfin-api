import {CODES_HTTP} from "../constants/global.js"
import { createInventario, deleteInventarioById, getInventarioById, getInventarios, updateInventarioById } from "../DAO/inventario.dao.js"
import loggerInventario from "../utils/logger/logger.inventario.js"

export const getAllInventario = async (req, res) => {
    try {
        const allInventario = await getInventarios()
        console.log("Peticion exitosa")
        loggerInventario.info({message: "Peticion exitosa"})
        res.status(CODES_HTTP.OK).json({
            succes: true,
            message: "Peticion exitosa",
            data: allInventario
        });
    } catch (error) {
        console.log("Error al obtener los inventarios: ".error)
        loggerInventario.info({message: "Error al obtener los inventarios: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            succes: false,
            message: "Error al obtener los inventarios: " + error
        });
    }
}

export const getOneInventario = async (req, res) => {
    try {
        const OneInventario = await getInventarioById(parseInt(req.params.inventarioID))
        console.log("Peticion exitosa")
        loggerInventario.info({message: "Peticion exitosa"})
        res.status(CODES_HTTP.OK).json({
            succes: true,
            message: "Peticion exitosa",
            data: OneInventario
        })
    } catch (error) {
        console.log("Error al obtener al inventario: ".error)
        loggerInventario.info({message: "Error al obtener al inventario: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            succes: false,
            message: "Error al obtener al inventario: " + error
        });
    }
}

export const addInventario = async (req, res) => {
    try {
        const agregarInventario = await createInventario (req.body)
        console.log("Inventario Agregado con Exito")
        loggerInventario.info({message: "Inventario Agregado con Exito"})
        res.status(CODES_HTTP.OK).json({
            succes: true,
            message: "Inventario agregado con exito",
            data: agregarInventario
        });
    } catch (error) {
        console.log("Error al agregar inventario: ".error)
        loggerInventario.info({message: "Error al agregar inventario: "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            succes: false,
            message: "Error al agregar inventario: "+ error
        })
    }
}

export const updateInventario = async (req, res) => {
    try {
        const actualizarInventario = await updateInventarioById(parseInt(req.params.inventarioID), req.body)
        console.log("Inventario actualizado con exito")
        loggerInventario.info({message: "Inventario Actualizado con Exito"})
        res.status(CODES_HTTP.OK).json({
            succes: true,
            message: "Inventario actualizado con exito",
            data: actualizarInventario
        });
    } catch (error) {
        console.log("Error al actualizar inventario: ".error)
        loggerInventario.info({message: "Error al actualizar inventario: "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            succes: false,
            message: "Error al actualizar inventario: "+ error
        });
    }
}

export const deleteInventario = async (req, res) =>{
    try {
        const eliminarInventario = await deleteInventarioById(parseInt(req.params.inventarioID))
        console.log("Inventario eliminado con exito")
        loggerInventario.info({message: "Inventario eliminado con exito"})
        res.status(CODES_HTTP.OK).json({
            succes: true,
            message: "Inventario eliminado con exito",
            data: eliminarInventario
        });
    } catch (error) {
        console.log("Error al eliminar inventario: ".error)
        loggerInventario.info({message: "Error al eliminar inventario: "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            succes: false,
            message: "Error al eliminar inventario: "+ error
        })
    }
}