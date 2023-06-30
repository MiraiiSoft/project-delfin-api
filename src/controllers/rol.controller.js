import { createRol, deleteRolById, getRolById, getRoles } from "../DAO/roll.dao.js";

export const getAllRoles = async ( req, res ) => {
    const roles = getRoles()
    res.json(roles);
}

export const getOneRol = async ( req, res ) => {
    const oneRol = getRolById(req.params)
    res.json(oneRol);
}

export const addRol = async ( req, res ) => {
    const newRol = createRol(req.body);
    res.json(newRol);
}

export const updateRol = async ( req, res ) => {
    const updatedRol = updateRol(req.params, req.body)
    res.json(updatedRol);
}

export const deleteRol = async ( req, res ) => {
    const deletedRol = deleteRolById(req.params)
    res.json(deletedRol);
}