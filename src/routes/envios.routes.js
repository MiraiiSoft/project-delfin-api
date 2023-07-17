import { Router } from "express";
import { getAllEnvios, getOneEnvios, addEnvios, updateEnvios, deleteEnvios } 
from "../controllers/envios.controller.js"
import { cleanerRequest, validationEnvios } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllEnvios );
router.get( '/:envioID', [ validationEnvios.noExistId ], getOneEnvios );
router.post( '/add', [ validationEnvios.existIdLogin, cleanerRequest.envio ], addEnvios );
router.put( '/update/:envioID', [ validationEnvios.existIdLogin, validationEnvios.noExistId, cleanerRequest.envio ], updateEnvios );
router.delete( '/delete/:envioID', [ validationEnvios.noExistId ], deleteEnvios );

const enviosRouter = router;

export default enviosRouter;

/**
 * 
 * @openapi
 * /api/envios/:
 *      get:
 *          summary: Get all envios
 *          tags: 
 *              - Envios
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                           schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: true
 *                                  message:
 *                                      type: string
 *                                      example: Peticion exitosa
 *                                  data:
 *                                      type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id_categoria:
 *                                              type: integer
 *                                              example: 1
 *                                          categoria:
 *                                              type: string 
 *                                              example: Gomas
 *              5XX:
 *                  description: FAILED
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   success:
 *                                      type: boolean
 *                                      example: false
 *                                   message:
 *                                      type: string
 *                                      example: Error al obtener los envios
 * 
 * 
 * /api/envios/{envioID}:
 *      get:
 *          summary: Get a envio
 *          tags: 
 *              - Envio
 *          parameters:
 *              - in: path
 *                name: envioID
 *                required: true
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                           schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: true
 *                                  message:
 *                                      type: string
 *                                      example: Peticion exitosa
 *                                  data:
 *                                      type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id_categoria:
 *                                              type: integer
 *                                              example: 1
 *                                          categoria:
 *                                              type: string 
 *                                              example: Gomas
 *              5XX:
 *                  description: FAILED
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: false
 *                                  message:
 *                                      type: string
 *                                      example: Error al obtener el envio
 * 
 * 
 * /api/envios/add:
 *      post:
 *          summary: Add a new envio
 *          tags: 
 *              - Envio
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              categoria: 
 *                                  type: string
 *                                  example: Tijeras
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                           schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: true
 *                                  message:
 *                                      type: string
 *                                      example: El envio ha sido creada
 *                                  data:
 *                                      type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id_envio:
 *                                              type: integer
 *                                              example: 1
 *                                          categoria:
 *                                              type: string 
 *                                              example: Tijeras
 *              5XX:
 *                  description: FAILED
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: false
 *                                  message:
 *                                      type: string
 *                                      example: Error al crear el envio
 * 
 * /api/envios/update/{envioID}:
 *      put:
 *          summary: Update the categorie
 *          tags: 
 *              - Envios
 *          parameters:
 *              - in: path
 *                name: envioID
 *                required: true
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              envio: 
 *                                  type: string
 *                                  example: Tijeras
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                           schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: true
 *                                  message:
 *                                      type: string
 *                                      example: El envio ha sido actualizado
 *                                  data:
 *                                      type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id_envio:
 *                                              type: integer
 *                                              example: 1
 *                                          envio:
 *                                              type: string 
 *                                              example: Tijeras
 *              5XX:
 *                  description: FAILED
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: false
 *                                  message:
 *                                      type: string
 *                                      example: Error al actualizar el envio
 * 
 * /api/envios/delete/{envioID}:
 *      delete:
 *          summary: Delete the cenvios
 *          tags: 
 *              - Envios
 *          parameters:
 *              - in: path
 *                name: envioID
 *                required: true
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                           schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: true
 *                                  message:
 *                                      type: string
 *                                      example: El envio ha sido eliminado
 *                                  data:
 *                                      type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id_envio:
 *                                              type: integer
 *                                              example: 1
 *                                          envio:
 *                                              type: string 
 *                                              example: Tijeras
 *              5XX:
 *                  description: FAILED
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: boolean
 *                                      example: false
 *                                  message:
 *                                      type: string
 *                                      example: Error al eliminar el envio
 * 
 */