import { Router } from "express";
import { getAllRoles, getOneRol, addRol, updateRol, deleteRol } from "../controllers/rol.controller.js";
import { cleanerRequest, validationRole } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllRoles );
router.get( '/:rolID', [ validationRole.noExistId ], getOneRol );
router.post( '/add', [ validationRole.existName, cleanerRequest.roll ], addRol );
router.put( '/update/:rolID', [ validationRole.noExistId, validationRole.existName, cleanerRequest.roll ], updateRol );
router.delete( '/delete/:rolID', [ validationRole.noExistId ] ,deleteRol );

const rolRouter = router;

export default rolRouter;

/**
* @openapi
* /api/rol/:
*      get:
*          summary: Get all roles
*          tags: 
*              - Rol
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
*                                          id_roll:
*                                              type: integer
*                                              example: 1
*                                          roll:
*                                              type: string 
*                                              example: Administrador
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
*                                      example: Error al obtener los roles
* 
* 
* /api/rol/{rolID}:
*      get:
*          summary: Get a role
*          tags: 
*              - Rol
*          parameters:
*              - in: path
*                name: rolID
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
*                                          id_roll:
*                                              type: integer
*                                              example: 1
*                                          roll:
*                                              type: string 
*                                              example: Administrador
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
*                                      example: Error al obtener el rol
* 
* 
* /api/rol/add:
*      post:
*          summary: Add a new role
*          tags: 
*              - Rol
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                              roll: 
*                                  type: string
*                                  example: Administrador
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
*                                      example: El rol ha sido creado
*                                  data:
*                                      type: array
*                                  items:
*                                      type: object
*                                      properties:
*                                          id_roll:
*                                              type: integer
*                                              example: 1
*                                          roll:
*                                              type: string 
*                                              example: Administrador
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
*                                      example: Error al crear el rol
* 
* /api/rol/update/{rolID}:
*      put:
*          summary: Update the role
*          tags: 
*              - Rol
*          parameters:
*              - in: path
*                name: rolID
*                required: true
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                      schema:
*                          type: object
*                          properties:
*                             roll: 
*                                  type: string
*                                  example: Administrador
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
*                                      example: El rol ha sido actualizado
*                                  data:
*                                      type: array
*                                  items:
*                                      type: object
*                                      properties:
*                                          id_roll:
*                                              type: integer
*                                              example: 1
*                                          roll:
*                                              type: string 
*                                              example: Administrador
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
*                                      example: Error al actualizar el rol
* 
* /api/rol/delete/{rolID}:
*      delete:
*          summary: Delete the role
*          tags: 
*              - Rol
*          parameters:
*              - in: path
*                name: rolID
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
*                                      example: El rol ha sido eliminada
*                                  data:
*                                      type: array
*                                  items:
*                                      type: object
*                                      properties:
*                                          id_roll:
*                                              type: integer
*                                              example: 1
*                                          roll:
*                                              type: string 
*                                              example: Administrador
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
*                                      example: Error al eliminar el rol 
* 
*/