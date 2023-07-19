import {
    getDetalleVenta,
    getDetalleVentaById,
    createDetalleVenta,
    updateDetalleVenta,
    deleteDetalleVenta,
  } from "./detalleVentaDao";
  import loggerDetalleVenta from "../utils/logger/logger.detalleVenta";

  export async function getAllVentas(req, res) {
    try {
      loggerDetalleVenta.info({message: "Petición Exitos"})
      const ventas = await getDetalleVenta();
      res.status(200).json({
        success: true,
        data: ventas,
      });
    } catch (error) {
      loggerDetalleVenta.info({message: "Error al obtener todos los Detalle de Venta" + error})
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function getOneVenta(req, res) {
    try {
      loggerDetalleVenta.info({message: "Petición Exitos"})
      const ventaID = parseInt(req.params.ventaID);
      const venta = await getDetalleVentaById(ventaID);
      res.status(200).json({
        success: true,
        data: venta,
      });
    } catch (error) {
      loggerDetalleVenta.info({message: "Error al obtener el Detalle Venta" + error})
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function addVenta(req, res) {
    const data = req.body;
    try {
      loggerDetalleVenta.info({message: "Detalle Venta agregado con exito"})
      const newDetalleVenta = await createDetalleVenta(data);
      res.status(200).json({
        success: true,
        data: newDetalleVenta,
      });
    } catch (error) {
      loggerDetalleVenta.info({message: "Error al agregar un Detalle Venta" + error})
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function updateVenta(req, res) {
    const ventaID = parseInt(req.params.ventaID);
    const data = req.body;
    try {
      const updatedDetalleVenta = await updateDetalleVenta(ventaID, data);
      loggerDetalleVenta.info({message: "Detalle Venta Actualizado con exito"})
      res.status(200).json({
        success: true,
        data: updatedDetalleVenta,
      });
    } catch (error) {
      loggerDetalleVenta.info({message: "Error al Actualizar el detalle Venta" + error})
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function deleteVenta(req, res) {
    const ventaID = parseInt(req.params.ventaID);
    try {
      const detalleVentaDeleted = await deleteDetalleVenta(ventaID);
      loggerDetalleVenta.info({message: "Detalle Venta Eliminado con exito"})
      res.status(200).json({
        success: true,
        data: detalleVentaDeleted,
      });
    } catch (error) {
      loggerDetalleVenta.info({message: "Error al Eliminar el Detalle Venta" + error})
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  