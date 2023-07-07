import { Router } from "express";
import {validationVenta} from '../middlewares/index.js'
import { getAllVentas, getOneVenta, addVenta, updateVenta, deleteVenta, getOneVentaByLogin } from "../controllers/venta.controller.js";

const router = Router();

router.get( '/', getAllVentas );
router.get( '/:ventaID', getOneVenta );
router.get( '/login/:ventaID', getOneVentaByLogin );
router.post( '/add',[validationVenta.validateVentaData], addVenta );
router.put( '/update/:ventaID', updateVenta );
router.delete('/delete/:ventaID',deleteVenta);

const ventaRouter = router;

export default ventaRouter;