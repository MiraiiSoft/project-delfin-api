import { Router } from "express";
import { addCarritoProducto, deleteCarritoProducto, getAllCarritoProducto, getOneCarritoProducto, updateCarritoProducto } from "../controllers/carrito_producto.controller.js";

const router = Router();

router.get( '/', getAllCarritoProducto );
router.get( '/:cartProductID' , getOneCarritoProducto );
router.post( '/add', addCarritoProducto );
router.put( '/update/:cartProductID', updateCarritoProducto );
router.delete( '/delete/:cartProductID', deleteCarritoProducto );

const carritoProductoRouter = router;

export default carritoProductoRouter;