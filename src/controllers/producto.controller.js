import { CODES_HTTP } from "../constants/global.js"
import { createProducto, deleteProductoById, getProductoById, getProductos, updateProductoById, getProductoByNombre, getProductoByCategoria, getProductoByColor, getMarcasDeProductos, getProductoByMarca } from "../DAO/producto.dao.js"
import loggerProducto from "../utils/logger/logger.producto.js";
import { createInventario, deleteInventarioById, getInventarioByIdProduct, updateInventarioById } from "../DAO/inventario.dao.js";

export const getAllProducts = async ( req, res ) => {
    try {
        const productos = await getProductos();
        console.log("Peticion Exitosa");
        loggerProducto.info({message: "Petición Exitosa"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Peticion exitosa: ",
            data: productos
        });
    } catch (error) {
        console.log("Error al obtener los productos: ".error)
        loggerProducto.info({message: "Error al obtener el producto: "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el producto: "+ error
        });
    }   
}

export const getOneProducts = async (req, res) => {
  try {
      const producto = await getProductoById(parseInt(req.params.productoID));
    if (!producto) {
      return res.status(CODES_HTT.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Producto no encontrado",
      });
    }
    const nombreProducto = producto.nombre; //obtengo nombre del producto que se busco por su ID
    const productosMismoNombre = await getProductoByNombre(nombreProducto); //OBTENEMOS LOS PRODUCTOS CON EL MISMO NOMBRE DEL ID QUE SE BUSCO INCLUYENDO LOS COLORES

    //CREAMOS UN OBJETO CON LOS COLORES 
    const coloresUnicos = productosMismoNombre.reduce((colores, prod) => {
      if (prod.color) {
        colores.push(prod.color); //
      }
      return colores;
    }, []);

    producto.color = coloresUnicos; //Asigno el arreglo de colores al producto
    console.log("Peticion Exitosa");
    loggerProducto.info({ message: "Petición Exitosa" });
    res.status(CODES_HTTP.OK).json({
      success: true,
      message: "Peticion Exitosa",
      data: producto,
    });

  } catch (error) {
    console.log("Error al obtener el producto: " + error);
    loggerProducto.info({ message: "Error al obtener el producto: " + error });

    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error al obtener el producto: " + error,
    });
  }
};

export const addProducts = async ( req, res ) => {
    try {
        const {  codigo_barras, nombre, marca, descripcion, imagen, compra, precio_unitario, precio_mayoreo, precio_caja, 
            inicio_mayoreo, inicio_caja, id_color, id_categoria, id_tipo, existencias, unidadesPaquete, numPaquete } = req.body

        const agregaProducto = await createProducto ({
            codigo_barras, 
            nombre, marca, 
            descripcion, 
            imagen, 
            compra, 
            precio_unitario, 
            precio_mayoreo, 
            precio_caja, 
            inicio_mayoreo, 
            inicio_caja, 
            id_color, 
            id_categoria, 
            id_tipo
        });

        await createInventario({
            id_producto: agregaProducto.id_producto,
            existencias,
            unidadesPaquete,
            numPaquete
        })
        console.log("El producto fue agregado con exito")
        loggerProducto.info({message: "El producto fue agregado con exito"})
        res.status(CODES_HTTP.OK).json({
            success:true,
            message: "El producto fue agregado con exito",
            data: agregaProducto
        });
    } catch (error) {
        console.log("Error al agregar producto ", error)
        loggerProducto.info({message: "Error al agregar producto "+ error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: "Error al agregar producto "+ error
        });
    }
}

export const updateProducts = async ( req, res ) => {
    try {
        const {  codigo_barras, nombre, marca, descripcion, imagen, compra, precio_unitario, precio_mayoreo, precio_caja, 
            inicio_mayoreo, inicio_caja, id_color, id_categoria, id_tipo, existencias, unidadesPaquete, numPaquete } = req.body

        const actualizarProducto = await updateProductoById(parseInt(req.params.productoID), {
            codigo_barras, 
            nombre, marca, 
            descripcion, 
            imagen, 
            compra, 
            precio_unitario, 
            precio_mayoreo, 
            precio_caja, 
            inicio_mayoreo, 
            inicio_caja, 
            id_color, 
            id_categoria, 
            id_tipo,
            updatedAt: new Date()
        })

        const inventory = await getInventarioByIdProduct(actualizarProducto.id_producto);
        await updateInventarioById(inventory.id_inventario, {
            existencias,
            unidadesPaquete,
            numPaquete
        })

        console.log("El producto fue actualizado con exito")
        loggerProducto.info({message:"El producto fue actualizado con exito" })
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El producto fue actualizado con exito",
            data: actualizarProducto
        });
    } catch (error) {
        console.log("Error al actualizar producto: ".error)
        loggerProducto.info({message: "Error al actualizar producto: " + error})
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar producto: "+ error
        })
    }
}

export const deleteProducts = async ( req, res ) => {
    try {
        const { productoID } = req.params;
        const inventory = await getInventarioByIdProduct(parseInt(productoID))
        await deleteInventarioById(inventory.id_inventario)
        const eliminarProducto = await deleteProductoById(parseInt(productoID))
        console.log("El producto fue eliminado con exito")
        loggerProducto.info({message: "El producto fue eliminado con exito"})
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "El producto fue eliminado con exito",
            data: eliminarProducto
        });
    } catch (error) {
        console.log("Error al eliminar producto ", error)
        loggerProducto.info({message: "Error al eliminar producto " + error})
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al eliminar producto "+ error
        });
    }
}

export const getProductosCategorias = async (req, res) => {
    try {
        const productosCategorias = await getProductoByCategoria(parseInt(req.params.categoriaProductoID));
        console.log("Productos que han sido adquiridos bajo esta categoria");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: 'Productos que han sido adquiridos bajo esta categoria',
            data: productosCategorias
        });
    } catch (error) {
        console.log("Error al tratar de obtener productos con esa categoria ", error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al tratar de obtener productos con esa categoria "+ error
        });
    }
};

export const getProductosColores = async (req, res) => {
    try {
        const productosColores = await getProductoByColor(parseInt(req.params.colorProductoID));
        console.log("Productos que han sido adquiridos bajo este color");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: 'Productos que han sido adquiridos bajo este color',
            data: productosColores
        });
    } catch (error) {
        console.log("Error al tratar de obtener productos con ese color ", error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al tratar de obtener productos con ese color "+ error
        });
    }
};

export const getAllMarcasProductos = async (req, res) => {
    try {
        const marcas = await getMarcasDeProductos();
        console.log("Las marcas fueron obtenidas exitosamente");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: 'Las marcas fueron obtenidas exitosamente',
            data: marcas
        });
    } catch (error) {
        console.log("Error al tratar de obtener las marcas ", error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al tratar de obtener las marcas "+ error
        });
    }
}

export const getProductosPorMarcas = async (req, res) => {
    try {
        const marcasProductos = await getProductoByMarca(req.params.marcaProducto);
        console.log("Productos que han sido adquiridos bajo esta marca");
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: 'Productos que han sido adquiridos bajo esta marca',
            data: marcasProductos
        });
    } catch (error) {
        console.log("Error al tratar de obtener los productos bajo esa marca ", error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Error al tratar de obtener los productos bajo esa marca "+ error
        });
    }
}