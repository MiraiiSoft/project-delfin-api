import { Router } from "express";
import { getAllRoles, getOneRol, addRol, updateRol, deleteRol } from "../controllers/rol.controller.js";
import { cleanerRequest, validationRoll, authenticationJWT } from "../middlewares/index.js";

const router = Router();

router.get( '/', [ authenticationJWT.tokenValidation, authenticationJWT.isAdmin ], getAllRoles );

router.get( '/:rolID', [ authenticationJWT.tokenValidation, authenticationJWT.isAdmin, 
    validationRoll.noExistId ], getOneRol );

router.post( '/add', [ authenticationJWT.tokenValidation, authenticationJWT.isAdmin, 
    validationRoll.existName, cleanerRequest.roll ], addRol );

router.put( '/update/:rolID', [ authenticationJWT.tokenValidation, authenticationJWT.isAdmin, 
    validationRoll.noExistId, validationRoll.existName, cleanerRequest.roll ], updateRol );
    
router.delete( '/delete/:rolID', [ authenticationJWT.tokenValidation, authenticationJWT.isAdmin, 
    validationRoll.noExistId ] ,deleteRol );

const rolRouter = router;

export default rolRouter;