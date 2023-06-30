import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getInventarios() {
  try {
    return await prisma.inventario.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getInventarioById(id) {
  try {
    return await prisma.inventario.findUnique({
      where: {
        id_inventario: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createInventario(data) {
  try {
    return await prisma.inventario.create({
      data: {
        id_producto: data.id_producto,
        existencias: data.existencias,
        unidadesPaquete: data.unidadesPaquete,
        numPaquete: data.numPaquete,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateInventario(id, data) {
  try {
    return await prisma.inventario.update({
      where: {
        id_inventario: id,
      },
      data: {
        id_producto: data.id_producto,
        existencias: data.existencias,
        unidadesPaquete: data.unidadesPaquete,
        numPaquete: data.numPaquete,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteInventarioById(id) {
  try {
    return await prisma.inventario.delete({
      where: {
        id_inventario: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
