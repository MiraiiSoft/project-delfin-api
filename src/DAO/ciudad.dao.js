import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCiudades() {
  const ciudades = await prisma.ciudad.findMany();
  await prisma.$disconnect();
  return ciudades;
}

export async function createCiudad(data) {
  const newCiudad = await prisma.ciudad.create({
    data: {
      ciudad: data.ciudad,
      id_pais: data.id_pais,
    },
  });
  await prisma.$disconnect();
  return newCiudad;
}

export async function getCiudadById(id) {
  const ciudad = await prisma.ciudad.findUnique({
    where: {
      id_ciudad: id,
    },
  });
  await prisma.$disconnect();
  return ciudad;
}

export async function updateCiudad(id, data) {
  const updatedCiudad = await prisma.ciudad.update({
    where: {
      id_ciudad: id,
    },
    data: {
      ciudad: data.ciudad,
      id_pais: data.id_pais,
    },
  });
  await prisma.$disconnect();
  return updateCiudad;
}

export async function deleteCiudad(id) {
  const ciudadDeleted = await prisma.ciudad.delete({
    where: {
      id_ciudad: id,
    },
  });
  await prisma.$disconnect();
  return ciudadDeleted;
}
