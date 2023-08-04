import { getLoginById, getLogins } from "../DAO/login.dao.js";
import { getProductoById, getProductos } from "../DAO/producto.dao.js";
import { getVentaById, getVentas } from "../DAO/venta.dao.js";
import { getCategorias } from "../DAO/categoria.dao.js";
import { getRoles } from "../DAO/roll.dao.js";
import { getColores } from "../DAO/color.dao.js";
import { getAllTipos } from '../DAO/tipo.dao.js'

export const renderEjs = async (req, res) => {
  res.render("../src/views/index.ejs");
};

export const renderFormUser = async (req, res) => {
  const usuarios = await getLogins();
  res.render("../src/views/user.ejs", { usuarios });
};

export const renderProducts = async (req, res) => {
  const productos = await getProductos();
  res.render("../src/views/products.ejs", { productos });
};

export const renderVentas = async (req, res) => {
  const ventas = await getVentas();
  res.render("../src/views/ventas.ejs", { ventas });
};

export const renderCategoria = async (req, res) => {
  const categorias = await getCategorias();
  res.render("../src/views/categorias.ejs", { categorias });
};

export const renderRoles = async (req, res) => {
  const roles = await getRoles();
  res.render("../src/views/roles.ejs", { roles });
};

export const renderColores = async (req, res) => {
  const colores = await getColores();
  res.render("../src/views/colores.ejs", { colores });
};

export const renderUserCard = async (req, res) => {
  const user = await getLoginById(parseInt(req.params.id));
  res.render("../src/views/cards/userCard.ejs", { user });
};

export const renderProductCard = async (req, res) => {
  const producto = await getProductoById(parseInt(req.params.id));
  console.log(producto.imagen.url);
  res.render("../src/views/cards/productCard.ejs", { producto });
};

export const renderVentaCard = async (req, res) => {
  const venta = await getVentaById(parseInt(req.params.id));
  const ventaObjeto = venta[0]; // Acceder al primer elemento del arreglo
  res.render("../src/views/cards/ventaCard.ejs", { venta: ventaObjeto });
};

export const renderDashbBoars = async (req,res) => {
  res.render("../src/views/dashboard.ejs");
}

export const renderProductForm = async (req,res) => {
  const colores = await getColores();
  const categorias = await getCategorias();
  const tipos = await getAllTipos();
  res.render("../src/views/forms/formProducto.ejs", { colores:colores,categorias:categorias,tipos:tipos});
}
