import { Router } from "express";
import { getAllUser, getOneUser, addUser, updateUser, deleteUser } 
from "../controllers/usuario.controller.js";

const router = Router();

router.get( '/', getAllUser );
router.get( '/:userID', getOneUser );
router.post( '/add', addUser );
router.put( '/update/:userID', updateUser );
router.delete( '/delete/:userID', deleteUser );

const usuarioRouter = router;

export default usuarioRouter;