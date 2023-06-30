import { getPersonas } from "../DAO/persona.dao.js";
import { CODES_HTTP } from "../constants/global.js";

export const getAllUser = async ( req, res ) => {
    const personas = await getPersonas();

    res.status(CODES_HTTP.OK).json({
        success: true,
        data: personas
    })
}

export const getOneUser = async ( req, res ) => {

}

export const addUser = async ( req, res ) => {
    
}

export const updateUser = async ( req, res ) => {

}

export const deleteUser = async ( req, res ) => {
    
}