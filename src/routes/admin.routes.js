import { Router } from "express";
import { renderEjs } from '../controllers/admin.controller.js'
const router = Router();

router.get('/adminPanel',renderEjs);

const adminRouter = router;

export default adminRouter;
