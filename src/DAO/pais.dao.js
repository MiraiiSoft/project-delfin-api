import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getPaises() {
        const paises = await prisma.pais.findMany()
        console.log(error);
        return paises;
}

export async function createPais(data){
        const newPais = await prisma.pais.create({
            data:{
                pais:data.pais
            }
        });
        await prisma.$disconnect();
        return newPais;
}

export async function getPaisByName(pais){
        const pais = await prisma.pais.findFirst({
            where:{
                pais:pais
            }
        });
        await prisma.$disconnect();
        return pais;
}

export async function updatePais(id,data){
        const updatedPais = await prisma.pais.update({
            where:{
                id_pais:id
            },
            data:{
                pais:data.pais
            }
        });
        await prisma.$disconnect();
        return updatedPais;
}

export async function deletePais(id){
        const paisDeleted = await prisma.pais.delete({
            where:{
                id_pais:id
            }
        });
        await prisma.$disconnect();
        return paisDeleted; 
}



