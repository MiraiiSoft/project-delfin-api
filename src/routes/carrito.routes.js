import { Router } from "express";
import { addCarrito, deleteCarrito, getAllCarritos, getOneCarrito, updateCarrito } from "../controllers/carrito.controller.js";
import { cleanerRequest, validationCarrito, validationCarritoProducto } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllCarritos );
router.get('/:cartID', [ validationCarrito.noExistId ] , getOneCarrito);
router.post( '/add', [ validationCarrito.existName, cleanerRequest.carrito ] ,addCarrito );
router.put( '/update/:cartID', [ validationCarritoProducto.noExistId ],updateCarrito );
router.delete( '/delete/:cartID', [ validationCarrito.noExistId ] , deleteCarrito );

const carritoRouter = router;

export default carritoRouter;