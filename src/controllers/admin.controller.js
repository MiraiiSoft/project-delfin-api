import { getLoginById, getLogins } from "../DAO/login.dao.js";
import { getProductoById, getProductos } from "../DAO/producto.dao.js";
import { getVentaById, getVentas, getVentasByDate } from "../DAO/venta.dao.js";
import { getCategorias } from "../DAO/categoria.dao.js";
import { getRoles } from "../DAO/roll.dao.js";
import { getColores } from "../DAO/color.dao.js";
import { getAllTipos } from '../DAO/tipo.dao.js'

export const renderEjs = async (req, res) => {
  try {
    res.render("../src/views/index.ejs");
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderFormUser = async (req, res) => {
  try {
    const usuarios = await getLogins();
    res.render("../src/views/user.ejs", { usuarios });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderProducts = async (req, res) => {
  try {
    const productos = await getProductos();
    res.render("../src/views/products.ejs", { productos });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderVentas = async (req, res) => {
  try {
    const { dateStart, dateEnd } = req.query;
    let ventas;

    if(dateStart && dateEnd){
      ventas = await getVentasByDate(dateStart, dateEnd)
    }else{
      ventas = await getVentas();
    }
    
    res.render("../src/views/ventas.ejs", { ventas });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderCategoria = async (req, res) => {
  try {
    const categorias = await getCategorias();
    res.render("../src/views/categorias.ejs", { categorias });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderRoles = async (req, res) => {
  try {
    const roles = await getRoles();
    res.render("../src/views/roles.ejs", { roles });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderColores = async (req, res) => {
  try {
    const colores = await getColores();
    res.render("../src/views/colores.ejs", { colores });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderUserCard = async (req, res) => {
  try {
    const user = await getLoginById(parseInt(req.params.id));
    res.render("../src/views/cards/userCard.ejs", { user });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderProductCard = async (req, res) => {
  try {
    const producto = await getProductoById(parseInt(req.params.id));
    console.log(producto.imagen.url);
    res.render("../src/views/cards/productCard.ejs", { producto });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderVentaCard = async (req, res) => {
  try {
    const venta = await getVentaById(parseInt(req.params.id));
    const ventaObjeto = venta[0]; // Acceder al primer elemento del arreglo
    res.render("../src/views/cards/ventaCard.ejs", { venta: ventaObjeto });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
};

export const renderDashbBoars = async (req, res) => {
  try {
    res.render("../src/views/dashboard.ejs");
  } catch (error) {
    console.log("Hubo un error:", error);
  }
}

export const renderProductForm = async (req, res) => {
  try {
    const colores = await getColores();
    const categorias = await getCategorias();
    const tipos = await getAllTipos();
    const host =  process.env.API_URL;
    res.render("../src/views/forms/formProducto.ejs", { colores: colores, categorias: categorias, tipos: tipos, host });
  } catch (error) {
    console.log("Hubo un error:", error);
  }
}
