import { Router } from "express";
import { uploadImgs, deleteImgs } from "../controllers/upload.controller.js"

const router = Router();

router.post('/upload-img', uploadImgs);
router.delete('/delete-img', deleteImgs);

const uploadRouter = router;

export default uploadRouter;