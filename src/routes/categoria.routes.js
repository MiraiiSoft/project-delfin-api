import { Router } from "express";
import { getAllCategoria, getOneCategoria, addCategoria, updateCategoria, deleteCategoria } 
from "../controllers/categoria.controller.js"

const router = Router();

router.get( '/', getAllCategoria );
router.get( '/:categoriaID', getOneCategoria );
router.post( '/add', addCategoria );
router.put( '/update/:categoriaID', updateCategoria );
router.delete( '/delete/:categoriaID', deleteCategoria );

const categoriaRouter = router;

export default categoriaRouter;