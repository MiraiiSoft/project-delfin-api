import { CODES_HTTP } from "../constants/global.js";
import { createRol, deleteRolById, getRolById, getRoles } from "../DAO/roll.dao.js";

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
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Peticion exitosa:",
            data: newRol
        });
    } catch (error) {
        console.log("Error al crear rol:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear rol:" + error 
        });
    }
}

export const updateRol = async ( req, res ) => {
    try {
        const updatedRol = await updateRol(parseInt(req.params.rolID), req.body)
        console.log("Peticion exitosa")
        res.status*(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: updatedRol
        });
    } catch (error) {
        console.log("Error al actualizar rol:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al actualizar rol:" + error 
        });
    }
}

export const deleteRol = async ( req, res ) => {
    try {
        const deletedRol = await deleteRolById(parseInt(req.params.rolID))
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: deletedRol
        });
    } catch (error) {
        console.log("Error al eliminar rol:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al eliminar rol:" + error 
        });
    }
}