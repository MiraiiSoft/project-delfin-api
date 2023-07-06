import { CODES_HTTP } from "../constants/global.js";
import {getRolById, getRolByNombre } from "../DAO/roll.dao.js";


export const checkExistRoll = async ( req, res, next ) => {
    const rolBody = req.body.roll
    const rolQuery = await getRolByNombre(rolBody)
    if ( rolQuery )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El rol " +rolBody+ " ya esta registrado en la DB"
        })
    
    next()
}

export const checkNoExistRoll = async ( req, res, next ) => {
    const rolID = parseInt(req.params.rolID)
    const rolQuery = await getRolById(rolID)
    if ( !rolQuery )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El rol con id=" +rolID+ " no se encuentra en la DB"
        })
    
    next()
}

