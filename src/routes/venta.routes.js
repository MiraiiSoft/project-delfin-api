import { Router } from "express";
import { getAllVentas, getOneVenta, addVenta, updateVenta, deleteVenta, getOneVentaByLogin } from "../controllers/venta.controller.js";
import { cleanerRequest, validationVenta } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllVentas );
router.get( '/:ventaID', [ validationVenta.noExistId ], getOneVenta );
router.get( '/login/:ventaID', [  ], getOneVentaByLogin );
router.post( '/add', [ validationVenta.noExistIdEnvio, validationVenta.noExistIdPago, cleanerRequest.venta ], addVenta );
router.put( '/update/:ventaID', [ validationVenta.noExistId, cleanerRequest.venta ], updateVenta );
router.delete('/delete/:ventaID', [ validationVenta.noExistId ], deleteVenta);

const ventaRouter = router;

export default ventaRouter;