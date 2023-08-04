import { getCarritoById } from "../../DAO/carrito.dao.js";
import { getCarritoProductosById, updateCarritoProductos } from "../../DAO/carritoProducto.dao.js";
import { CODES_HTTP } from "../../constants/global.js";
import loggerCarrito from "../../utils/logger/logger.carrito.js";

export const noExistId = async ( req, res, next ) => {
    const id = parseInt(req.params.cartID)
    const query = await getCarritoProductosById(id)
    if ( !query )  
        return res.status(CODES_HTTP.BAD_REQUEST).json({
            success: false,
            message: "El carrito-producto con id=" +id+ " no se encuentra en la DB"
        })
    next()
}

export const test = async ( req, res, next ) => {
    const { id_producto, id_carrito, cantidad_producto } = req.body
    const query = await getCarritoById(id_carrito)
    var existProduct = false
    
    if ( query ) {
        query.carrito_producto.forEach(carrito_producto => {
            if( carrito_producto.id_producto === id_producto ) {

                carrito_producto.cantidad_producto += cantidad_producto
                updateCarritoProductos( carrito_producto.id_carrito_producto, carrito_producto)
                    .catch( e => ( e.BAD_REQUEST ))

                existProduct = true
            }
        });
    }

    if (existProduct) {
        console.log('Se actualizaron los productos correctamente:')
        loggerCarrito.info({message: "Se actualizaron los productos correctamente:"})
        return res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Se han agregado los productos a carrito-producto con id=" +id_carrito+ " correctamente",
            data: null
        })
    }

    next()
}
