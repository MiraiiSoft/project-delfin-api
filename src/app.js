import express from "express"
import morgan from "morgan"
import { config } from 'dotenv';
config();

import uploadRouter from "./routes/upload.routes.js";
import { generateToken, verifyToken } from "./helpers/JWT.js";

const app = express();

app.set('port',process.env.PORT||3000)

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

app.use('/api/file', uploadRouter);

export default app;