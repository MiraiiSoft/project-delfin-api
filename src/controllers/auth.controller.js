import { CODES_HTTP } from "../constants/global.js";
import { createDirecciones } from "../DAO/direccion.dao.js";
import { createPersona } from "../DAO/persona.dao.js";
import { createLogin, getLoginByEmail, getLoginByUser, updateLogin } from "../DAO/login.dao.js";
import { getRolByName } from "../DAO/roll.dao.js";
import { hashPass, comparePass } from "../helpers/hashPass.js";
import { generateToken, verifyToken } from "../helpers/JWT.js";
import sendEmail from "../helpers/sendEmail.js";

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
        const rol = await getRolByName('cliente');
        
        //se guarda datos de login
        const login = await createLogin({
            correo,
            usuario,
            password: await hashPass(contraseña),
            is_verified: false,
            id_persona: persona.id_persona,
            id_roll: rol.id_roll,
        });

        //crear carrito para la persona registrada

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
        console.log(error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Ha ocurrido un error: " + error
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
            message: "Ha ocurrido un error:" + error
        });
    }

    //comprobar existe usuario
    if( !dataUser ) return res.status(CODES_HTTP.BAD_REQUEST).json({
        success: false,
        message: "El usuario no se encuentra registrado"
    });

    //comprobar verificacion de la cuenta
    if( !dataUser.is_verified ) return res.status(CODES_HTTP.UNAUTHORIZED).json({
        success: false,
        message: "No se ha verificado la cuenta"
    });

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
    const { token } = req.params;

    const confirm = async (token) => {
        const verify = verifyToken(token);

        if( verify.success === false ){
            const err = verify.message;
            throw new Error(err);
        }

        return await getLoginByEmail( verify.message )
            .then( async userLogin => {
                if( !userLogin ) throw new Error('No se ha encontrado la cuenta');

                if( userLogin.is_verified === true ) throw new Error('La cuenta ya esta confirmada');

                userLogin.is_verified = true;
                console.log(userLogin)
                return await updateLogin( userLogin.id_login, userLogin );

            } )
    };

    try {
        confirm( token )
            .then( () => {
                res.status(CODES_HTTP.OK).json({
                    success: true,
                    message: "Confirmacion de cuenta exitosa"
                });
            } )
            .catch( err => {
                return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
                    success: false,
                    message: err
                })
            })
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error
        })
    }
}