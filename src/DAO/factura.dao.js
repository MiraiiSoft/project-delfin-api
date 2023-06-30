import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFacturas() {
  const facturas = await prisma.factura.findMany();
  await prisma.$disconnect();
  return facturas;
}

export async function getFacturaByNumero(numero) {
  const factura = await prisma.factura.findUnique({
    where: {
      num_factura: numero,
    },
  });
  await prisma.$disconnect();
  return factura;
}

export async function createFactura(numero) {
  const newFactura = await prisma.factura.create({
    data: {
      num_factura: numero,
    },
  });
  await prisma.$disconnect();
  return newFactura;
}

export async function updateFactura(numero, data) {
  const updatedFactura = await prisma.factura.update({
    where: {
      num_factura: numero,
    },
    data: {},
  });
  await prisma.$disconnect();
  return updatedFactura;
}

export async function deleteFacturaByNumero(numero) {
  const facturaDeleted = await prisma.factura.delete({
    where: {
      num_factura: numero,
    },
  });
  await prisma.$disconnect();
  return facturaDeleted;
}
