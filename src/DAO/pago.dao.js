import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPagos() {
  const pagos = await prisma.pago.findMany();
  await prisma.$disconnect();
  return pagos;
}

export async function getPagoById(id) {
  const pago = await prisma.pago.findUnique({
    where: {
      id_pago: id,
    },
  });
  await prisma.$disconnect();
  return pago;
}

export async function createPago(data) {
  const newPago = await prisma.pago.create({
    data: {
      tocken_pago: data.tocken_pago,
      monto: data.monto,
    },
  });
  await prisma.$disconnect();
  return newPago;
}

export async function updatePago(id, data) {
  const updatedPago = await prisma.pago.update({
    where: {
      id_pago: id,
    },
    data: {
      tocken_pago: data.tocken_pago,
      monto: data.monto,
    },
  });
  await prisma.$disconnect();
  return updatedPago;
}

export async function deletePagoById(id) {
  const pagoDeleted = await prisma.pago.delete({
    where: {
      id_pago: id,
    },
  });
  await prisma.$disconnect();
  return pagoDeleted;
}
