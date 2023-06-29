import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFacturas() {
  try {
    return await prisma.factura.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getFacturaByNumero(numero) {
  try {
    return await prisma.factura.findUnique({
      where: {
        num_factura: numero,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createFactura(numero) {
  try {
    return await prisma.factura.create({
      data: {
        num_factura: numero,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updateFactura(numero, data) {
  try {
    return await prisma.factura.update({
      where: {
        num_factura: numero,
      },
      data: {
        
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deleteFacturaByNumero(numero) {
  try {
    return await prisma.factura.delete({
      where: {
        num_factura: numero,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
