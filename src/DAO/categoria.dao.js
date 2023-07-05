import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCategorias() {
  const categorias = await prisma.categoria.findMany();
  await prisma.$disconnect();
  return categorias;
}

export async function getCategoriaById(id) {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id_categoria: id,
    },
  });
  await prisma.$disconnect();
  return categoria;
}

export async function createCategoria(data) {
  const newCategoria = await prisma.categoria.create({
    data: {
      categoria: data.categoria,
    },
  });
  await prisma.$disconnect();
  return newCategoria;
}

export async function updateCategoriaById(id, data) {
  const updateCategoria = await prisma.categoria.update({
    where: {
      id_categoria: id,
    },
    data: {
      categoria: data.categoria,
    },
  });
  await prisma.$disconnect();
  return updateCategoria;
}

export async function deleteCategoriaById(id) {
  const categoriaDeleted = await prisma.categoria.delete({
    where: {
      id_categoria: id,
    },
  });
  await prisma.$disconnect();
  return categoriaDeleted;
}
