import { Router } from "express";
import { uploadImgs, deleteImgs } from "../controllers/upload.controller.js"
import { readRequest, validationFile } from "../middlewares/index.js";

const router = Router();

router.post('/upload-img', [ validationFile.dataUploadImg ], uploadImgs);
router.delete('/delete-img', [ readRequest.readQueryUrl ], deleteImgs);

const uploadRouter = router;

export default uploadRouter;

/**
 * @openapi
 * /api/file/upload-img:
 *   post:
 *     tags:
 *       - Upload and delete files
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 nombreCarpeta:
 *                    type: string
 *                    example: Lapiz
 *                 imgs:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                         nombre: 
 *                            type: string
 *                            example: Lapiz b1
 *                         base64:
 *                            type: string
 *                            example: zasdasdadadadasdasd
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties: 
 *                       nombre:
 *                          type: string
 *                          example: Lapiz
 *                       url:
 *                          type: string
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Error al subir imagen
 * 
 * /api/file/delete-img?url=https://urlimagen.com:
 *   delete:
 *     tags:
 *       - Upload and delete files
 *     parameters:
 *        - in: query
 *          name: url
 *          schema: 
 *            type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: delete img
 *                   
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Error al eliminar imagen firebase
 */