import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getDetalleVenta() {
  const ventas = await prisma.detalle_venta.findMany();
  await prisma.$disconnect();
  return ventas;
}

export async function getDetalleVentaById(id) {
  const venta = await prisma.detalle_venta.findUnique({
    where: {
      id_detalle_venta: id,
    },
  });
  await prisma.$disconnect();
  return venta;
}

export async function createDetalleVenta(data) {
  const newDetalleVenta = await prisma.detalle_venta.create({
    data: {
      cantidad_producto: data.cantidad_producto,
      monto_total: data.monto_total,
      id_producto: data.id_producto,
      id_carrito: data.id_carrito,
      id_login: data.id_login,
      id_venta: data.id_venta,
      num_factura: data.num_factura,
    },
  });
  await prisma.$disconnect();
  return newDetalleVenta;
}

export async function updateDetalleVenta(id, data) {
  const updatedDetalleVenta = await prisma.detalle_venta.update({
    where: {
      id_detalle_venta: id,
    },
    data: {
      cantidad_producto: data.cantidad_producto,
      monto_total: data.monto_total,
      id_producto: data.id_producto,
      id_carrito: data.id_carrito,
      id_login: data.id_login,
      id_venta: data.id_venta,
      num_factura: data.num_factura,
    },
  });
  await prisma.$disconnect();
  return updatedDetalleVenta;
}
