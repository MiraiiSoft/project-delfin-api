import { Router } from "express";
import { renderCategoria, renderColores, renderEjs,renderFormUser, renderProductCard, renderProductForm, renderProducts, renderRoles, renderUserCard, renderVentaCard, renderVentas } from '../controllers/admin.controller.js'
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
router.get('/productos/formProducto',renderProductForm)
router.get('/productos/editar/:id', renderProductForm)

const adminRouter = router;

export default adminRouter;
