import { CODES_HTTP } from "../constants/global.js"
import { createProducto, deleteProductoById, getProductoById, getProductos, updateProductoById } from "../DAO/producto.dao.js"

export const getAllProducts = async ( req, res ) => {
    try {
        const productos = await getProductos();
        console.log("Peticion Exitosa");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa: ",
            data: productos
        });
    } catch (error) {
        console.log("Error al obtener los productos: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el producto: "+ error
        });
    }   
}

export const getOneProducts = async ( req, res ) => {
    try {
        const producto = await getProductoById(parseInt(req.params.productoID));
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
    try {
        const agregaProducto = await createProducto (req.body);
        console.log("El producto fue agregado con exito")
        res.status(CODES_HTTP.OK).json({
            success:true,
            message: "El producto fue agregado con exito",
            data: agregaProducto
        });
    } catch (error) {
        console.log("Error al agregar producto ", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: "Error al agregar producto "+ error
        });
    }
}

export const updateProducts = async ( req, res ) => {
    try {
        const actualizarProducto = await updateProductoById(parseInt(req.params.productoID), req.body)
        console.log("El producto fue actualizado con exito")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Producto actualizado con exito",
            data: actualizaProducto
        });
    } catch (error) {
        console.log("Error al actualizar producto: ".error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar producto: "+ error
        })
    }
}

export const deleteProducts = async ( req, res ) => {
    try {
        const eliminarProducto = await deleteProductoById(parseInt(req.params.productoID))
        console.log("El producto fue eliminado con exito")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El producto fue eliminado con exito",
            data: eliminarProducto
        });
    } catch (error) {
        console.log("Error al eliminar producto ", error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al eliminar producto "+ error
        });
    }
}