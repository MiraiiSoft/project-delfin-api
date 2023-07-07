import { Router } from "express";
import { getAllProducts, getOneProducts, addProducts, updateProducts, deleteProducts } 
from "../controllers/producto.controller.js";
import { cleanerRequest, validationProduct } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllProducts );
router.get( '/:productoID', [ validationProduct.noExistId ], getOneProducts );
router.post( '/add', [ validationProduct.existName ] , addProducts );
router.put( '/update/:productoID', [ validationProduct.noExistId, cleanerRequest.product ], updateProducts );
router.delete( '/delete/:productoID', [ validationProduct.noExistId ], deleteProducts );

const productoRouter = router;

export default productoRouter;