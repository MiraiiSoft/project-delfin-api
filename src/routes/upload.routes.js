import { Router } from "express";
import { uploadImgs, deleteImgs } from "../controllers/upload.controller.js"
import { readRequest, validation } from "../middlewares/index.js";

const router = Router();

/**
 * @openapi
 * /api/file/upload-img:
 *   post:
 *     tags:
 *       - Upload and delete
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
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router.post('/upload-img', [ validation.dataUploadImg ], uploadImgs);
router.delete('/delete-img', [ readRequest.readQueryUrl ], deleteImgs);

const uploadRouter = router;

export default uploadRouter;