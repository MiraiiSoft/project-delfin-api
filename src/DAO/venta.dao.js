import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getVentas = async () => {
  const detallesVentas = await prisma.venta.findMany({
    include: {
      envio: true,
      pago: true,
      detalle_venta: {
        include: {
          login: true,
          producto: true
        }
      },
    }
  });
  
  const ventaMap = new Map();
  
  detallesVentas.forEach(venta => {
    if (!ventaMap.has(venta.id_venta)) {
      ventaMap.set(venta.id_venta, venta);
    } else {
      const existingVenta = ventaMap.get(venta.id_venta);
      existingVenta.detalle_venta.push(...venta.detalle_venta);
    }
  });
  
  const deduplicatedDetallesVentas = Array.from(ventaMap.values());
  
  return deduplicatedDetallesVentas;
  };

export const getVentaById = async (id) => {
  const detallesVentas = await prisma.detalle_venta.findMany({
    include: {
      venta: {
        include: {
          pago: true,
          envio: true,
        },
      },
      login: {
        include: {
          persona: true,
        },
      },
      producto: true,
    },
    where: {
      id_venta: id,
    },
  });

  const groupedVentas = detallesVentas.reduce((result, detalle) => {
    const ventaId = detalle.id_venta;

    // Buscar si la venta ya está en el resultado
    const existingVenta = result.find((venta) => venta.id === ventaId);
    if (existingVenta) {
      existingVenta.producto.push({
        ...detalle.producto,
        cantidad_producto: detalle.cantidad_producto,
      });
    } else {
      // Crear una nueva venta con el producto
      const nuevaVenta = {
        id: ventaId,
        venta: detalle.venta,
        login: detalle.login,
        producto: [
          { ...detalle.producto, cantidad_producto: detalle.cantidad_producto },
        ],
        monto_total: detalle.monto_total,
      };
      result.push(nuevaVenta);
    }
    return result;
  }, []);

  await prisma.$disconnect();
  return groupedVentas;
};

export const getVentaByIdLogin = async (id) => {
  const detallesVentas = await prisma.detalle_venta.findMany({
    include: {
      venta: {
        include: {
          pago: true,
          envio: true,
        },
      },
      login: true,
      producto: true,
      carrito: true,
    },
    where: {
      id_login: id
    }
  });

  const groupedVentas = detallesVentas.reduce((result, detalle) => {
    const ventaId = detalle.id_venta;

    // Buscar si la venta ya está en el resultado
    const existingVenta = result.find((venta) => venta.id === ventaId);
    if (existingVenta) {
      existingVenta.producto.push({
        ...detalle.producto,
        cantidad_producto: detalle.cantidad_producto,
      });
    } else {
      // Crear una nueva venta con el producto
      const nuevaVenta = {
        id: ventaId,
        venta: detalle.venta,
        login: detalle.login,
        producto: [
          { ...detalle.producto, cantidad_producto: detalle.cantidad_producto },
        ],
        monto_total: detalle.monto_total,
      };
      result.push(nuevaVenta);
    }
    return result;
  }, []);

  await prisma.$disconnect();
  return groupedVentas;
};

export async function createVenta(data) {
  const newVenta = await prisma.venta.create({
    data: {
      fecha_venta: data.fecha_venta,
      status_venta: data.status_venta,
      id_envio: data.id_envio,
      id_pago: data.id_pago,
    },
  });
  await prisma.$disconnect();
  return newVenta;
}

export async function actualizarVenta(id, data) {
  const updatedVenta = await prisma.venta.update({
    where: {
      id_venta: id,
    },
    data: {
      fecha_venta: data.fecha_venta,
      status_venta: data.status_venta,
      id_envio: data.id_envio,
      id_pago: data.id_pago,
      id_detalle_venta: data.id_detalle_venta,
    },
  });
  await prisma.$disconnect();
  return updatedVenta;
}

export async function deleteVentaById(id) {
  const ventaDeleted = await prisma.venta.delete({
    where: {
      id_venta: id,
    },
  });
  await prisma.$disconnect();
  return ventaDeleted;
}
