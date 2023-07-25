import { Router } from "express";
import { getAllDirecciones, getOneDireccion, addDireccion, updatedDireccion, deleteDireccion } from "../controllers/direccion.controller.js";
import { validationAddress } from "../middlewares/index.js";

const router = Router();

router.get('/' , getAllDirecciones);
router.get('/:direccionID' , [ validationAddress.noExistId ], getOneDireccion);
router.post('/add', addDireccion);
router.put('/update/:direccionID', [ validationAddress.noExistId ], updatedDireccion);
router.delete('/delete/:direccionID', [ validationAddress.noExistId ], deleteDireccion)

const direccionRouter = router;
export default direccionRouter;