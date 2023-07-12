import { Router } from "express";
import { payment, recivedWebHookMercadoPago } from "../controllers/payment.controller.js";
import { authenticationJWT } from "../middlewares/index.js";

const router = Router();

router.post( '/create-order', [ authenticationJWT.tokenValidation ], payment );
router.post( '/webhook-mercadopago/:orderID', recivedWebHookMercadoPago );

const paymentRouter = router;

export default paymentRouter;