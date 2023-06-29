import { Router } from "express";
import { getAllEnvios, getOneEnvios, addEnvios, updateEnvios, deleteEnvios } 
from "../controllers/envios.controller.js"

const router = Router();

router.get( '/', getAllEnvios );
router.get( '/:envioID', getOneEnvios );
router.post( '/add', addEnvios );
router.put( '/update/:envioID', updateEnvios );
router.delete( '/delete/:envioID', deleteEnvios );

const enviosRouter = router;

export default enviosRouter;