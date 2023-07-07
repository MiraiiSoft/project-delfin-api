import { Router } from "express";
import { getAllCategorias, getOneCategoria, addCategoria, updateCategoria, deleteCategoria } 
from "../controllers/categoria.controller.js"
import { cleanerRequest, validationCategory } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllCategorias );
router.get( '/:categoriaID', [ validationCategory.noExistId ], getOneCategoria );
router.post( '/add', [ validationCategory.existName, cleanerRequest.category ], addCategoria );
router.put( '/update/:categoriaID', [ validationCategory.noExistId, cleanerRequest.category ], updateCategoria );
router.delete( '/delete/:categoriaID', [ validationCategory.noExistId ], deleteCategoria );

const categoriaRouter = router;

export default categoriaRouter;