import { Router } from "express";
import { getAllEnvios, getOneEnvios, addEnvios, updateEnvios, deleteEnvios } 
from "../controllers/envios.controller.js"
import { cleanerRequest, validationEnvios } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllEnvios );
router.get( '/:envioID', [ validationEnvios.noExistId ], getOneEnvios );
router.post( '/add', [ validationEnvios.noExistIdLogin, cleanerRequest.envio ], addEnvios );
router.put( '/update/:envioID', [ validationEnvios.noExistId, validationEnvios.noExistIdLogin, cleanerRequest.envio ], updateEnvios );
router.delete( '/delete/:envioID', [ validationEnvios.noExistId ], deleteEnvios );

const enviosRouter = router;

export default enviosRouter;
