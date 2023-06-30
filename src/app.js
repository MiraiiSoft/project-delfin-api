import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import { getCarritoProductos } from "./DAO/carritoProducto.dao.js";
import { PrismaClient } from '@prisma/client';
import rolRouter from "./routes/rol.routes.js";

const app = express();
const prisma = new PrismaClient();

app.set('port', process.env.PORT || 3000);
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(rolRouter);


export default app;
