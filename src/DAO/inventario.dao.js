import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getInventarios() {
  const inventarios = await prisma.inventario.findMany();
  await prisma.$disconnect();
  return inventarios;
}

export async function getInventarioById(id) {
  const inventario = await prisma.inventario.findUnique({
    where: {
      id_inventario: id,
    },
  });
  await prisma.$disconnect();
  return inventario;
}

export async function createInventario(data) {
  const newInventario = await prisma.inventario.create({
    data: {
      id_producto: data.id_producto,
      existencias: data.existencias,
      unidadesPaquete: data.unidadesPaquete,
      numPaquete: data.numPaquete,
    },
  });
  await prisma.$disconnect();
  return newInventario;
}

export async function updateInventario(id, data) {
  const updatedInventario = await prisma.inventario.update({
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
  await prisma.$disconnect();
  return updatedInventario;
}

export async function deleteInventarioById(id) {
  const inventarioDeleted = await prisma.inventario.delete({
    where: {
      id_inventario: id,
    },
  });
  await prisma.$disconnect();
  return inventarioDeleted;
}
