import { Router } from "express";
import { payment, recivedWebHookMercadoPago } from "../controllers/payment.controller.js";
import { authenticationJWT, cleanerRequest } from "../middlewares/index.js";

const router = Router();

router.post( '/create-order', [ authenticationJWT.tokenValidation, cleanerRequest.payment ], payment );
router.post( '/webhook-mercadopago/:orderID', recivedWebHookMercadoPago );

const paymentRouter = router;

export default paymentRouter;