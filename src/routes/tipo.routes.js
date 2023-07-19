import { Router } from "express";
import { getTipos, getOneTipo, addTipo,updateColor, deleteTipo } from "../controllers/tipo.controller";

const router = Router();

router.get( '/' , getTipos);
router.get( '/:tipoID' , getOneTipo);
router.post('/add', addTipo );
router.put('/update/:tipoID', updateColor)
router.delete('/delete/:tipoId', deleteTipo);

const tipoRouter = router;
export default tipoRouter;