import { CODES_HTTP } from "../constants/global.js";
import { createDirecciones } from "../DAO/direccion.dao.js";
import { createPersona } from "../DAO/persona.dao.js";
import { createLogin } from "../DAO/login.dao.js";
import { hashPass,comparePass } from "../helpers/hashPass.js";

export const register = async ( req, res ) => {
    try {
        
        const { nombre, apellido, telefono, correo, usuario, contraseña } = req.body;
        
        // const direccion = await createDirecciones({
        //     codigo_postal: "0",
        //     calle: "",
        //     colonia: "",
        //     num: "",
        //     telefono,
        //     referencia: "",
        //     id_ciudad: 1
        // });

        // const persona = createPersona({
        //     nombre,
        //     apellido,
        //     telefono,
        //     id_direccion: direccion.id_direccion
        // });

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Registro exictoso"
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "A ocurrido un error: " + error
        })
    }
}

export const login = async ( req, res ) => {

}

export const confirmAccount = async ( req, res ) => {
    
}