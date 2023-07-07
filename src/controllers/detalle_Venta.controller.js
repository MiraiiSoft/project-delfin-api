import {
    getDetalleVenta,
    getDetalleVentaById,
    createDetalleVenta,
    updateDetalleVenta,
    deleteDetalleVenta,
  } from "./detalleVentaDao";
  
  export async function getAllVentas(req, res) {
    try {
      const ventas = await getDetalleVenta();
      res.status(200).json({
        success: true,
        data: ventas,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function getOneVenta(req, res) {
    try {
      const ventaID = parseInt(req.params.ventaID);
      const venta = await getDetalleVentaById(ventaID);
      res.status(200).json({
        success: true,
        data: venta,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export async function addVenta(req, res) {
    const data = req.body;
    try {
      const newDetalleVenta = await createDetalleVenta(data);
      res.status(200).json({
        success: true,
        data: newDetalleVenta,
      });
    } catch (error) {
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
      res.status(200).json({
        success: true,
        data: updatedDetalleVenta,
      });
    } catch (error) {
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
      res.status(200).json({
        success: true,
        data: detalleVentaDeleted,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  