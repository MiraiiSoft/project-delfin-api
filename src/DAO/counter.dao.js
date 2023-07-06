import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllCounter = async () => {
  const counter = await prisma.counter.findMany();
  await prisma.$disconnect();
  return counter;
};

export const getCounterById = async (id) => {
  const counter = await prisma.counter.findFirst({
    where: {
      id,
    },
  });
  await prisma.$disconnect();
  return counter;
};

export const createCounter = async (id, seq) => {
  const newCounter = await prisma.counter.create({
    data: {
      id: id,
      seq_value: seq,
    },
  });
  await prisma.$disconnect();
  return newCounter
};

export const deleteCounter = async (id) => {
  const counterDeleted = await prisma.counter.delete({
    where:{
        id:id
    }
  });
  await prisma.$disconnect()
  return counterDeleted;
};


export const updateCounter = async (id,seq) =>{
    const counterUpdated = await prisma.counter.update({
        data:{
            id:id,
            seq_value:seq
        }
    });
    await prisma.$disconnect();
    return counterUpdated;
}
