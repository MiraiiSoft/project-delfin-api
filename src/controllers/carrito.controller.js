import { CODES_HTTP } from "../constants/global.js";
import { createCarrito, deleteCarritoById, getCarritoById, getCarritos } from "../DAO/carrito.dao.js";
import { createCarritoProductos, updateCarritoProductos } from "../DAO/carritoProducto.dao.js";
import loggerCarrito from "../utils/logger/logger.carrito.js";

//Carrito
export const getAllCarritos = async ( req, res ) => {
    try {
        const carritos = await getCarritos()
        console.log("Peticion exitosa")
        loggerCarrito.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carritos
        });
    } catch (error) {
        console.log("Error al obtener los carritos:", error)
        loggerCarrito.info({message: "Error al obtener los carritos"})
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
        loggerCarrito.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa:",
            data: carrito
        });
    } catch (error) {
        console.log("Error al obtener el rol:", error)
        loggerCarrito.info({message: "Error al obtener los carritos"})
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
        loggerCarrito.info({message: "El carrito ha sido creado"})
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "El carrito ha sido creado:",
            data: newCarrito
        });
    } catch (error) {
        console.log("Error al crear el carrito:", error)
        loggerCarrito.info({message: "Error al obtener el carrito"})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el carrito" + error 
        });
    }
}

export const deleteCarrito = async ( req, res ) => {
    try {
        const deletedCarrito = await deleteCarritoById(parseInt(req.params.cartID))
        console.log("El carrito ha sido borrado")
        loggerCarrito.info({message: "El carrito ha sido borrado"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito ha sido borrado:",
            data: deletedCarrito
        });
    } catch (error) {
        console.log("Error al eliminar el carrito:", error)
        loggerCarrito.info({message: "Error al eliminar el carrito"})
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al eliminar el carrito:" + error 
        });
    }
}

//Carrito-productos - Don't carrito
export const addProductToCart = async (req, res) => {
    try {
        const addProduct = await createCarritoProductos(req.body)
        console.log("El carrito-producto ha sido agregado")
        loggerCarrito.info({message: "El carrito-producto ha sido agregado"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito-producto ha sido agregado:",
            data: addProduct
        });
    }catch(error) {
        console.log("Error al agregar el carrito-producto:", error)
        loggerCarrito.info({message: "Error al agregar el carrito-producto"})
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al agregar el carrito-producto:" + error 
        });
    }
}

export const updateCarrito = async ( req, res ) => {
    try {
        const cartID = parseInt(req.params.cartID)
        const updateCarritoProducto = await updateCarritoProductos(cartID, req.body)
        console.log("El carrito-producto ha sido actualizado")
        loggerCarrito.info({message: "El carrito-producto ha sido actualizado"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El carrito-producto ha sido actualizado:",
            data: updateCarritoProducto
        });
    } catch (error) {
        console.log("Error al actualizar el carrito-producto:", error)
        loggerCarrito.info({message: "Error al actualizar el carrito-producto"})
        return res.status(CODES_HTTP.NO_FOUND).json({
            success: false,
            message: "Error al actualizar el carrito-producto:" + error 
        });
    }
}