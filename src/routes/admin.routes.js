import { Router } from "express";
import { isAdmin } from "../middlewares/authenticationJWT.js";
import { renderCategoria, renderColores, renderDashbBoars, renderEjs,renderFormUser, renderProductCard, renderProductForm, renderProducts, renderRoles, renderUserCard, renderVentaCard, renderVentas } from '../controllers/admin.controller.js'
import { authLogin } from "../middlewares/cleanerRequest.js";
const router = Router();


router.get('/',renderEjs);
router.get('/user',renderFormUser)
router.get('/productos',renderProducts)
router.get('/ventas',renderVentas)
router.get('/categorias',renderCategoria)
router.get('/roles',renderRoles)
router.get('/colores',renderColores)
router.get('/user/cardUser/:id',renderUserCard)
router.get('/productos/productCard/:id',renderProductCard)
router.get('/ventas/ventaCard/:id',renderVentaCard)
router.get('/producto/formProducto',renderProductForm)
router.get('/dashboard',renderDashbBoars)

const adminRouter = router;

export default adminRouter;
