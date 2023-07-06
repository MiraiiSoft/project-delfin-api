import { CODES_HTTP } from "../constants/global.js";
import { createRol, deleteRolById, getRolById, getRoles, updateRolById } from "../DAO/roll.dao.js";

export const getAllRoles = async ( req, res ) => {
    try {
        const roles = await getRoles()
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: roles
        });
    } catch (error) {
        console.log("Error al obtener los roles:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los roles: " + error 
        });
    }
}

export const getOneRol = async ( req, res ) => {
    try {
        const oneRol = await getRolById(parseInt(req.params.rolID))
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: oneRol
        });
    } catch (error) {
        console.log("Error al obtener el rol:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el rol:" + error 
        });
    }
}

export const addRol = async ( req, res ) => {
    try {
        const newRol = await createRol(req.body)
        console.log("El roll ha sido creado")
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "El roll ha sido creado:",
            data: newRol
        });
    } catch (error) {
        console.log("Error al crear el rol:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el rol:" + error 
        });
    }
}

export const updateRol = async ( req, res ) => {
    try {
        const rolID = parseInt(req.params.rolID)
        const updateRol = await updateRolById(rolID, req.body)
        console.log("El roll ha sido actualizado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El roll ha sido actualizado:",
            data: updateRol
        });
    } catch (error) {
        console.log("Error al actualizar el rol:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al actualizar el rol:" + error 
        });
    }
}

export const deleteRol = async ( req, res ) => {
    try {
        const deletedRol = await deleteRolById(parseInt(req.params.rolID))
        console.log("El roll ha sido borrado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El roll ha sido borrado:",
            data: deletedRol
        });
    } catch (error) {
        console.log("Error al eliminar el rol:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al eliminar el rol:" + error 
        });
    }
}