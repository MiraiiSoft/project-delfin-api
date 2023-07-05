import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLogins() {
  const logins = await prisma.login.findMany({
    include:{
      persona:true
    }
  });
  await prisma.$disconnect();
  return logins;
}

export async function getLoginById(id) {
  const login = await prisma.login.findUnique({
    where: {
      id_login: id,
    },
  });
  await prisma.$disconnect();
  return login;
}

export async function createLogin(data) {
  const newLogin = await prisma.login.create({
    data: {
      correo: data.correo,
      usuario: data.usuario,
      password: data.password,
      is_verified: data.is_verified,
      id_persona: data.id_persona,
      id_roll: data.id_roll,
      id_deta
    },
  });
  await prisma.$disconnect();
  return newLogin;
}

export async function updateLogin(id, data) {
  const updatedLogin = await prisma.login.update({
    where: {
      id_login: id,
    },
    data: {
      correo: data.correo,
      usuario: data.usuario,
      password: data.password,
      is_verified: data.is_verified,
      id_persona: data.id_persona,
      id_roll: data.id_roll,
    },
  });
  await prisma.$disconnect();
  return updatedLogin;
}

export async function deleteLoginById(id) {
  const loginDeleted = await prisma.login.delete({
    where: {
      id_login: id,
    },
  });
  await prisma.$disconnect();
  return loginDeleted;
}

export async function getLoginByUser(usuario) {
  const loginUser = await prisma.login.findFirst({
    where: {
      usuario: usuario,
    },
  });
  await prisma.$disconnect();
  return loginUser;
}

export async function getLoginByEmail(correo) {
  const loginEmail = await prisma.login.findFirst({
    where: {
      correo: correo,
    },
  });
  await prisma.$disconnect();
  return loginEmail;
}
