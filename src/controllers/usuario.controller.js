import { CODES_HTTP } from "../constants/global.js";
import { getPersonas, getPersonaById } from "../DAO/persona.dao.js";
import { getLoginById, getLogins } from "../DAO/login.dao.js";
import { getRolById } from "../DAO/roll.dao.js";

export const getAllUser = async ( req, res ) => {
    try {
        let users = [];

        const userLogins = await getLogins();

        for( let userLogin of userLogins ){
            const user = await getPersonaById( parseInt(userLogin.id_persona) );
            const roll = await getRolById( parseInt( userLogin.id_roll ) );

            userLogin.id_persona = user;
            userLogin.id_roll = roll;

            users.push(userLogin);
        }
    
        res.status(CODES_HTTP.OK).json({
            success: true,
            data: userLogins
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error:" + error
        });
    }

}

export const getOneUser = async ( req, res ) => {
    const { userID } = req.params;
    try {
        const userLogin = await getLoginById( parseInt(userID) );
        const user = await getPersonaById( parseInt(userLogin.id_persona) );
        const roll = await getRolById( parseInt(userLogin.id_roll) );

        userLogin.id_persona = user;
        userLogin.id_roll = roll;

        res.status(CODES_HTTP.OK).json({
            success: true,
            data: userLogin
        })

    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        })
    }
}

export const addUser = async ( req, res ) => {
    
}

export const updateUser = async ( req, res ) => {

}

export const deleteUser = async ( req, res ) => {
    
}