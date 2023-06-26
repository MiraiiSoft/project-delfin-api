import { Router } from "express";
import { getAllVentas, getOneVenta, addVenta, updateVenta } from "../controllers/venta.controller.js";

const router = Router();

router.get( '/', getAllVentas );
router.get( '/:ventaID', getOneVenta );
router.post( '/add', addVenta );
router.put( '/update/:ventaID', updateVenta );

const ventaRouter = router;

export default ventaRouter;