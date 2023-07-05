import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getColores() {
  const colores = await prisma.color.findMany();
  await prisma.$disconnect();
  return colores;
}

export async function getColorById(id) {
  const colorById = await prisma.color.findUnique({
    where: {
      id_color: id,
    },
  });
  await prisma.$disconnect();
  return colorById;
}

export async function createColor(data) {
  const newColor = await prisma.color.create({
    data: {
      color: data.color,
      hexa: data.hexa,
    },
  });
  await prisma.$disconnect();
  return newColor;
}

export async function updateColor(id, data) {
  const updatedColor = await prisma.color.update({
    where: {
      id_color: id,
    },
    data: {
      color: data.color,
      hexa: data.hexa,
    },
  });
  await prisma.$disconnect();
  return updatedColor;
}

export async function eliminarColor(id, data) {
  const colorDeleted = await prisma.color.delete({
    where: {
      id_color: id,
    },
  });
  await prisma.$disconnect();
  return colorDeleted;
}
