import express from "express"
import morgan from "morgan"

const app = express();

app.set('port',process.env.PORT||3000)


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));

export default app;