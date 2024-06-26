import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRoles() {
  const roles = await prisma.roll.findMany();
  await prisma.$disconnect();
  return roles;
}

export async function getRolById(id) {
  const rol = await prisma.roll.findUnique({
    where: {
      id_roll: id,
    },
  });
  await prisma.$disconnect();
  return rol;
}

export async function createRol(data) {
  const newRol = await prisma.roll.create({
    data: {
      roll: data.roll,
    },
  });
  await prisma.$disconnect();
  return newRol;
}

export async function updateRolById(id, data) {
  const updatedRol = await prisma.roll.update({
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
  const rolDeleted = await prisma.roll.delete({
    where: {
      id_roll: id,
    },
  });
  await prisma.$disconnect();
  return rolDeleted;
}

export async function getRolByName(name){
  const rolName = await prisma.roll.findFirst({
    where:{
      roll: name
    }
  })
  await prisma.$disconnect();
  return rolName;
}
