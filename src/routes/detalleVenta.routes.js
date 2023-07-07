import { Router } from "express";
import { getAllVentas } from '../controllers/detalle_Venta.controller'

const router = Router();

router.get( '/', getAllVentas );
router.get( '/:productoID', get );
router.post( '/add', addProducts );
router.put( '/update/:productoID', updateProducts );
router.delete( '/delete/:productoID', deleteProducts );

const productoRouter = router;

export default productoRouter;