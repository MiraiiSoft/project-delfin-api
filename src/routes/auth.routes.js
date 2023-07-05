import { Router } from "express";
import { register, login, confirmAccount } from "../controllers/auth.controller.js"

const router = Router();

router.post( '/register', register );
router.post( '/login', login ); 
router.get( '/confirm/:token', confirmAccount );

const authRouter = router;

export default authRouter;