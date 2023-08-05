import { Router } from "express";
import { getAllProducts, getOneProducts, addProducts, updateProducts, deleteProducts, getProductosCategorias, getProductosColores, getAllMarcasProductos, getProductosPorMarcas } 
from "../controllers/producto.controller.js";
import { cleanerRequest, validationProduct } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllProducts );
router.get('/marcas', getAllMarcasProductos);
router.get('/marcas/:marcaProducto', getProductosPorMarcas);
router.get( '/:productoID', [ validationProduct.noExistId ], getOneProducts );
router.get('/categoria/:categoriaProductoID', getProductosCategorias);
router.get('/color/:colorProductoID', getProductosColores);
router.post( '/add', [ validationProduct.existName, cleanerRequest.product ] , addProducts );
router.put( '/update/:productoID', [ validationProduct.noExistId, validationProduct.noExistName, cleanerRequest.product ], updateProducts );
router.delete( '/delete/:productoID', [ validationProduct.noExistId ], deleteProducts );

const productoRouter = router;

export default productoRouter;