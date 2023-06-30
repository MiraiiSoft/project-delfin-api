import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getDirecciones() {
  const direcciones = await prisma.direccion.findMany();
  await prisma.$disconnect();
  return direcciones;
}

export async function createDirecciones(data) {
  const newDireccion = await prisma.direccion.create({
    data: {
      codigo_postal: data.codigo_postal,
      calle: data.calle,
      colonia: data.colonia,
      num: data.num,
      telefono: data.telefono,
      referencia: data.referencia,
      id_ciudad: data.id_ciudad,
    },
  });
  await prisma.$disconnect();
  return newDireccion;
}

export async function getDireccionById(id) {
  const direccion = await prisma.direccion.findUnique({
    where: {
      id_direccion: id,
    },
  });
  await prisma.$disconnect();
  return direccion;
}

export async function updateDireccion(id, data) {
  const updatedDireccion = await prisma.direccion.update({
    where: {
      id_direccion: id,
    },
    data: {
      codigo_postal: data.codigo_postal,
      calle: data.calle,
      colonia: data.colonia,
      num: data.num,
      telefono: data.telefono,
      referencia: data.referencia,
      id_ciudad: data.id_ciudad,
    },
  });
  await prisma.$disconnect();
  return updatedDireccion;
}

export async function deleteCiudadById(id) {
  const ciudadDeleted = await prisma.ciudad.delete({
    where: {
      id_direccion: id,
    },
  });
  await prisma.$disconnect();
  return ciudadDeleted;
}
