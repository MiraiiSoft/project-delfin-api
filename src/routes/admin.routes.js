import { Router } from "express";
import { cleanerRequest, validationRole, authenticationJWT } from "../middlewares/index.js";
import { renderCategoria, renderColores, renderDashbBoars, renderEjs,renderFormUser, renderProductCard, renderProductForm, renderProducts, renderRoles, renderUserCard, renderVentaCard, renderVentas } from '../controllers/admin.controller.js'
const router = Router();


router.get('/',renderEjs);
router.get('/user',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderFormUser)
router.get('/productos',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderProducts)
router.get('/ventas',renderVentas)
router.get('/categorias',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderCategoria)
router.get('/roles',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderRoles)
router.get('/colores',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderColores)
router.get('/user/cardUser/:id',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderUserCard)
router.get('/productos/productCard/:id',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderProductCard)
router.get('/ventas/ventaCard/:id',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderVentaCard)
router.get('/producto/formProducto',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderProductForm)
router.get('/dashboard',[ authenticationJWT.tokenValidation, authenticationJWT.isAdmin],renderDashbBoars)

const adminRouter = router;

export default adminRouter;
