import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTipos() {
  try {
    return await prisma.tipo.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getTipoById(id) {
  try {
    return await prisma.tipo.findUnique({
      where: {
        id_tipo: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createTipo(data) {
  try {
    return await prisma.tipo.create({
      data: {
        tipo: data.tipo,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateTipo(id, data) {
  try {
    return await prisma.tipo.update({
      where: {
        id_tipo: id,
      },
      data: {
        tipo: data.tipo,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteTipoById(id) {
  try {
    return await prisma.tipo.delete({
      where: {
        id_tipo: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
