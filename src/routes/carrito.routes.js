import { Router } from "express";
import { addCarrito, deleteCarrito, getAllCarritos, getOneCarrito, updateCarrito } from "../controllers/carrito.controller.js";

const router = Router();

router.get( '/', getAllCarritos );
router.get('/:cartID', getOneCarrito);
router.post( '/add', addCarrito );
router.put( '/update/:cartID', updateCarrito );
router.delete( '/delete/:cartID', deleteCarrito );

const carritoRouter = router;

export default carritoRouter;