import { Router } from "express";
import { getAllVentas, getOneVenta, addVenta, updateVenta, deleteVenta } from "../controllers/venta.controller.js";

const router = Router();

router.get( '/', getAllVentas );
router.get( '/:ventaID', getOneVenta );
router.post( '/add', addVenta );
router.put( '/update/:ventaID', updateVenta );
router.delete('/delete/:ventaID',deleteVenta);

const ventaRouter = router;

export default ventaRouter;