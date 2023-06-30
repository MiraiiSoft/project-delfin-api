import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRoles() {
  const roles = await prisma.rol.findMany();
  await prisma.$disconnect();
  return roles;
}

export async function getRolById(id) {
  const rol = await prisma.rol.findUnique({
    where: {
      id_roll: id,
    },
  });
  await prisma.$disconnect();
  return rol;
}

export async function createRol(data) {
  const newRol = await prisma.rol.create({
    data: {
      roll: data.roll,
    },
  });
  await prisma.$disconnect();
  return newRol;
}

export async function updateRol(id, data) {
  const updatedRol = await prisma.rol.update({
    where: {
      id_roll: id,
    },
    data: {
      roll: data.roll,
    },
  });
  await prisma.$disconnect();
  return updatedRol;
}

export async function deleteRolById(id) {
  const rolDeleted = await prisma.rol.delete({
    where: {
      id_roll: id,
    },
  });
  await prisma.$disconnect();
  return rolDeleted;
}
