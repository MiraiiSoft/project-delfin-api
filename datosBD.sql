-- Active: 1688701670449@@127.0.0.1@3306@papelerialinea
-- Insertar datos en la tabla PAIS
use papelerialinea;
SELECT * FROM venta;
INSERT INTO pais (pais) VALUES
  ('México'),
  ('Estados Unidos'),
  ('Canadá');

-- Insertar datos en la tabla CIUDAD
INSERT INTO ciudad (ciudad, id_pais) VALUES
  ('Ciudad de México', 1),
  ('Nueva York', 2),
  ('Toronto', 3),
  ('Puebla', 1);

-- Insertar datos en la tabla COLOR
INSERT INTO color (color, hexa) VALUES
  ('Rojo', '#FF0000'),
  ('Azul', '#0000FF'),
  ('Verde', '#00FF00');

-- Insertar datos en la tabla CATEGORIA
INSERT INTO categoria (categoria) VALUES
  ('Papelería'),
  ('Electrónica'),
  ('Hogar');

-- Insertar datos en la tabla TIPO
INSERT INTO tipo (tipo) VALUES
  ('Bolígrafo'),
  ('Libreta'),
  ('Calculadora');

-- Insertar datos en la tabla PRODUCTO
INSERT INTO producto (codigo_barras, nombre, marca, descripcion, imagen, compra, precio_unitario, precio_mayoreo, precio_caja, inicio_mayoreo, inicio_caja, id_color, id_categoria, id_tipo) VALUES
  ('1234567890', 'Bolígrafo Azul', 'Marca A', 'Bolígrafo de tinta azul', '{"url": [
  "https://www.officedepot.com.mx/medias/100084580.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQxMjUyfGltYWdlL2pwZWd8aGUwL2hhMS8xMDgyMDQ5ODI1OTk5OC8xMDAwODQ1ODAuanBnXzEyMDBmdHd8N2IyZWFiODBmODFiZWM3OTM3OTY2NWE4YWE2MjY2MjRmODg5NDU4YmViZTY0MjkzZjFlMWI4ZTcyMzY5NjI1YQ",
  "https://m.media-amazon.com/images/I/51WFiZC1+VS._AC_SX679_.jpg"
]}', 5.00, 8.00, 6.50, 5.00, 10, 20, 2, 1, 1),
  ('9876543210', 'Libreta Grande', 'Marca B', 'Libreta de tapa dura', '{"url": [
  "https://www.officedepot.com.mx/medias/100084580.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQxMjUyfGltYWdlL2pwZWd8aGUwL2hhMS8xMDgyMDQ5ODI1OTk5OC8xMDAwODQ1ODAuanBnXzEyMDBmdHd8N2IyZWFiODBmODFiZWM3OTM3OTY2NWE4YWE2MjY2MjRmODg5NDU4YmViZTY0MjkzZjFlMWI4ZTcyMzY5NjI1YQ",
  "https://m.media-amazon.com/images/I/51WFiZC1+VS._AC_SX679_.jpg"
]}', 10.00, 15.00, 12.50, 10.00, 20, 30, 1, 2, 2),
  ('5678901234', 'Calculadora Científica', 'Marca C', 'Calculadora con funciones avanzadas', '{"url": [
  "https://www.officedepot.com.mx/medias/100084580.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQxMjUyfGltYWdlL2pwZWd8aGUwL2hhMS8xMDgyMDQ5ODI1OTk5OC8xMDAwODQ1ODAuanBnXzEyMDBmdHd8N2IyZWFiODBmODFiZWM3OTM3OTY2NWE4YWE2MjY2MjRmODg5NDU4YmViZTY0MjkzZjFlMWI4ZTcyMzY5NjI1YQ",
  "https://m.media-amazon.com/images/I/51WFiZC1+VS._AC_SX679_.jpg"
]}', 20.00, 25.00, 22.50, 20.00, 30, 40, 3, 3, 3);

-- Insertar datos en la tabla INVENTARIO
INSERT INTO inventario (id_producto, existencias, unidadesPaquete, numPaquete) VALUES
  (1, 100, 10, 5),
  (2, 50, 5, 10),
  (3, 80, 8, 5);

-- Insertar datos en la tabla ROLL
INSERT INTO roll (roll) VALUES
  ('Admin'),
  ('Usuario'),
  ('Invitado');


-- Insertar datos en la tabla DIRECCION
INSERT INTO direccion (codigo_postal, calle, colonia, num, telefono, referencia, id_ciudad) VALUES
  ('12345', 'Calle Principal', 'Centro', '123', '555-1234', 'Cerca del parque', 1),
  ('67890', 'Avenida Central', 'Zona Norte', '456', '555-5678', 'Frente al centro comercial', 2),
  ('54321', 'Calle Secundaria', 'Zona Sur', '789', '555-9876', 'Detrás del hospital', 3);


-- Insertar datos en la tabla PERSONA
INSERT INTO persona (nombre, apellido, telefono, id_direccion) VALUES
  ('Alan', 'Cruz', '555-1234', 1),
  ('María', 'López', '555-5678', 2),
  ('Carlos', 'González', '555-9876', 3);

  

-- Insertar datos en la tabla LOGIN
INSERT INTO login (correo, usuario, password, id_persona, id_roll) VALUES
  ('juan@example.com', 'juan123', 'password1', 1, 1),
  ('maria@example.com', 'maria456', 'password2', 2, 2),
  ('carlos@example.com', 'carlos789', 'password3', 3, 3);
SELECT * FROM LOGIN;
-- Insertar datos en la tabla CARRITO
INSERT INTO carrito (id_login) VALUES
  (2),
  (3),
  (4);

-- Insertar datos en la tabla CARRITO_PRODUCTO
INSERT INTO carrito_producto (id_producto, id_carrito, cantidad_producto) VALUES
  (1, 1, 2),
  (2, 2, 1),
  (3, 3, 3);

-- Insertar datos en la tabla COUNTER
INSERT INTO counter (id,seq_value) VALUES
  ('compraid',1);

-- Insertar datos en la tabla DETALLE_VENTA
INSERT INTO detalle_venta (cantidad_producto, monto_total, id_producto, id_carrito, id_login, num_factura, id_venta) VALUES
  (4, 16.00, 1, 1, 8, 1001, 1),
  (7, 15.00, 2, 1, 8, 1002, 1),
  (9, 67.50, 3, 1, 8, 1003, 1);

-- Insertar datos en la tabla ENVIO
INSERT INTO envio (id_login, fecha_envio, fecha_entrega, fecha_recoleccion, paqueteria, status_envio) VALUES
  (1, '2023-07-01', '2023-07-05', '2023-07-10', 'FedEx', 'En tránsito'),
  (2, '2023-07-02', '2023-07-06', '2023-07-11', 'UPS', 'En tránsito'),
  (3, '2023-07-03', '2023-07-07', '2023-07-12', 'DHL', 'En tránsito');

-- Insertar datos en la tabla PAGO
INSERT INTO pago (tocken_pago, monto) VALUES
  ('tok_123', 100.00),
  ('tok_456', 50.00),
  ('tok_789', 80.00);

-- Insertar datos en la tabla VENTA
INSERT INTO venta (fecha_venta, status_venta, id_envio, id_pago) VALUES
  ('2023-07-01', 'Completada', 1, 1),
  ('2023-07-02', 'Completada', 2, 2),
  ('2023-07-03', 'Completada', 3, 3);

INSERT INTO municipio (municipio, id_ciudad) VALUES
  ( 'Huauchinando', 4 );

SELECT * FROM venta;

  SELECT * FROM detalle_venta WHERE id_venta = 1;



  DROP TABLE COUNER;

 CREATE TABLE counter (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_counter VARCHAR(255) UNIQUE,
  seq_value INT
);

insert into counter (id_counter,seq_value) VALUES ('compraid',1);

select * from detalle_venta where id_login =8;

UPDATE USER 



