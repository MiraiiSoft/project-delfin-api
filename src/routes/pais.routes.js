import { Router } from "express";
import { getAllPaises, getOnePaisByName, createPaiss, updatePaiss, deletePaiss } from "../controllers/pais.controller.js";

const router = Router();

router.get( '/', getAllPaises );
router.get( '/:namePais', getOnePaisByName );
router.post( '/add', createPaiss );
router.put( '/update/:paisID', updatePaiss );
router.delete( '/delete/:paisID', deletePaiss )

const paisRouter = router;

export default paisRouter;