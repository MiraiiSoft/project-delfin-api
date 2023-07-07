import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCarritos() {
  const carrito = await prisma.carrito.findMany();
  await prisma.$disconnect();
  return carrito;
}


export async function createCarrito(data) {
  const carritoCreated = await prisma.carrito.create({
    data: {
      id_login: data.id_login,
    },
  });
  await prisma.$disconnect();
  return carritoCreated;
}

export async function updateCarritoById(id, data) {
  const updateCarrito = await prisma.carrito.update({
    where: {
      id_carrito: id,
    },
    data: {
      id_login: data.id_login,
    },
  });
  await prisma.$disconnect();
  return updateCarrito;
}

export async function deleteCarritoById(id) {
  const eliminado = await prisma.carrito.delete({
    where: {
      id_carrito: id,
    },
  });
  await prisma.$disconnect();
  return eliminado;
}

export async function getCarritoById(id) {
  const carritoById = await prisma.carrito.findUnique({
    where: {
      id_carrito: id,
    },
  });
  await prisma.$disconnect();
  return carritoById;
}
