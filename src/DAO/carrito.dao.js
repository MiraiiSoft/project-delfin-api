import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCarrito(){
    try {
        return await prisma.carrito.findMany()
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function createCarrito(data){
    try {
        return await prisma.carrito.create({
            data:{
                id_login:data.id_login
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function updateCarrito(id,data){
    try {
        return await prisma.carrito.update({
            where:{
                id_carrito:id
            },
            data:{
                id_login:data.id_login
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function deleteCarritoById(id){
    try {
        return prisma.carrito.delete({
            where:{
                id_carrito:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function getCarritoById(id){
    try {
        return await prisma.carrito.findUnique({
            where:{
                id_carrito:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}