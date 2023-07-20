import { Router } from "express";
import { getTipos, getOneTipo, addTipo, deleteTipo, updateTipoById } from "../controllers/tipo.controller.js";

const router = Router();

router.get( '/' , getTipos);
router.get( '/:tipoID' , getOneTipo);
router.post('/add', addTipo );
router.put('/update/:tipoID', updateTipoById);
router.delete('/delete/:tipoID', deleteTipo);

const tipoRouter = router;

export default tipoRouter;