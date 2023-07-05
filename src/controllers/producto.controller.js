import { CODES_HTTP } from "../constants/global.js"
import { getProductoById, getProductos } from "../DAO/producto.dao.js"

export const getAllProducts = async ( req, res ) => {
    try {
        const productos = await getProductos();
        console.log("Peticion Exitosa");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: productos
        });
    } catch (error) {
        console.log("Error al obtener los productos: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los productos: "+ error
        });
    }   
}

export const getOneProducts = async ( req, res ) => {
    try {
        const producto = await getProductoById();
        console.log("Peticion Exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion Exitosa",
            data: producto
        });
    } catch (error) {
        console.log("Error al obtener el producto: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: "Error al obtener el producto: "+ error
        });
    }
}

export const addProducts = async ( req, res ) => {

}

export const updateProducts = async ( req, res ) => {

}

export const deleteProducts = async ( req, res ) => {
    
}