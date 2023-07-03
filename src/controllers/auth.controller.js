import { CODES_HTTP } from "../constants/global.js";
import { createDirecciones } from "../DAO/direccion.dao.js";
import { createPersona } from "../DAO/persona.dao.js";
import { createLogin, getLoginByEmail, getLoginByUser } from "../DAO/login.dao.js";
import { getRolByNombre } from "../DAO/roll.dao.js";
import { hashPass, comparePass } from "../helpers/hashPass.js";
import { generateToken } from "../helpers/JWT.js";

export const register = async ( req, res ) => {
    try {
        
        const { nombre, apellido, telefono, correo, usuario, contraseña } = req.body;
        
        //se crea una direccion
        const direccion = await createDirecciones({
            codigo_postal: "0",
            calle: "",
            colonia: "",
            num: "",
            telefono,
            referencia: "",
            id_ciudad: 1
        });

        //se guarda una persona
        const persona = await createPersona({
            nombre,
            apellido,
            telefono,
            id_direccion: direccion.id_direccion
        });
        
        //buscar rol 
        const rol = await getRolByNombre('cliente');
        
        //se guarda datos de login
        const login = await createLogin({
            correo,
            usuario,
            password: await hashPass(contraseña),
            id_persona: persona.id_persona,
            id_roll: rol.id_roll,
        });

        //enviar email de confirmacion

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Registro exictoso"
        });
    } catch (error) {
        console.log(error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        })
    }
}

export const login = async ( req, res ) => {
    const { user, pass } = req.body;

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    let dataUser;
    try {
        if( validEmail.test(user) ){
            dataUser = await getLoginByEmail(user);
        }else{
            dataUser = await getLoginByUser(user);
        }        
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error:" + error
        });
    }

    //comprobar existe usuario
    if( !dataUser ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "El usuario no se encuentra registrado"
    });

    //comprobar verificacion de la cuenta
    // if( !dataUser.is_verified ) return res.status(CODES_HTTP.UNAUTHORIZED).json({
    //     success: false,
    //     message: "No se a verificado la cuenta"
    // });

    //validar contraseña
    try {
        const validatePass = await comparePass(pass, dataUser.password);
        if( !validatePass ) return res.status(CODES_HTTP.UNAUTHORIZED).json({
            success: false,
            message: "Contraseña incorrecta"
        });        
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error:" + error
        })
    }

    const token = generateToken( dataUser.id_login, "24h" );

    res.status(CODES_HTTP.OK).header('token', token).json({
        success: true,
        message: "Inicio de sesion correcto"
    });

}

export const confirmAccount = async ( req, res ) => {
    
}