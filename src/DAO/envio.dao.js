import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEnvios() {
  try {
    return await prisma.envio.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getEnvioById(id) {
  try {
    return await prisma.envio.findUnique({
      where: {
        id_envio: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createEnvio(data) {
  try {
    return await prisma.envio.create({
      data: {
        id_login: data.id_login,
        fecha_envio: data.fecha_envio,
        fecha_entrega: data.fecha_entrega,
        fecha_recoleccion: data.fecha_recoleccion,
        paqueteria: data.paqueteria,
        status_envio: data.status_envio,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateEnvio(id, data) {
  try {
    return await prisma.envio.update({
      where: {
        id_envio: id,
      },
      data: {
        id_login: data.id_login,
        fecha_envio: data.fecha_envio,
        fecha_entrega: data.fecha_entrega,
        fecha_recoleccion: data.fecha_recoleccion,
        paqueteria: data.paqueteria,
        status_envio: data.status_envio,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteEnvioById(id) {
  try {
    return await prisma.envio.delete({
      where: {
        id_envio: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
