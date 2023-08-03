import { Router } from "express";
import { getAllCiudades, getOneCiudad, addCiudad, updateCiudad, deleteCiudad, getCiudadesByIdPais } from "../controllers/ciudad.controller.js";
import { cleanerRequest, validationCity } from "../middlewares/index.js";

const router = Router();

router.get('/' , getAllCiudades);
router.get('/:ciudadID' , [ validationCity.noExistId ] , getOneCiudad);
router.get('/pais/:paisID', getCiudadesByIdPais );
router.post('/add', [ validationCity.existName, cleanerRequest.city ], addCiudad);
router.put('/update/:ciudadID', [ validationCity.noExistId, validationCity.existName, cleanerRequest.city ], updateCiudad);
router.delete('/delete/:ciudadID', [ validationCity.noExistId ], deleteCiudad)

const ciudadRouter = router;
export default ciudadRouter;