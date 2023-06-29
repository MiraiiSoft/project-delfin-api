import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getDetalleVenta(){
    try {
        return await prisma.detalle_venta.findMany()
    } catch (error) {
        
    }
}

export async function getDetalleVentaById(id){
    try {
        return await prisma.detalle_venta.findUnique({
            where:{
                id_detalle_venta:id
            }
        })
    } catch (error) {
        
    }
}


export async function createDetalleVenta(data){
    try {
        return await prisma.detalle_venta.create({
            data:{
                cantidad_producto:data.cantidad_producto,
                monto_total:data.monto_total,
                id_producto:data.id_producto,
                id_carrito:data.id_carrito,
                id_login:data.id_login,
                id_venta:data.id_venta,
                num_factura:data.num_factura
            }
        })
    } catch (error) {
        
    }
}

export async function updateDetalleVenta(id,data){
    try {
        return await prisma.detalle_venta.update({
            where:{
                id_detalle_venta:id
            },
            data:{
                cantidad_producto:data.cantidad_producto,
                monto_total:data.monto_total,
                id_producto:data.id_producto,
                id_carrito:data.id_carrito,
                id_login:data.id_login,
                id_venta:data.id_venta,
                num_factura:data.num_factura
            }
        })
    } catch (error) {
        
    }
}