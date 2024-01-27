import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getMunicipios() {
    const municipios = await prisma.municipio.findMany({
        include: {
            ciudad: {
                include: {
                    pais: true
                }
            }
        }
    });
    await prisma.$disconnect();
    return municipios;
}

export async function getMunicipiosByIdCiudad(id) {
  const municipios = await prisma.municipio.findMany({
    where: {
      id_ciudad: id
    }
  });
  await prisma.$disconnect();
  return municipios;
}

export async function getMunicipioById(id) {
    const municipio = await prisma.municipio.findUnique({
      where: {
        id_municipio: id,
      },
      include: {
        ciudad: {
            include: {
                pais: true
            }
        }
    }
    });
    await prisma.$disconnect();
    return municipio;
}

export async function createMunicipio(data) {
    const newMunicipio = await prisma.municipio.create({
      data: {
        municipio: data.municipio,
        id_ciudad: data.id_ciudad
      },
    });
    await prisma.$disconnect();
    return newMunicipio;
}

export async function updateMunicipioById(id, data) {
    const updatedMunicipio = await prisma.municipio.update({
      where: {
        id_municipio: id,
      },
      data: {
        municipio: data.municipio,
        id_ciudad: data.id_ciudad
      },
    });
    await prisma.$disconnect();
    return updatedMunicipio;
}

export async function deleteMunicipioById(id) {
    const municipioDeleted = await prisma.municipio.delete({
      where: {
        id_municipio: id,
      },
    });
    await prisma.$disconnect();
    return municipioDeleted;
}