import { CODES_HTTP } from "../constants/global.js";
import { createPersona, updatePersona } from "../DAO/persona.dao.js";
import { getLoginById, getLogins, createLogin, updateLogin } from "../DAO/login.dao.js";
import { createDirecciones } from "../DAO/direccion.dao.js";
import sendEmail from "../helpers/sendEmail.js";
import { hashPass, comparePass } from "../helpers/hashPass.js";
import loggerUsuario from "../utils/logger/logger.usuario.js";
import { createCarrito } from "../DAO/carrito.dao.js";

export const getAllUser = async ( req, res ) => {
    try {

        const userLogins = await getLogins();
        if( !userLogins ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se han encontrado cuentas registradas"
        });
        
        loggerUsuario.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            data: userLogins
        });
    } catch (error) {
        loggerUsuario.info({message: "Ha ocurrido un error:" + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ha ocurrido un error:" + error
        });
    }

}

export const getOneUser = async ( req, res ) => {
    // const { userID } = req.params;
    
    try {
        const userLogin = await getLoginById( parseInt(req.userLogin) );
        if( !userLogin ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se encontro la cuenta"
        })
        delete userLogin.password;
        res.status(CODES_HTTP.OK).json({
            success: true,
            data: userLogin
        })
        loggerUsuario.info({message: "Petición Exitosa"})

    } catch (error) {
        loggerUsuario.info({message: "A ocurrido un error: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        })
    }
}

export const addUser = async ( req, res ) => {
    try {
        const { nombre, apellido, telefono, correo, rol, usuario, password } = req.body;
        
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
        
        //se guarda datos de login
        const login = await createLogin({
            correo,
            usuario,
            password: await hashPass(password),
            id_persona: persona.id_persona,
            id_roll: rol,
        });

        //crear carrito para la persona registrada
        await createCarrito({
            id_login: login.id_login
        });

        //enviar email de confirmacion
        const body = "<p>Confirma la creacion de tu cuenta. Tiene 1 hora para poder confirmar.";
        const resSendMail = await sendEmail( login.correo, "Confirmacion cuenta", body, true );
        
        if( resSendMail.success === false ) return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Problemas al enviar email: " + resSendMail.message
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Registro exictoso"
        });
    } catch (error) {
        loggerUsuario.info({message: "Ha ocurrido un error: " + error})
        console.log(error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ha ocurrido un error: " + error
        })
    }
}

export const updateUser = async ( req, res ) => {
    const { correo, usuario, id_persona, nombre, apellido, telefono, id_direccion, 
        id_roll, password } = req.body;
    let { is_verified } = req.body;
    const { userID } = req.params;

    try {
        const userLogin = await getLoginById( parseInt(userID) );

        if( correo && correo != userLogin.correo ){
            is_verified = false;

            //enviar email de confirmacion
            const body = "<p>Has cambiado tu email. Tiene 1 hora para poder confirmar.";
            const resSendMail = await sendEmail( correo, "Confirmacion cambio email", body, true );
            
            if( resSendMail.success === false ) return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: "Problemas al enviar email: " + resSendMail.message
            });
        }

        if( password && await comparePass(password, userLogin.password) === false ){
            await updateLogin( parseInt(userID), {
                correo,
                usuario,
                is_verified,
                password: await hashPass(password),
                id_persona,
                id_roll
            } );
        }else {

            const updateDataLogin = await updateLogin( parseInt(userID), {
                correo,
                usuario,
                is_verified,
                id_persona,
                id_roll
            } );
        }


        const updateDataPersona = await updatePersona( id_persona, {
            nombre,
            apellido,
            telefono,
            id_direccion
        } )

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Si el email se cambio, verificar el correo en su bandeja de entrada"
        })

    } catch (error) {
        loggerUsuario.info({message: "Ha ocurrido un error: " + error})
        console.log("Error:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        })
    }
}

export const deleteUser = async ( req, res ) => {
    const { userID } = req.params;
    //cambiar el estado de la cuenta y no eliminarla totalmente
    try {
        loggerUsuario.info({message: "Usuario eliminado"})
        await updateLogin( parseInt(userID), {
            is_active: false
        } );

        res.status(CODES_HTTP.NO_CONTENT).json();
    } catch (error) {
        loggerUsuario.info({message: "Ha ocurrido un error: " + error})
        console.log("error: ", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrio un error:" + error
        });
    }

}