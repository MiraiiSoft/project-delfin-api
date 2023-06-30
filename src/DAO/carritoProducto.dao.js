import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCarritoProductos() {
  const carritoProductos = await prisma.carrito_producto.findMany();
  await prisma.$disconnect();
  return carritoProductos;
}

export async function getCarritoProductosById(id) {
  const carritoProductoById = await prisma.carrito_producto.findUnique({
    where: {
      id_carrito_producto: id,
    },
  });
  await prisma.$disconnect();
  return carritoProductoById;
}

export async function createCarritoProductos(data) {
  const createCarritoProducto = await prisma.carrito_producto.create({
    data: {
      id_producto: data.id_producto,
      id_carrito: data.id_carrito,
      cantidad_producto: data.cantidad_producto,
    },
  });
  await prisma.$disconnect();
  return createCarritoProducto;
}

export async function updateCarritoProductos(id, data) {
  const updateCarritoProductos = await prisma.carrito_producto.update({
    where: {
      id_carrito_producto: id,
    },
    data: {
      id_producto: data.id_producto,
      id_carrito: data.id_carrito,
      cantidad_producto: data.cantidad_producto,
    },
  });
  await prisma.$disconnect();
  return updateCarritoProductos;
}

export async function deleteCarritoProductosById(id) {
  const deleteCarritoProdcuto = await prisma.carrito_producto.delete({
    where: {
      id_carrito_producto: id,
    },
  });
  await prisma.$disconnect();
  return deleteCarritoProdcuto;
}
