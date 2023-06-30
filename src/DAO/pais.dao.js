import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getPaises() {
    try {
        return await prisma.pais.findMany()
    } catch (error) {
        console.log(error);
        return error
    }
}

export async function createPais(data){
    try {
        return await prisma.pais.create({
            data:{
                name:data.name
            }
        });
    } catch (error) {
        await prisma.$disconnect();
        
    }
}

export async function getPaisByName(name){
    try {
        return await prisma.pais.findFirst({
            where:{
                name:name
            }
        });
    } catch (error) {
        await prisma.$disconnect();
    }
}

export async function updatePais(id,data){
    try {
        return await prisma.pais.update({
            where:{
                id_pais:id
            },
            data:{
                name:data.name
            }
        });
    } catch (error) {
        await prisma.$disconnect();
    }
}

export async function deletePais(id){
    try {
        return await prisma.pais.delete({
            where:{
                id_pais:id
            }
        });
    } catch (error) {
        await prisma.$disconnect();
    }
}



