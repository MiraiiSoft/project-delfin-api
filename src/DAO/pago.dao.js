import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPagos() {
  try {
    return await prisma.pago.findMany();
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function getPagoById(id) {
  try {
    return await prisma.pago.findUnique({
      where: {
        id_pago: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function createPago(data) {
  try {
    return await prisma.pago.create({
      data: {
        tocken_pago: data.tocken_pago,
        monto: data.monto,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function updatePago(id, data) {
  try {
    return await prisma.pago.update({
      where: {
        id_pago: id,
      },
      data: {
        tocken_pago: data.tocken_pago,
        monto: data.monto,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}

export async function deletePagoById(id) {
  try {
    return await prisma.pago.delete({
      where: {
        id_pago: id,
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return error;
  }
}
