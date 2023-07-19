import { Router } from "express";
import { register, login, confirmAccount } from "../controllers/auth.controller.js"
import { cleanerRequest, validationUser } from "../middlewares/index.js";

const router = Router();

router.post( '/register', [ cleanerRequest.authRegister, validationUser.existUser, validationUser.existMail ],
    register );
router.post( '/login', [ cleanerRequest.authLogin ], login ); 
router.get( '/confirm/:token', confirmAccount );

const authRouter = router;

export default authRouter;

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
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
 *                 usuario:
 *                    type: string
 *                    example: prueba
 *                 contraseña:
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
 *                   example: A ocurrido un error
 * 
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 user:
 *                    type: string
 *                    example: prueba
 *                 pass:
 *                    type: string
 *                    example: prueba123
 *                 
 *     responses:
 *       200:
 *         description: OK
 *         parameters:
 *           - in: header
 *             name: token
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
 *                   example: Inicio de sesion correcto
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
 *                   example: A ocurrido un error
 * /api/auth/confirm/{token}:
 *   get:
 *     tags:
 *       - Auth
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
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
 *                   example: Confirmacion de cuenta exitosa
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
 *                   example: A ocurrido un error
 */