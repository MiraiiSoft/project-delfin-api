import { Router } from "express";
import { getAllRoles, getOneRol, addRol, updateRol, deleteRol } from "../controllers/rol.controller.js";
import { cleanerRequest, validationRoll } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllRoles );
router.get( '/:rolID', [ validationRoll.noExistId ], getOneRol );
router.post( '/add', [ validationRoll.existName, cleanerRequest.roll ], addRol );
router.put( '/update/:rolID', [ validationRoll.noExistId, cleanerRequest.roll ], updateRol );
router.delete( '/delete/:rolID', [ validationRoll.noExistId ] ,deleteRol );

const rolRouter = router;

export default rolRouter;