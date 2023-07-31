import { Router } from "express";
import { getAllColor, getOneColor,getOneColorByName, addColor, updateColor, deleteColor } 
from "../controllers/color.controller.js"
import { cleanerRequest, validationColor } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllColor );
router.get( '/:colorID', [ validationColor.noExistId ] , getOneColor );
router.get('/:colorName', getOneColorByName);
router.post( '/add', [ validationColor.existName, cleanerRequest.color ] ,addColor );
router.put( '/update/:colorID', [ validationColor.noExistId, validationColor.existName,cleanerRequest.color ] ,updateColor );
router.delete( '/delete/:colorID', [ validationColor.noExistId ] , deleteColor );

const colorRouter = router;

export default colorRouter;