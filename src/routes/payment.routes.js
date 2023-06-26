import { Router } from "express";
import { payment, recivedWebHookMercadoPago } from "../controllers/payment.controller.js";

const router = Router();

router.post( '/create-order', payment );
router.post( '/webhook-mercadopago/:orderID', recivedWebHookMercadoPago );

const paymentRouter = router;

export default paymentRouter;