
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

export const auth = ( req, res, next ) => {
    const dataType = [ "nombre", "apellido", "telefono", "id_direccion" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const carrito = ( req, res, next ) => {
    const dataType = [ "id_login" ]
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

export const payment = ( req, res, next ) => {
    const dataType = [ "tocken_pago", "monto" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const product = ( req, res, next ) => {
    const dataType = [ "codigo_barras", "nombre", "marca", "descripcion", "imagen", "compra", "precio_unitario", "precio_mayoreo", "precio_caja", 
                        "inicio_mayoreo", "inicio_caja", "id_color", "id_categoria", "id_caja" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const roll = ( req, res, next ) => {
    const dataType = [ "roll" ]
    const dataClean = clean(dataType, req )
    req.body = dataClean
    next()
}

export const user = ( req, res, next ) => {
    const dataType = [ "correo", "usuario", "password", "is_verified", "is_active", "id_persona", "id_roll" ]
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