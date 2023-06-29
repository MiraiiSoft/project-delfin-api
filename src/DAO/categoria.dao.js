import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCategorias(){
    try {
        return await prisma.categoria.findMany();
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function getCategoriaById(id){
    try {
        return await prisma.categoria.findUnique({
            where:{
                id_categoria:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function createCategoria(data){
    try {
        return await prisma.categoria.create({
            data:{
                categoria:data.categoria
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function updateCategoria(id,data){
    try {
        return await prisma.categoria.update({
            where:{
                id_categoria:id
            },
            data:{
                categoria:data.categoria
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function deleteCategoria(id){
    try {
        return await prisma.categoria.delete({
            where:{
                id_categoria:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}