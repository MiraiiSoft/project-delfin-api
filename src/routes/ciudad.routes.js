import { Router } from "express";
import { getAllCiudades, getOneCiudad, addCiudad, updateCiudad, deleteCiudad } from "../controllers/ciudad.controller.js";

const router = Router();

router.get('/' , getAllCiudades);
router.get('/:ciudadID' , getOneCiudad);
router.post('/add', addCiudad);
router.put('/update/:ciudadID', updateCiudad);
router.delete('/delete/:ciudadID', deleteCiudad)

const ciudadRouter = router;
export default ciudadRouter;