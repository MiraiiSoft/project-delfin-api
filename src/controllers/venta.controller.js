import {
  actualizarVenta,
  createVenta,
  deleteVentaById,
  getVentaById,
  getVentaByIdLogin,
  getVentas
} from "../DAO/venta.dao.js";
import { CODES_HTTP } from "../constants/global.js";

export const getAllVentas = async (req, res) => {
  try {
    const ventas = await getVentas();
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: ventas
    })
  } catch (error) {
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
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: venta,
    });
  } catch (error) {
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
    console.log(error);
  }
};


export const getOneVentaByLogin = async (req, res) => {
  try {
    const ventaID = parseInt(req.params.ventaID); // Convertir el valor a un número entero
    const venta = await getVentaByIdLogin(ventaID);
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: venta,
    });
  } catch (error) {
    console.log(error);
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};



export const updateVenta = async (req, res) => {
  try {
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
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};

export const deleteVenta = async (req, res) => {
  try {
    const idVenta = parseInt(req.params.ventaID);
    const ventaDeleted = await deleteVentaById(idVenta);
    res.status(CODES_HTTP.OK).json({
      success: true,
      data: ventaDeleted,
    });
  } catch (error) {
    return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error,
    });
  }
};
