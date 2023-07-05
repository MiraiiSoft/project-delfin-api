import { Router } from "express";
import { uploadImgs, deleteImgs } from "../controllers/upload.controller.js"
import { readRequest, validation } from "../middlewares/index.js";

const router = Router();

/**
* @openapi
*tags:
*   - name: Upload
*  description: Endpoint para subir archivos
* paths:
*  /api/file/upload-img
*      post:
*         tags:
*            - Upload
*         summary: Subir imagenes
*         requestBody:
*            required: true
*            content:
*              application/json:
*                 schema:
*                     type: Object
*                     properties:
*                         nombreCarpeta:
*                              type: string
*                              example: Lapiz
*                         imgs:
*                              type: array
*                              itmes:
*                                  type: object
*                                  properties:
*                                      nombre:
*                                          type: string
*                                          example: Lapiz b1
*                                      base64:    
*                                          type: string
*                                          example: adafadadad
*
*/



router.post('/upload-img', [validation.dataUploadImg], uploadImgs);
router.delete('/delete-img', [readRequest.readQueryUrl], deleteImgs);

const uploadRouter = router;

export default uploadRouter;