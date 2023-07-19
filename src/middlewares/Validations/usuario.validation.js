import { getLoginByEmail, getLoginById, getLoginByUser } from "../../DAO/login.dao.js";
import { CODES_HTTP } from "../../constants/global.js";

export const existUser = async ( req, res, next ) => {
    const user = req.body.usuario
    const query = await getLoginByUser(user)

    if ( query )
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Ya existe una cuenta con el usuaro=" +user+ " en la DB"
        })
    
    next()
}

export const existUserUpdate = async ( req, res, next ) => {
    const user = req.body.usuario
    const query = await getLoginByUser(user)
    const userID = parseInt(req.params.userID)
    const { id_login } = query

    if ( query && userID !== id_login )
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Ya existe una cuenta con el usuaro=" +user+ " en la DB"
        })
    
    next()
}

export const existMail = async ( req, res, next ) => {
    const correo = req.body.correo
    const query = await getLoginByEmail(correo)
    
    if ( query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Ya existe una cuenta con el correo=" +correo+ " en la DB"
        })
    
    next()
}

export const existMailUpdate = async ( req, res, next ) => {
    const correo = req.body.correo
    const query = await getLoginByEmail(correo)
    const userID = parseInt(req.params.userID)
    const { id_login } = query

    if ( query && userID !== id_login )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "Ya existe una cuenta con el correo=" +correo+ " en la DB"
        })
    
    next()
}

export const correctDataUpdate = async ( req, res, next ) => {
    const userID = parseInt(req.params.userID)
    const { id_roll, id_persona, id_direccion } = await getLoginById(userID)
    req.body.id_roll = id_roll
    req.body.id_persona = id_persona
    req.body.id_direccion = id_direccion

    next()
}

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.userID)
    const query = await getLoginById(id)
    
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El usuario con id=" +id+ " no se encuentra en la DB"
        })
    
    next()
}