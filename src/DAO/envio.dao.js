import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getEnvios() {
  const envios = await prisma.envio.findMany();
  await prisma.$disconnect();
  return envios;
}

export async function getEnvioById(id) {
  const envio = await prisma.envio.findUnique({
    where: {
      id_envio: id,
    },
  });
  await prisma.$disconnect();
  return envio;
}

export async function createEnvio(data) {
  const newEnvio = await prisma.envio.create({
    data: {
      id_login: data.id_login,
      fecha_envio: data.fecha_envio,
      fecha_entrega: data.fecha_entrega,
      fecha_recoleccion: data.fecha_recoleccion,
      paqueteria: data.paqueteria,
      status_envio: data.status_envio,
    },
  });
  await prisma.$disconnect();
  return newEnvio;
}

export async function updateEnvioById(id, data) {
  const updatedEnvio = await prisma.envio.update({
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
  await prisma.$disconnect();
  return updatedEnvio;
}

export async function deleteEnvioById(id) {
  const envioDeleted = await prisma.envio.delete({
    where: {
      id_envio: id,
    },
  });
  await prisma.$disconnect();
  return envioDeleted;
}
