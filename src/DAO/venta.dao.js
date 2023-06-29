import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getVentas() {
  try {
    return await prisma.venta.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getVentaById(id) {
  try {
    return await prisma.venta.findUnique({
      where: {
        id_venta: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createVenta(data) {
  try {
    return await prisma.venta.create({
      data: {
        fecha_venta: data.fecha_venta,
        status_venta: data.status_venta,
        id_envio: data.id_envio,
        id_pago: data.id_pago,
        id_detalle_venta: data.id_detalle_venta,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateVenta(id, data) {
  try {
    return await prisma.venta.update({
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
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteVentaById(id) {
  try {
    return await prisma.venta.delete({
      where: {
        id_venta: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
