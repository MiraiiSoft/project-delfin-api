import { Router } from "express";
import { uploadImgs, deleteImgs } from "../controllers/upload.controller.js"
import { readRequest, validation } from "../middlewares/index.js";

const router = Router();





router.post('/upload-img', [validation.dataUploadImg], uploadImgs);
router.delete('/delete-img', [readRequest.readQueryUrl], deleteImgs);

const uploadRouter = router;

export default uploadRouter;