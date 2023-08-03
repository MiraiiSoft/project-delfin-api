import { Router } from "express";
import { getAllMunicipios, getOneMunicipio, addMunicipio, updateMunicipio, deleteMunicipio } from "../controllers/municipio.controller.js";

const router = Router();

router.get('/' , getAllMunicipios );
router.get('/:municipioID' , getOneMunicipio );
router.post('/add', addMunicipio );
router.put('/update/:municipioID', updateMunicipio );
router.delete('/delete/:municipioID', deleteMunicipio );

const municipioRouter = router;
export default municipioRouter;