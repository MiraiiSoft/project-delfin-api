import { Router } from "express";
import { getAllCategorias, getOneCategoria, addCategoria, updateCategoria, deleteCategoria } 
from "../controllers/categoria.controller.js"

const router = Router();

router.get( '/', getAllCategorias );
router.get( '/:categoriaID', getOneCategoria );
router.post( '/add', addCategoria );
router.put( '/update/:categoriaID', updateCategoria );
router.delete( '/delete/:categoriaID', deleteCategoria );

const categoriaRouter = router;

export default categoriaRouter;