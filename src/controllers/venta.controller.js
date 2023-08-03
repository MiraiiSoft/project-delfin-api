import {
  actualizarVenta,
  createVenta,
  deleteVentaById,
  getVentaById,
  getVentaByIdLogin,
  getVentas
} from "../DAO/venta.dao.js";
import { CODES_HTTP } from "../constants/global.js";
import loggerVenta from "../utils/logger/logger.venta.js";


export const getAllVentas = async (req, res) => {
  try {
    loggerVenta.info({message: "Petición exitosa"})
    const ventas = await getVentas();
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: ventas
    })
  } catch (error) {
    loggerVenta.info({message: "Error al mostrar Ventas: " + error})
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error
    });
  }
};


export const getOneVenta = async (req, res) => {
  try {
    const ventaID = parseInt(req.params.ventaID); // Convertir el valor a un número entero
    const venta = await getVentaById(ventaID);
    loggerVenta.info({message: "Petición exitosa"})
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: venta,
    });
  } catch (error) {
    loggerVenta.info({message: "Error al obtener la Venta: " + error})
    console.log(error);
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};

export const addVenta = async (req, res) => {
  const { fecha_venta, status_venta, id_envio, id_pago, id_detalle_venta } =
    req.body;
  try {
    loggerVenta.info({message: "Venta agregada"})
    const fechaVenta = new Date(fecha_venta);
    const newVenta = await createVenta({
      fecha_venta: fechaVenta,
      status_venta,
      id_envio,
      id_pago,
      
    });

    res.status(CODES_HTTP.OK).json({
      success: true,
      data: newVenta,
    });
  } catch (error) {
    loggerVenta.info({message: "Error al agregar Venta: " + error})
    console.log(error);
  }
};

export const getOneVentaByLogin = async (req, res) => {
  try {
    const ventaID = parseInt(req.params.ventaID); // Convertir el valor a un número entero
    const venta = await getVentaByIdLogin(ventaID);
    loggerVenta.info({message: "Venta Mostrada"})
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: venta,
    });
  } catch (error) {
    loggerVenta.info({message: "Error al mostrar venta: " + error})
    console.log(error);
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};



export const updateVenta = async (req, res) => {
  try {
    loggerVenta.info({message: "VEnta actualizada"})
    const { fecha_venta, status_venta, id_envio, id_pago, id_detalle_venta } =
      req.body;
    const idVenta = parseInt(req.params.ventaID);
    const fechaVenta = new Date(fecha_venta);
    const updatedVenta = await actualizarVenta(idVenta, {
      fecha_venta: fechaVenta,
      status_venta,
      id_envio,
      id_pago,
      id_detalle_venta,
    });
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: updatedVenta,
    });
  } catch (error) {
    loggerVenta.info({message: "Error al actualizar Venta: " + error})
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};

export const deleteVenta = async (req, res) => {
  try {
    loggerVenta.info({message: "Venta eliminada"})
    const idVenta = parseInt(req.params.ventaID);
    const ventaDeleted = await deleteVentaById(idVenta);
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: ventaDeleted,
    });
  } catch (error) {
    loggerVenta.info({message: "Error al eliminar Venta: " + error})
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};
