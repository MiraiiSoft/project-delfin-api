import { createCarritoProductos, deleteCarritoProductosById, getCarritoProductos, getCarritoProductosById, updateCarritoProductos } from "../DAO/carritoProducto.dao.js";
import { CODES_HTTP } from "../constants/global.js";

export const getAllCarritoProducto = async ( req, res ) => {
    try {
        const carritos_producto = await getCarritoProductos()
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carritos_producto
        });
    } catch (error) {
        console.log("Error al obtener los carritos-producto:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los carritos-producto: " + error 
        });
    }
}

export const getOneCarritoProducto = async ( req, res ) => {
    try {
        const carrito_producto = await getCarritoProductosById(parseInt(req.params.cartProductID))
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carrito_producto
        });
    } catch (error) {
        console.log("Error al obtener el carrito-producto:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el carrito-producto:" + error 
        });
    }
}

export const addCarritoProducto = async ( req, res ) => {
    try {
        const newCarritoProducto = await createCarritoProductos(req.body)
        console.log("El carrito-producto ha sido creado")
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "El carrito-producto ha sido creado:",
            data: newCarritoProducto
        });
    } catch (error) {
        console.log("Error al crear el carrito:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el carrito-producto" + error 
        });
    }
}

export const updateCarritoProducto = async ( req, res ) => {
    try {
        const cartProductID = parseInt(req.params.cartProductID)
        const updateCarritoProducto = await updateCarritoProductos(cartProductID, req.body)
        console.log("El carrito-producto ha sido actualizado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito ha sido actualizado:",
            data: updateCarritoProducto
        });
    } catch (error) {
        console.log("Error al actualizar el carrito:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al actualizar el carrito-producto:" + error 
        });
    }
}

export const deleteCarritoProducto = async ( req, res ) => {
    try {
        const deletedCarritoProduct = await deleteCarritoProductosById(parseInt(req.params.cartProductID))
        console.log("El carrito-producto ha sido borrado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito-producto ha sido borrado:",
            data: deletedCarritoProduct
        });
    } catch (error) {
        console.log("Error al eliminar el carrito-producto:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al eliminar el carrito-producto:" + error 
        });
    }
}
