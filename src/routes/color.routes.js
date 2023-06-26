import { Router } from "express";
import { getAllColor, getOneColor, addColor, updateColor, deleteColor } 
from "../controllers/color.controller.js"

const router = Router();

router.get( '/', getAllColor );
router.get( '/:colorID', getOneColor );
router.post( '/add', addColor );
router.put( '/update/:colorID', updateColor );
router.delete( '/delete/:colorID', deleteColor );

const colorRouter = router;

export default colorRouter;