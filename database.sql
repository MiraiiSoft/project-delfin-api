SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema `papelerialinea`
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `papelerialinea`;
CREATE SCHEMA IF NOT EXISTS `papelerialinea` DEFAULT CHARACTER SET utf8;
USE `papelerialinea`;

-- -----------------------------------------------------
-- Table `papelerialinea`.`color`
-- -----------------------------------------------------
CREATE TABLE color (
  id_color INT NOT NULL AUTO_INCREMENT,
  color VARCHAR(45) NULL,
  hexa VARCHAR(25) NULL,
  PRIMARY KEY (id_color)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`categoria`
-- -----------------------------------------------------
CREATE TABLE categoria (
  id_categoria INT NOT NULL AUTO_INCREMENT,
  categoria VARCHAR(45) NULL,
  PRIMARY KEY (id_categoria)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`tipo`
-- -----------------------------------------------------
CREATE TABLE tipo (
  id_tipo INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(45) NULL,
  PRIMARY KEY (id_tipo)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`producto`
-- -----------------------------------------------------
CREATE TABLE producto (
  id_producto INT NOT NULL AUTO_INCREMENT,
  codigo_barras VARCHAR(45) NULL,
  nombre VARCHAR(200) NULL,
  marca VARCHAR(45) NULL,
  descripcion VARCHAR(300) NULL,
  imagen JSON NOT NULL,
  compra DECIMAL(10) NULL,
  precio_unitario DECIMAL(10) NULL,
  precio_mayoreo DECIMAL(10) NULL,
  precio_caja DECIMAL(10) NULL,
  inicio_mayoreo INT NULL,
  inicio_caja INT NULL,
  id_color INT NOT NULL,
  id_categoria INT NOT NULL,
  id_tipo INT NOT NULL,
  foreign key (id_color) references color (id_color),
  foreign key (id_categoria) references categoria (id_categoria),
  foreign key (id_tipo) references tipo (id_tipo),
  PRIMARY KEY (id_producto)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`inventario`
-- -----------------------------------------------------
CREATE TABLE inventario (
  id_inventario INT NOT NULL auto_increment,
  id_producto INT NOT NULL,
  existencias INT NULL,
  unidadesPaquete INT NULL,
  numPaquete INT NULL,
  PRIMARY KEY (id_inventario),
  foreign key (id_producto) references producto (id_producto)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`pais`
-- -----------------------------------------------------
CREATE TABLE pais (
  id_pais INT NOT NULL AUTO_INCREMENT,
  pais VARCHAR(45) NULL,
  PRIMARY KEY (id_pais)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE ciudad (
  id_ciudad INT NOT NULL AUTO_INCREMENT,
  ciudad VARCHAR(45) NULL,
  id_pais INT NOT NULL,
  foreign key (id_pais) references pais (id_pais),
  PRIMARY KEY (id_ciudad)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`direccion`
-- -----------------------------------------------------
CREATE TABLE direccion (
  id_direccion INT NOT NULL AUTO_INCREMENT,
  codigo_postal VARCHAR(10) NULL,
  calle VARCHAR(45) NULL,
  colonia VARCHAR(45) NULL,
  num VARCHAR(10) NULL,
  telefono VARCHAR(15) NULL,
  referencia VARCHAR(55) NULL,
  id_ciudad INT NOT NULL,
  foreign key (id_ciudad) references ciudad (id_ciudad),
  PRIMARY KEY (id_direccion)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`persona`
-- -----------------------------------------------------
CREATE TABLE persona (
  id_persona INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NULL,
  apellido VARCHAR(45) NULL,
  telefono VARCHAR(15) NULL,
  id_direccion INT NOT NULL,
  foreign key (id_direccion) references direccion (id_direccion),
  PRIMARY KEY (id_persona)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`roll`
-- -----------------------------------------------------
CREATE TABLE roll (
  id_roll INT NOT NULL AUTO_INCREMENT,
  roll VARCHAR(45) NULL,
  PRIMARY KEY (id_roll)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`login`
-- -----------------------------------------------------
CREATE TABLE login (
  id_login INT NOT NULL AUTO_INCREMENT,
  correo varchar(25) NOT NULL,
  usuario VARCHAR(45) NULL,
  password VARCHAR(150) NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  id_persona INT NOT NULL,
  id_roll INT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  foreign key (id_persona) references persona (id_persona),
  foreign key (id_roll) references roll (id_roll),
  PRIMARY KEY (id_login)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`carrito`
-- -----------------------------------------------------
CREATE TABLE carrito (
  id_carrito INT NOT NULL AUTO_INCREMENT,
  id_login INT NOT NULL,
  foreign key (id_login) references login (id_login),
  PRIMARY KEY (id_carrito)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`factura`
-- -----------------------------------------------------
CREATE TABLE counter (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_counter VARCHAR(255) UNIQUE,
  seq_value INT
);


-- -----------------------------------------------------
-- Table `papelerialinea`.`detalle_venta`
-- -----------------------------------------------------
CREATE TABLE detalle_venta (
  id_detalle_venta INT NOT NULL AUTO_INCREMENT,
  cantidad_producto INT NULL,
  monto_total DECIMAL(10) NULL,
  id_producto INT NOT NULL,
  id_carrito INT NOT NULL,
  id_login INT NOT NULL,
  num_factura VARCHAR(100) NULL,
  id_venta INT NOT NULL,
  foreign key (id_venta) references venta(id_venta),
  foreign key (id_producto) references producto (id_producto),
  foreign key (id_carrito) references carrito (id_carrito),
  foreign key (id_login) references login (id_login),
  PRIMARY KEY (id_detalle_venta)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`envio`
-- -----------------------------------------------------
CREATE TABLE envio (
  id_envio INT NOT NULL AUTO_INCREMENT,
  id_login INT NOT NULL,
  fecha_envio DATE NULL,
  fecha_entrega DATE NULL,
  fecha_recoleccion DATE NULL,
  paqueteria VARCHAR(45) NULL,
  status_envio VARCHAR(45) NULL,
  foreign key (id_login) references login (id_login),
  PRIMARY KEY (id_envio)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`pago`
-- -----------------------------------------------------
CREATE TABLE pago (
  id_pago INT NOT NULL AUTO_INCREMENT,
  tocken_pago VARCHAR(45) NULL,
  monto DECIMAL(10) NULL,
  PRIMARY KEY (id_pago)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`venta`
-- -----------------------------------------------------
CREATE TABLE venta (
  id_venta INT NOT NULL AUTO_INCREMENT,
  fecha_venta DATE NULL,
  status_venta VARCHAR(45) NULL,
  id_envio INT NOT NULL,
  id_pago INT NOT NULL,
  foreign key (id_envio) references envio (id_envio),
  foreign key (id_pago) references pago (id_pago),
  PRIMARY KEY (id_venta)
);

-- -----------------------------------------------------
-- Table `papelerialinea`.`carrito_producto`
-- -----------------------------------------------------
CREATE TABLE carrito_producto (
  id_carrito_producto INT NOT NULL,
  id_producto INT NOT NULL,
  id_carrito INT NOT NULL,
  cantidad_producto INT NULL,
  FOREIGN KEY (id_producto) REFERENCES producto (id_producto),
  FOREIGN KEY (id_carrito) REFERENCES carrito (id_carrito),
  PRIMARY KEY (id_carrito_producto)
);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
