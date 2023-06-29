import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRoles() {
  try {
    return await prisma.rol.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getRolById(id) {
  try {
    return await prisma.rol.findUnique({
      where: {
        id_roll: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createRol(data) {
  try {
    return await prisma.rol.create({
      data: {
        roll: data.roll,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateRol(id, data) {
  try {
    return await prisma.rol.update({
      where: {
        id_roll: id,
      },
      data: {
        roll: data.roll,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteRolById(id) {
  try {
    return await prisma.rol.delete({
      where: {
        id_roll: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
