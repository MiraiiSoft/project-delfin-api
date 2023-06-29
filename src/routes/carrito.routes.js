import { Router } from "express";
import { getOneShoppingCart, addShoppingCart, updateShoppingCart, deleteShoppingCart } 
from "../controllers/carrito.controller.js"

const router = Router();

router.get( '/', getOneShoppingCart );
router.post( '/add', addShoppingCart );
router.put( '/update/:cartID', updateShoppingCart );
router.delete( '/delete/:cartID', deleteShoppingCart );

const carritoRouter = router;

export default carritoRouter;