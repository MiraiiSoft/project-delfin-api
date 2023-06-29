import {PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getCarritoProductos(){
    try {
        return await prisma.carrito_producto.findMany()
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}


export async function getCarritoProductosById(id){
    try {
        return await prisma.carrito_producto.findUnique({
            where:{
                id_carrito_producto:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}


export async function createCarritoProductos(data){
    try {
        return await prisma.carrito_producto.create({
            data:{
                id_producto:data.id_producto,
                id_carrito:data.id_carrito,
                cantidad_producto:data.cantidad_producto
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function updateCarritoProductos(id,data){
    try{
        return await prisma.carrito_producto.update({
            where:{
                id_carrito_producto:id
            },
            data:{
                id_producto:data.id_producto,
                id_carrito:data.id_carrito,
                cantidad_producto:data.cantidad_producto
            }
        })
    }catch (error){
        await prisma.$disconnect();
        return error;
    }
}

export async function deleteCarritoProductosById(id){
    try {
        return await prisma.carrito_producto.delete({
            where:{
                id_carrito_producto:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}