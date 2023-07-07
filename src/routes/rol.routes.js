import { Router } from "express";
import { getAllRoles, getOneRol, addRol, updateRol, deleteRol } from "../controllers/rol.controller.js";
import { clean, validationRoll } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllRoles );
router.get( '/:rolID', [ validationRoll.checkNoExistRoll ], getOneRol );
router.post( '/add', [ validationRoll.checkExistRoll, clean.cleanRoll ], addRol );
router.put( '/update/:rolID', [ validationRoll.checkNoExistRoll, clean.cleanRoll ], updateRol );
router.delete( '/delete/:rolID', [ validationRoll.checkNoExistRoll ] ,deleteRol );

const rolRouter = router;

export default rolRouter;