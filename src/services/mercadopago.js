import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MERCADO_PAGO || ""
});

//PARAMETRO PARA CREATE ORDER
// req => {
//     venta: 1,
//     items: [{
//         title: "",
//         unit_price: 0,
//         currency_id: "MXN",
//         quantity: 1
//     }]
// }
export const createOrder = async ( req ) => {
    //buscar usuario que realiza la compra
    
    const result = await mercadopago.preferences.create({
        items: req.items,
        payment_methods: {
            default_installments: 1,
            installments: 1
        },
        notification_url: `${process.env.API_URL}/api/payment/webhook-mercadopago/${req.venta}`
    });

    return result;
}

export const findPayment = async ( id ) => {    
    const data = await mercadopago.payment.findById( id );
    return data.response;
}