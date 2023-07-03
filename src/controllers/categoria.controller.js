import { CODES_HTTP } from "../constants/global.js";
import { getCategoriaById, getCategorias } from "../DAO/categoria.dao.js";

export const getAllCategoria = async ( req, res ) => {
    try{
        const categorias = await getCategorias()
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: categorias
        });
    }catch(error){
        console.log("Error al obtener las categorias:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las categorias: " + error 
        });
    }
}

export const getOneCategoria = async ( req, res ) => {
    try{
        const oneCategoria = await getCategoriaById(parseInt(req.params.categoriaID))
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: oneCategoria
        });
    }catch(error){
        console.log("Error al obtener la categoria:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la categoria: " + error 
        });
    }
}

export const addCategoria = async ( req, res ) => {

}

export const updateCategoria = async ( req, res ) => {

}

export const deleteCategoria = async ( req, res ) => {
    
}