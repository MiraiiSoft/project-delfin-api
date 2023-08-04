import { Router } from "express";
import { cancelOrder, captureOrder, payment, recivedWebHookMercadoPago } from "../controllers/payment.controller.js";
import { authenticationJWT, cleanerRequest } from "../middlewares/index.js";

const router = Router();

router.post( '/create-order', [ authenticationJWT.tokenValidation, cleanerRequest.payment ], payment );
router.get('/capture-order',captureOrder)
router.get('/cancel-order',cancelOrder)
router.post( '/webhook-mercadopago/:orderID', recivedWebHookMercadoPago );

const paymentRouter = router;

export default paymentRouter;