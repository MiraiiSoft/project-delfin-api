import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getVentas() {
  const ventas = await prisma.venta.findMany();
  await prisma.$disconnect();
  return ventas;
}

export async function getVentaById(id) {
  const venta = await prisma.venta.findUnique({
    where: {
      id_venta: id,
    },
  });
  await prisma.$disconnect();
  return venta;
}

export async function createVenta(data) {
  const newVenta = await prisma.venta.create({
    data: {
      fecha_venta: data.fecha_venta,
      status_venta: data.status_venta,
      id_envio: data.id_envio,
      id_pago: data.id_pago,
      id_detalle_venta: data.id_detalle_venta,
    },
  });
  await prisma.$disconnect();
  return newVenta;
}

export async function updateVenta(id, data) {
  const updatedVenta = await prisma.venta.update({
    where: {
      id_venta: id,
    },
    data: {
      fecha_venta: data.fecha_venta,
      status_venta: data.status_venta,
      id_envio: data.id_envio,
      id_pago: data.id_pago,
      id_detalle_venta: data.id_detalle_venta,
    },
  });
  await prisma.$disconnect();
  return updatedVenta;
}

export async function deleteVentaById(id) {
  const ventaDeleted = await prisma.venta.delete({
    where: {
      id_venta: id,
    },
  });
  await prisma.$disconnect();
  return ventaDeleted;
}
