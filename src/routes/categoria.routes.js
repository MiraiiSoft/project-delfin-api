import { Router } from "express";
import { getAllCategorias, getOneCategoria, addCategoria, updateCategoria, deleteCategoria } 
from "../controllers/categoria.controller.js"
import { cleanerRequest, validationCategory } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllCategorias );
router.get( '/:categoriaID', [ validationCategory.noExistId ], getOneCategoria );
router.post( '/add', [ validationCategory.existName, cleanerRequest.category ], addCategoria );
router.put( '/update/:categoriaID', [ validationCategory.noExistId, validationCategory.existName, cleanerRequest.category ], updateCategoria );
router.delete( '/delete/:categoriaID', [ validationCategory.noExistId ], deleteCategoria );

const categoriaRouter = router;

export default categoriaRouter;

/**
 * 
 * @openapi
 * /api/categoria/:
 *      get:
 *          summary: Get all categories
 *          tags: 
 *              - Categoria
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
 *                                      example: Error al obtener las categorias
 * 
 * 
 * /api/categoria/{categoriaID}:
 *      get:
 *          summary: Get a categorie
 *          tags: 
 *              - Categoria
 *          parameters:
 *              - in: path
 *                name: categoriaID
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
 *                                      example: Error al obtener la categoria
 * 
 * 
 * /api/categoria/add:
 *      post:
 *          summary: Add a new categorie
 *          tags: 
 *              - Categoria
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
 *                                      example: La categoria ha sido creada
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
 *                                      example: Error al crear la categoria
 * 
 * /api/categoria/update/{categoriaID}:
 *      put:
 *          summary: Update the categorie
 *          tags: 
 *              - Categoria
 *          parameters:
 *              - in: path
 *                name: categoriaID
 *                required: true
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
 *                                      example: La categoria ha sido actualizada
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
 *                                      example: Error al actualizar la categoria 
 * 
 * /api/categoria/delete/{categoriaID}:
 *      delete:
 *          summary: Delete the categorie
 *          tags: 
 *              - Categoria
 *          parameters:
 *              - in: path
 *                name: categoriaID
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
 *                                      example: La categoria ha sido eliminada
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
 *                                      example: Error al eliminar la categoria 
 * 
 */