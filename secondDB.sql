-- CreateTable
CREATE TABLE `carrito` (
    `id_carrito` INTEGER NOT NULL AUTO_INCREMENT,
    `id_login` INTEGER NOT NULL,

    INDEX `id_login`(`id_login`),
    PRIMARY KEY (`id_carrito`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carrito_producto` (
    `id_carrito_producto` INTEGER NOT NULL AUTO_INCREMENT,
    `id_producto` INTEGER NOT NULL,
    `id_carrito` INTEGER NOT NULL,
    `cantidad_producto` INTEGER NULL,

    UNIQUE INDEX `id_carrito_producto`(`id_carrito_producto`),
    INDEX `id_carrito`(`id_carrito`),
    INDEX `id_producto`(`id_producto`),
    PRIMARY KEY (`id_carrito_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria` (
    `id_categoria` INTEGER NOT NULL AUTO_INCREMENT,
    `categoria` VARCHAR(45) NULL,

    PRIMARY KEY (`id_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ciudad` (
    `id_ciudad` INTEGER NOT NULL AUTO_INCREMENT,
    `ciudad` VARCHAR(45) NULL,
    `id_pais` INTEGER NOT NULL,

    INDEX `id_pais`(`id_pais`),
    PRIMARY KEY (`id_ciudad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `color` (
    `id_color` INTEGER NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(45) NULL,
    `hexa` VARCHAR(25) NULL,

    PRIMARY KEY (`id_color`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalle_venta` (
    `id_detalle_venta` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad_producto` INTEGER NULL,
    `monto_total` DECIMAL(10, 0) NULL,
    `id_producto` INTEGER NOT NULL,
    `id_carrito` INTEGER NOT NULL,
    `id_login` INTEGER NOT NULL,
    `num_factura` VARCHAR(100) NULL,
    `id_venta` INTEGER NULL,

    INDEX `id_carrito`(`id_carrito`),
    INDEX `id_login`(`id_login`),
    INDEX `id_producto`(`id_producto`),
    INDEX `id_venta`(`id_venta`),
    PRIMARY KEY (`id_detalle_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direccion` (
    `id_direccion` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_postal` VARCHAR(10) NULL,
    `calle` VARCHAR(100) NULL,
    `colonia` VARCHAR(45) NULL,
    `num` VARCHAR(10) NULL,
    `telefono` VARCHAR(15) NULL,
    `referencia` VARCHAR(200) NULL,
    `id_ciudad` INTEGER NOT NULL,

    INDEX `id_ciudad`(`id_ciudad`),
    PRIMARY KEY (`id_direccion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `envio` (
    `id_envio` INTEGER NOT NULL AUTO_INCREMENT,
    `id_login` INTEGER NOT NULL,
    `fecha_envio` DATE NULL,
    `fecha_entrega` DATE NULL,
    `fecha_recoleccion` DATE NULL,
    `paqueteria` VARCHAR(45) NULL,
    `status_envio` VARCHAR(45) NULL,

    INDEX `id_login`(`id_login`),
    PRIMARY KEY (`id_envio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventario` (
    `id_inventario` INTEGER NOT NULL AUTO_INCREMENT,
    `id_producto` INTEGER NOT NULL,
    `existencias` INTEGER NULL,
    `unidadesPaquete` INTEGER NULL,
    `numPaquete` INTEGER NULL,

    INDEX `id_producto`(`id_producto`),
    PRIMARY KEY (`id_inventario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `id_login` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(25) NOT NULL,
    `usuario` VARCHAR(45) NULL,
    `password` VARCHAR(150) NULL,
    `is_verified` BOOLEAN NULL DEFAULT false,
    `is_active` BOOLEAN NULL DEFAULT true,
    `id_persona` INTEGER NOT NULL,
    `id_roll` INTEGER NOT NULL,

    INDEX `id_persona`(`id_persona`),
    INDEX `id_roll`(`id_roll`),
    PRIMARY KEY (`id_login`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pago` (
    `id_pago` INTEGER NOT NULL AUTO_INCREMENT,
    `tocken_pago` VARCHAR(45) NULL,
    `monto` DECIMAL(10, 0) NULL,

    PRIMARY KEY (`id_pago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pais` (
    `id_pais` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(45) NULL,

    PRIMARY KEY (`id_pais`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `persona` (
    `id_persona` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NULL,
    `apellido` VARCHAR(55) NULL,
    `telefono` VARCHAR(15) NULL,
    `id_direccion` INTEGER NOT NULL,

    INDEX `id_direccion`(`id_direccion`),
    PRIMARY KEY (`id_persona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `id_producto` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_barras` VARCHAR(45) NULL,
    `nombre` VARCHAR(200) NULL,
    `marca` VARCHAR(45) NULL,
    `descripcion` VARCHAR(500) NULL,
    `imagen` JSON NOT NULL,
    `compra` DECIMAL(10, 0) NULL,
    `precio_unitario` DECIMAL(10, 0) NULL,
    `precio_mayoreo` DECIMAL(10, 0) NULL,
    `precio_caja` DECIMAL(10, 0) NULL,
    `inicio_mayoreo` INTEGER NULL,
    `inicio_caja` INTEGER NULL,
    `id_color` INTEGER NOT NULL,
    `id_categoria` INTEGER NOT NULL,
    `id_tipo` INTEGER NOT NULL,

    INDEX `id_categoria`(`id_categoria`),
    INDEX `id_color`(`id_color`),
    INDEX `id_tipo`(`id_tipo`),
    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roll` (
    `id_roll` INTEGER NOT NULL AUTO_INCREMENT,
    `roll` VARCHAR(45) NULL,

    PRIMARY KEY (`id_roll`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo` (
    `id_tipo` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(45) NULL,

    PRIMARY KEY (`id_tipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `venta` (
    `id_venta` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_venta` DATE NULL,
    `status_venta` VARCHAR(45) NULL,
    `id_envio` INTEGER NOT NULL,
    `id_pago` INTEGER NOT NULL,

    INDEX `id_envio`(`id_envio`),
    INDEX `id_pago`(`id_pago`),
    PRIMARY KEY (`id_venta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `counter` (
    `id` VARCHAR(20) NOT NULL,
    `seq_value` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `carrito` ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login`(`id_login`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carrito_producto` ADD CONSTRAINT `carrito_producto_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `carrito_producto` ADD CONSTRAINT `carrito_producto_ibfk_2` FOREIGN KEY (`id_carrito`) REFERENCES `carrito`(`id_carrito`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ciudad` ADD CONSTRAINT `ciudad_ibfk_1` FOREIGN KEY (`id_pais`) REFERENCES `pais`(`id_pais`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_venta` ADD CONSTRAINT `detalle_venta_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `venta`(`id_venta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_venta` ADD CONSTRAINT `detalle_venta_ibfk_3` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_venta` ADD CONSTRAINT `detalle_venta_ibfk_4` FOREIGN KEY (`id_carrito`) REFERENCES `carrito`(`id_carrito`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_venta` ADD CONSTRAINT `detalle_venta_ibfk_5` FOREIGN KEY (`id_login`) REFERENCES `login`(`id_login`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `direccion` ADD CONSTRAINT `direccion_ibfk_1` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudad`(`id_ciudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `envio` ADD CONSTRAINT `envio_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `login`(`id_login`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `inventario` ADD CONSTRAINT `inventario_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto`(`id_producto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `persona`(`id_persona`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `login` ADD CONSTRAINT `login_ibfk_2` FOREIGN KEY (`id_roll`) REFERENCES `roll`(`id_roll`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `persona` ADD CONSTRAINT `persona_ibfk_1` FOREIGN KEY (`id_direccion`) REFERENCES `direccion`(`id_direccion`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_color`) REFERENCES `color`(`id_color`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_ibfk_3` FOREIGN KEY (`id_tipo`) REFERENCES `tipo`(`id_tipo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta` ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_envio`) REFERENCES `envio`(`id_envio`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `venta` ADD CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`id_pago`) REFERENCES `pago`(`id_pago`) ON DELETE NO ACTION ON UPDATE NO ACTION;
