import express from "express"
import morgan from "morgan"
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.set('port',process.env.PORT||3000)
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

export default app;