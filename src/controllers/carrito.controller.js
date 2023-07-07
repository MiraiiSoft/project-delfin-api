import { CODES_HTTP } from "../constants/global.js";
import { createCarrito, deleteCarritoById, getCarritoById, getCarritos, updateCarritoById } from "../DAO/carrito.dao.js";

export const getAllCarritos = async ( req, res ) => {
    try {
        const carritos = await getCarritos()
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carritos
        });
    } catch (error) {
        console.log("Error al obtener los carritos:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los roles: " + error 
        });
    }
}

export const getOneCarrito = async ( req, res ) => {
    try {
        const carrito = await getCarritoById(parseInt(req.params.cartID))
        console.log("Peticion exitosa")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carrito
        });
    } catch (error) {
        console.log("Error al obtener el rol:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el rol:" + error 
        });
    }
}

export const addCarrito = async ( req, res ) => {
    try {
        const newCarrito = await createCarrito(req.body)
        console.log("El carrito ha sido creado")
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "El carrito ha sido creado:",
            data: newCarrito
        });
    } catch (error) {
        console.log("Error al crear el carrito:", error)
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el carrito" + error 
        });
    }
}

export const updateCarrito = async ( req, res ) => {
    try {
        const cartID = parseInt(req.params.cartID)
        const updateCarrito = await updateCarritoById(cartID, req.body)
        console.log("El carrito ha sido actualizado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito ha sido actualizado:",
            data: updateCarrito
        });
    } catch (error) {
        console.log("Error al actualizar el carrito:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al actualizar el carrito:" + error 
        });
    }
}

export const deleteCarrito = async ( req, res ) => {
    try {
        const deletedCarrito = await deleteCarritoById(parseInt(req.params.cartID))
        console.log("El carrito ha sido borrado")
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito ha sido borrado:",
            data: deletedCarrito
        });
    } catch (error) {
        console.log("Error al eliminar el carrito:", error)
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al eliminar el carrito:" + error 
        });
    }
}