import { Router } from "express";
import { getAllUser, getOneUser, addUser, updateUser, deleteUser } 
from "../controllers/usuario.controller.js";
import { cleanerRequest, validationUser, authenticationJWT } from "../middlewares/index.js";

const router = Router();

router.get( '/', getAllUser );
router.get( '/perfil', [  authenticationJWT.tokenValidation ], getOneUser );
router.post( '/add', [ validationUser.existUser, validationUser.existMail, cleanerRequest.createUser ], addUser );
router.put( '/update/:userID', [ validationUser.noExistId, validationUser.existUserUpdate, validationUser.existMailUpdate, validationUser.correctDataUpdate,
    cleanerRequest.updateUser ], updateUser );
router.delete( '/delete/:userID', [ validationUser.noExistId ], deleteUser );

const usuarioRouter = router;

export default usuarioRouter;

/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: header
 *         name: token
 *         required: true            
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
 *                        
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
 *                   example: Ha ocurrido un error
 * 
 * /api/user/perfil:
 *   get:
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: header
 *         name: token
 *         required: true            
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
 *                   
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
 *                   example: Ha ocurrido un error
 * 
 * /api/user/add:
 *   post:
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: header
 *         name: token
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 nombre:
 *                    type: string
 *                    example: erick
 *                 apellido:
 *                    type: string
 *                    example: arevalo
 *                 telefono:
 *                    type: string
 *                    example: 5567568641
 *                 correo:
 *                    type: string
 *                    example: example@example.com
 *                 rol:
 *                     type: number
 *                     example: 1
 *                 usuario:
 *                    type: string
 *                    example: prueba
 *                 password:
 *                    type: string
 *                    example: prueba123
 *                 
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
 *                   example: Registro exictoso
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
 *                   example: Ha ocurrido un error
 * 
 * /api/user/update/{userID}:
 *   put:
 *     tags:
 *       - Usuario
 *     parameters:
 *       - in: header
 *         name: token
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 nombre:
 *                    type: string
 *                    example: erick
 *                 apellido:
 *                    type: string
 *                    example: arevalo
 *                 telefono:
 *                    type: string
 *                    example: 5567568641
 *                 correo:
 *                    type: string
 *                    example: example@example.com
 *                 id_roll:
 *                     type: number
 *                     example: 1
 *                 id_persona:
 *                     type: number
 *                     example: 1
 *                 id_direccion:
 *                     type: number
 *                     example: 1
 *                 usuario:
 *                    type: string
 *                    example: prueba
 *                 password:
 *                    type: string
 *                    example: prueba123
 *                 
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
 *                   example: Si el email se cambio, verificar el correo en su bandeja de entrada
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
 *                   example: Ha ocurrido un error
 */