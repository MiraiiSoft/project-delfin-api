import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MERCADO_PAGO || ""
});

export const createOrder = async ( req ) => {
    //buscar usuario que realiza la compra

    const result = await mercadopago.preferences.create({
        items: req.products,
        payment_methods: {
            default_installments: 1,
            installments: 1
        },
        notification_url: `${process.env.API_URL}/api/payment/webhook-mercadopago/`
    })
}