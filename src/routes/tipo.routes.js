import { Router } from "express";
import { getTipos, getOneTipo, addTipo, updateTipo, deleteTipo } from "../controllers/tipo.controller.js";
import { cleanerRequest, validationType } from "../middlewares/index.js";

const router = Router();

router.get( '/' , getTipos);
router.get( '/:tipoID' , [ validationType.noExistId ], getOneTipo);
router.post('/add', [  validationType.existName, cleanerRequest.type ], addTipo );
router.put('/update/:tipoID', [ validationType.noExistId, validationType.existName, cleanerRequest.type ], updateTipo)
router.delete('/delete/:tipoId,', [ validationType.noExistId ], deleteTipo);

const tipoRouter = router;
export default tipoRouter;