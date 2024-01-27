import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCarritoProductos() {
  const carritoProductos = await prisma.carrito_producto.findMany();
  await prisma.$disconnect();
  return carritoProductos;
}

export async function getCarritoProductosById(id) {
  const carritoProductoById = await prisma.carrito_producto.findUnique({
    include: {
      producto: true,
    },
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
      id_carrito_producto: data.id_carrito_producto,
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

export async function deleteCarritoProductosByIdCarrito(id){
  const deleteCarrito = await prisma.carrito_producto.deleteMany({
    where: {
      id_carrito: id
    }
  })
  await prisma.$disconnect()
  return deleteCarrito;
}
export async function deleteCarritoProductosByIdAfterVenta(id_venta) {
  const carrito = await prisma.detalle_venta.findFirst({
    select: {
      id_carrito: true,
    },
    where: {
      id_venta: id_venta,
    },
  });
  const carritoProducto = await prisma.carrito_producto.findFirst({
    select: {
      id_carrito_producto: true,
    },
    where: {
      id_carrito: carrito.id_carrito,
    },
  });
  const deleteCarritoProdcuto = await prisma.carrito_producto.delete({
    where: {
      id_carrito_producto: carritoProducto.id_carrito_producto,
    },
  });
  await prisma.$disconnect();
  return deleteCarritoProdcuto;
}
