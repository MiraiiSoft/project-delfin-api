import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProductos() {
  const productos = await prisma.producto.findMany({
    include:{
      inventario:true,
      color:true,
      tipo:true
    }
  });
  await prisma.$disconnect();
  return productos;
}

export async function getProductoById(id) {
  const producto = await prisma.producto.findUnique({
    include:{
      inventario:true,
      color:true,
      tipo:true
    },
    where: {
      id_producto: id,
    },
  });
  await prisma.$disconnect();
  return producto;
}

export async function getProductoByBarCode(barCode) {
  const product = await prisma.producto.findFirst({
    where: {
      codigo_barras: barCode
    }
  });
  await prisma.$disconnect();
  return product;
}

export async function createProducto(data) {
  const newProducto = await prisma.producto.create({
    data: {
      codigo_barras: data.codigo_barras,
      nombre: data.nombre,
      marca: data.marca,
      descripcion: data.descripcion,
      imagen: data.imagen,
      compra: data.compra,
      precio_unitario: data.precio_unitario,
      precio_mayoreo: data.precio_mayoreo,
      precio_caja: data.precio_caja,
      inicio_mayoreo: data.inicio_mayoreo,
      inicio_caja: data.inicio_caja,
      id_color: data.id_color,
      id_categoria: data.id_categoria,
      id_tipo: data.id_tipo,
    },
  });
  await prisma.$disconnect();
  return newProducto;
}

export async function updateProductoById(id, data) {
  const updatedProducto = await prisma.producto.update({
    where: {
      id_producto: id,
    },
    data: {
      codigo_barras: data.codigo_barras,
      nombre: data.nombre,
      marca: data.marca,
      descripcion: data.descripcion,
      imagen: data.imagen,
      compra: data.compra,
      precio_unitario: data.precio_unitario,
      precio_mayoreo: data.precio_mayoreo,
      precio_caja: data.precio_caja,
      inicio_mayoreo: data.inicio_mayoreo,
      inicio_caja: data.inicio_caja,
      id_color: data.id_color,
      id_categoria: data.id_categoria,
      id_tipo: data.id_tipo,
    },
  });
  await prisma.$disconnect();
  return updatedProducto;
}

export async function deleteProductoById(id) {
  const productoDeleted = await prisma.producto.delete({
    where: {
      id_producto: id,
    },
  });
  await prisma.$disconnect();
  return productoDeleted;
}
