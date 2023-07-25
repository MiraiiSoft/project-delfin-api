import { Router } from "express";
import { getAllPaises, getOnePaisByName, createPaiss, updatePaiss, deletePaiss } from "../controllers/pais.controller.js";
import { cleanerRequest, validationCountry } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllPaises );
router.get( '/:namePais', [ validationCountry.noExistName ], getOnePaisByName );
router.post( '/add', [ validationCountry.existName, cleanerRequest.country ], createPaiss );
router.put( '/update/:paisID', [ validationCountry.noExistId ], updatePaiss );
router.delete( '/delete/:paisID', [ validationCountry.noExistId ], deletePaiss )

const paisRouter = router;

export default paisRouter;