import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProductos() {
  try {
    return await prisma.producto.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getProductoById(id) {
  try {
    return await prisma.producto.findUnique({
      where: {
        id_producto: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createProducto(data) {
  try {
    return await prisma.producto.create({
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
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateProducto(id, data) {
  try {
    return await prisma.producto.update({
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
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteProductoById(id) {
  try {
    return await prisma.producto.delete({
      where: {
        id_producto: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
