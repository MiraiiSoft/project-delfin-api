import { CODES_HTTP } from "../../constants/global.js";
import {getRolById, getRolByName } from "../../DAO/roll.dao.js";

export const existName = async ( req, res, next ) => {
    const name = req.body.roll
    const query = await getRolByName(name)
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El rol " +name+ " ya esta registrado en la DB"
        })
    
    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.rolID)
    const query = await getRolById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El rol con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}

