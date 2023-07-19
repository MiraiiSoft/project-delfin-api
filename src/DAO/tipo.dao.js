import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllTipos() {
  const tipos = await prisma.tipo.findMany();
  await prisma.$disconnect();
  return tipos;
}

export async function getTipoById(id) {
  const tipo = await prisma.tipo.findUnique({
    where: {
      id_tipo: id,
    },
  });
  await prisma.$disconnect();
  return tipo;
}

export async function createTipo(data) {
  const newTipo = await prisma.tipo.create({
    data: {
      tipo: data.tipo,
    },
  });
  await prisma.$disconnect();
  return newTipo;
}

export async function updateTipo(id, data) {
  const updatedTipo = await prisma.tipo.update({
    where: {
      id_tipo: id,
    },
    data: {
      tipo: data.tipo,
    },
  });
  await prisma.$disconnect();
  return updatedTipo;
}

export async function deleteTipoById(id) {
  const tipoDeleted = await prisma.tipo.delete({
    where: {
      id_tipo: id,
    },
  });
  await prisma.$disconnect();
  return tipoDeleted;
}
