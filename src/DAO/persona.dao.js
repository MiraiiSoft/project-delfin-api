import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPersonas() {
  const personas = await prisma.persona.findMany();
  await prisma.$disconnect();
  return personas;
}

export async function getPersonaById(id) {
  const persona = await prisma.persona.findUnique({
    where: {
      id_persona: id,
    },
  });
  await prisma.$disconnect();
  return persona;
}

export async function createPersona(data) {
  const newPersona = await prisma.persona.create({
    data: {
      nombre: data.nombre,
      apellido: data.apellido,
      telefono: data.telefono,
      id_direccion: data.id_direccion,
    },
  });
  await prisma.$disconnect();
  return newPersona;
}

export async function updatePersona(id, data) {
  const updatedPersona = await prisma.persona.update({
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
  await prisma.$disconnect();
  return updatedPersona;
}

export async function deletePersonaById(id) {
  const personaDeleted = await prisma.persona.delete({
    where: {
      id_persona: id,
    },
  });
  await prisma.$disconnect();
  return personaDeleted;
}
