import { Router } from "express";
import { addCarrito, deleteCarrito, getAllCarritos, getOneCarrito, getOneCarritoByUser, addProductToCart, deleteProductOfCart, updateCarritoProducto } from "../controllers/carrito.controller.js";
import { cleanerRequest, validationCarrito, validationCarritoProducto, authenticationJWT } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllCarritos );
router.get('/:cartID', [ authenticationJWT.tokenValidation, validationCarrito.noExistId ] , getOneCarrito);
router.get( '/user/login', [ authenticationJWT.tokenValidation ], getOneCarritoByUser );
router.post( '/add', [ validationCarrito.existName, cleanerRequest.carrito ] , addCarrito );
router.delete( '/delete/:cartID', [ validationCarrito.noExistId ] , deleteCarrito );

router.put( '/update/:cartID', [ validationCarritoProducto.noExistId ], updateCarritoProducto );
router.post( '/add/product', [ validationCarritoProducto.test, cleanerRequest.carritoProducto ], addProductToCart )
router.delete( '/delete/product/:cartProductID', deleteProductOfCart )

const carritoRouter = router;

export default carritoRouter;