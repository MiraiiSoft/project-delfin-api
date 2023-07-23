import { Router } from "express";
import { getAllDirecciones, getOneDireccion, addDireccion, updatedDireccion, deleteDireccion } from "../controllers/direccion.controller.js";
const router = Router();
router.get('/' , getAllDirecciones);
router.get('/:direccionID' , getOneDireccion);
router.post('/add', addDireccion);
router.put('/update/:direccionID', updatedDireccion);
router.delete('/delete/:direccionID', deleteDireccion)

const direccionRouter = router;
export default direccionRouter;