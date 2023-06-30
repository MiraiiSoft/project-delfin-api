import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export async function getCiudades(){
    try {
        return prisma.ciudad.findMany()
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function createCiudad(data){
    try {
        return await prisma.ciudad.create({
            data:{
                ciudad:data.ciudad,
                id_pais:data.id_pais
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error
    }
}

export async function getCiudadById(id){
    try {
        return await prisma.ciudad.findUnique({
            where:{
                id_ciudad:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function updateCiudad(id,data){
    try {
        return await prisma.ciudad.update({
            where:{
                id_ciudad:id
            },
            data:{
                ciudad:data.ciudad,
                id_pais:data.id_pais
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function deleteCiudad(id){
    try {
        return await prisma.ciudad.delete({
            where:{
                id_ciudad:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
    }
}

export default getCiudades();