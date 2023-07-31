import express from "express"
import morgan from "morgan"
import { config } from 'dotenv';
config();
import cors from "cors";

import uploadRouter from "./routes/upload.routes.js";
import authRouter from "./routes/auth.routes.js";
import carritoRouter from "./routes/carrito.routes.js";
import categoriaRouter from "./routes/categoria.routes.js";
import colorRouter from "./routes/color.routes.js";
import enviosRouter from "./routes/envios.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import productoRouter from "./routes/producto.routes.js";
import rolRouter from "./routes/rol.routes.js";
import usuarioRouter from "./routes/usuario.routes.js";
import ventaRouter from "./routes/venta.routes.js";
import inventarioRouter from "./routes/inventario.routes.js";
import paisRouter from "./routes/pais.routes.js";
import adminRouter from "./routes/admin.routes.js";

const corsOptions = {
    exposedHeaders: ['token'],
    origin: [ 'http://localhost:4200' ]
};

const app = express();

app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors(corsOptions))

app.use( '/api/file', uploadRouter );
app.use( '/api/auth', authRouter );
app.use( '/api/shoppingcart', carritoRouter );
app.use( '/api/categoria', categoriaRouter );
app.use( '/api/color', colorRouter );
app.use( '/api/envios', enviosRouter );
app.use( '/api/payment', paymentRouter );
app.use( '/api/producto', productoRouter );
app.use( '/api/rol', rolRouter );
app.use( '/api/user', usuarioRouter );
app.use( '/api/venta', ventaRouter );
app.use( '/api/inventario', inventarioRouter );
app.use( '/api/pais', paisRouter );
app.use('/adminPanel',adminRouter)

export default app;
