import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getDirecciones(){
    try {
        return await prisma.direccion.findMany();
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function createDirecciones(data){
    try {
        return await prisma.direccion.create({
            data:{
                codigo_postal:data.codigo_postal,
                calle:data.calle,
                colonia:data.colonia,
                num:data.num,
                telefono:data.telefono,
                referencia:data.referencia,
                id_ciudad:data.id_ciudad
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function getDireccionById(id){
    try {
        return await prisma.direccion.findUnique({
            where:{
                id_direccion:id
            }
        })
    } catch (error) {
        await prisma.$disconnect();
        return error;
    }
}

export async function updateDireccion(id,data){
    try {
        return await prisma.direccion.update({
            where:{
                id_direccion:id
            },
            data:{
                codigo_postal:data.codigo_postal,
                calle:data.calle,
                colonia:data.colonia,
                num:data.num,
                telefono:data.telefono,
                referencia:data.referencia,
                id_ciudad:data.id_ciudad
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}

export async function deleteCiudadById(id){
    try {
        return await prisma.ciudad.delete({
            where:{
                id_direccion:id
            }
        })
    } catch (error) {
        await prisma.$disconnect()
        return error;
    }
}