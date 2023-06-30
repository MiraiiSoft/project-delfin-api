import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPersonas() {
  try {
    return await prisma.persona.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getPersonaById(id) {
  try {
    return await prisma.persona.findUnique({
      where: {
        id_persona: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createPersona(data) {
  try {
    return await prisma.persona.create({
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        id_direccion: data.id_direccion,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updatePersona(id, data) {
  try {
    return await prisma.persona.update({
      where: {
        id_persona: id,
      },
      data: {
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
        id_direccion: data.id_direccion,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deletePersonaById(id) {
  try {
    return await prisma.persona.delete({
      where: {
        id_persona: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
