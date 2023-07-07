import {Router} from "express";
import { addInventario, deleteInventario, getAllInventario, getOneInventario, updateInventario } from "../controllers/inventario.controller.js"

const router = Router();

router.get ('/', getAllInventario);
router.get ('/:inventarioID', getOneInventario);
router.post ('/add', addInventario);
router.put ('/update/:inventarioID', updateInventario);
router.delete('/delete/:inventarioID', deleteInventario);

const inventarioRouter = router;

export default inventarioRouter;

