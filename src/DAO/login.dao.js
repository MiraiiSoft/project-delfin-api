import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLogins() {
  try {
    return await prisma.login.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getLoginById(id) {
  try {
    return await prisma.login.findUnique({
      where: {
        id_login: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createLogin(data) {
  try {
    return await prisma.login.create({
      data: {
        correo: data.correo,
        usuario: data.usuario,
        contraseña: data.contraseña,
        is_verified: data.is_verified,
        id_persona: data.id_persona,
        id_roll: data.id_roll,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateLogin(id, data) {
  try {
    return await prisma.login.update({
      where: {
        id_login: id,
      },
      data: {
        correo: data.correo,
        usuario: data.usuario,
        contraseña: data.contraseña,
        is_verified: data.is_verified,
        id_persona: data.id_persona,
        id_roll: data.id_roll,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteLoginById(id) {
  try {
    return await prisma.login.delete({
      where: {
        id_login: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}


export async function getLoginByUser(usuario){
  try {
    return await prisma.login.findUnique({
      where:{
        usuario:usuario
      }
    })
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}


export async function getLoginByEmail(correo){
  try {
    return await prisma.login.findUnique({
      where:{
        correo:correo
      }
    })
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
