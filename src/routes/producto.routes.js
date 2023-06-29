import { Router } from "express";
import { getAllProducts, getOneProducts, addProducts, updateProducts, deleteProducts } 
from "../controllers/producto.controller.js";

const router = Router();

router.get( '/', getAllProducts );
router.get( '/:productoID', getOneProducts );
router.post( '/add', addProducts );
router.put( '/update/:productoID', updateProducts );
router.delete( '/delete/:productoID', deleteProducts );

const productoRouter = router;

export default productoRouter;