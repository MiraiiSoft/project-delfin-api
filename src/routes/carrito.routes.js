import { Router } from "express";
import { addCarrito, deleteCarrito, getAllCarritos, getOneCarrito, updateCarrito, getOneCarritoByUser, addProductToCart } from "../controllers/carrito.controller.js";
import { cleanerRequest, validationCarrito, validationCarritoProducto, authenticationJWT } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllCarritos );
router.get('/:cartID', [ validationCarrito.noExistId ] , getOneCarrito);
router.get( '/user/login', [ authenticationJWT.tokenValidation ], getOneCarritoByUser );
router.post( '/add', [ validationCarrito.existName, cleanerRequest.carrito ] , addCarrito );
router.put( '/update/:cartID', [ validationCarritoProducto.noExistId ], updateCarrito );
router.delete( '/delete/:cartID', [ validationCarrito.noExistId ] , deleteCarrito );
router.post( '/add/product/', addProductToCart )

const carritoRouter = router;

export default carritoRouter;