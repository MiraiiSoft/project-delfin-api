// Importar el módulo de Mercado Pago
import mercadopago from "mercadopago";

// Configurar las credenciales
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MERCADO_PAGO || "",
});

// Función para crear una orden de pago
export const createOrder = async (req) => {
    // buscar usuario que realiza la compra
    const result = await mercadopago.preferences.create({
        items: req.items,
        payment_methods: {
            default_installments: 1,
            installments: 1,
        },
        notification_url: `${process.env.API_URL}/api/payment/webhook-mercadopago/${req.venta}`,
    });

    return result;
};

// Función para obtener información sobre un pago
export const findPayment = async (id) => {
    try {
        const data = await mercadopago.payment.findById(id);
        return data.response;
        
    } catch (error) {
        return {
            success: false,
            message: error
        }
    }
};
