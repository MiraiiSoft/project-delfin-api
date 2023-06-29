import { Router } from "express";
import { getAllRoles, getOneRol, addRol, updateRol, deleteRol } from "../controllers/rol.controller.js";

const router = Router();

router.get( '/', getAllRoles );
router.get( '/:rolID', getOneRol );
router.post( '/add', addRol );
router.put( '/update/:rolID', updateRol );
router.delete( '/delete/:rolID', deleteRol );

const rolRouter = router;

export default rolRouter;