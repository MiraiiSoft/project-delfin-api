
function clean( dataType, req ){
    const keys = Object.keys(req.body)
    const clean = {}

    for( let key of keys ){
        for( let nameProperty of dataType ){
            if( key === nameProperty ){
                clean[key] = req.body[key]
            }
        }
    }
    return clean;
}

export const authRegister = ( req, res, next ) => {
    const dataType = [ "nombre", "apellido", "telefono", "correo", "usuario", "contraseña" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const authLogin = ( req, res, next ) => {
    const dataType = [ "user", "pass" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const carrito = ( req, res, next ) => {
    const dataType = [ "id_login", "carrito_producto" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const carritoProducto = ( req, res, next ) => {
    const dataType = [ "id_producto", "id_carrito", "cantidad_producto" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const category = ( req, res, next ) => {
    const dataType = [ "categoria" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const type = ( req, res, next ) => {
    const dataType = [ "tipo" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const color = ( req, res, next ) => {
    const dataType = [ "color", "hexa" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const detalleVenta = ( req, res, next ) => {
    const dataType = [ "cantidad_producto", "monto_total", "id_producto", "id_carrito", "id_login", "num_factura", "id_venta" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const envio = ( req, res, next ) => {
    const dataType = [ "id_login", "fecha_envio", "fecha_entrega", "fecha_recoleccion", "paqueteria", "status_envio" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const adress = ( req, res, next ) => {
    const dataType = [ "codigo_postal", "calle", "colonia", "numero", "telefono", "referencia", "id_ciudad" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const city = ( req, res, next ) => {
    const dataType = [ "ciudad", "id_pais" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const country = ( req, res, next ) => {
    const dataType = [ "pais" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const payment = ( req, res, next ) => {
    const dataType = [ "payservice", "items", "products", "envio" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const product = ( req, res, next ) => {
    const dataType = [ "codigo_barras", "nombre", "marca", "descripcion", "imagen", "compra", "precio_unitario", "precio_mayoreo", "precio_caja", 
                        "inicio_mayoreo", "inicio_caja", "id_color", "id_categoria", "id_tipo" ]
    const dataClean = clean(dataType, req )
    const {  codigo_barras, nombre, marca, descripcion, imagen, compra, precio_unitario, precio_mayoreo, precio_caja, 
    inicio_mayoreo, inicio_caja, id_color, id_categoria, id_tipo } = dataClean;
    req.body = {
        codigo_barras,
        nombre,
        marca,
        descripcion,
        imagen: {
            url: [imagen]
        },
        compra: parseInt(compra),
        precio_unitario: parseInt(precio_unitario),
        precio_mayoreo: parseInt(precio_mayoreo),
        precio_caja: parseInt(precio_caja),
        inicio_mayoreo: parseInt(inicio_mayoreo),
        inicio_caja: parseInt(inicio_caja),
        id_color: parseInt(id_color),
        id_categoria: parseInt(id_categoria),
        id_tipo: parseInt(id_tipo)
    }
    next()
}

export const roll = ( req, res, next ) => {
    const dataType = [ "roll" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const createUser = ( req, res, next ) => {
    const dataType = [ "nombre", "apellido", "telefono", "correo", "rol", "usuario", "password" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const updateUser = ( req, res, next ) => {
    const dataType = [ "nombre", "apellido", "id_persona", "id_roll", "telefono", "rol", "correo", 
        "id_direccion", "usuario", "password", "is_verified" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const venta = ( req, res, next ) => {
    const dataType = [ "fecha_venta", "status_venta", "id_envio", "id_pago" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}