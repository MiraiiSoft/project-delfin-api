import { CODES_HTTP } from "../constants/global.js"
import { getMunicipios, getMunicipioById, createMunicipio, updateMunicipioById, deleteMunicipioById, getMunicipiosByIdCiudad } from "../DAO/municipio.dao.js";

export const getAllMunicipios = async(req,res)=>{
    try {
        const municipios =  await getMunicipios();

        if( !municipios ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se han encontrado municipios"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            data: municipios
        });

    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los municipios: " + error
        });
    }
}

export const getAllMunicipiosByCiudad = async( req, res ) => {
    const { ciudadID } = req.params;
    try {
        const municipios =  await getMunicipiosByIdCiudad( parseInt(ciudadID) );
        
        if( !municipios ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se han encontrado municipios"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            data: municipios
        });

    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los municipios: " + error
        });
    }
}

export const getOneMunicipio = async(req, res) =>{
    const { municipioID } = req.params;

    try {
        const municipio = await getMunicipioById(parseInt(municipioID));
        
        if( !municipio ) return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "No se han encontrado el municipio"
        });

        res.status(CODES_HTTP.OK).json({
            success: true,
            data: municipio
        });
    } catch (error) {
        
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el municipio: " +error
        });
    }
}

export const addMunicipio = async(req,res) =>{
    const { municipio, id_ciudad } = req.body;

    try {
        await createMunicipio({
            municipio,
            id_ciudad
        });
        
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Municipio agregado con exito"
        });
    } catch (error) {
        
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear un municipio" + error
        });
    }
}

export const updateMunicipio = async (req, res) => {

    const { municipioID } = req.params;
    const { municipio, id_ciudad } = req.body;

    try {
        const actualizarMunicipio = await updateMunicipioById(parseInt(municipioID), {
            municipio,
            id_ciudad
        });
        
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Actualizado con exito",
            data: actualizarMunicipio
        });
    } catch (error) {
        
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el municipio: " +error
        });
    }
}

export const deleteMunicipio = async (req, res) =>{
    const { municipioID } = req.params;

    try {
        await deleteMunicipioById(parseInt(municipioID));
        
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Municipio eliminado con exito"
        });
    } catch (error) {
        
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar municipio" + error
        });
    }
}

