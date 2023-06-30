import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function getColores(){
    try {
        return await prisma.color.findMany()
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function getColorById(id){
    try {
        return await prisma.color.findUnique({
            where:{
                id_color:id
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function createColor(data){
    try {
        return await prisma.color.create({
            data:{
                color:data.color,
                hexa:data.hexa
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function updateColor(id,data){
    try {
        return await prisma.color.update({
            where:{
                id_color:id
            },
            data:{
                color:data.color,
                hexa:data.hexa
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}


export async function eliminarColor(id,data){
    try {
        return await prisma.color.delete({
            where:{
                id_color:id
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}