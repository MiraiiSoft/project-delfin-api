-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: papelerialinea
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (1,2),(2,3);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carrito_producto`
--

LOCK TABLES `carrito_producto` WRITE;
/*!40000 ALTER TABLE `carrito_producto` DISABLE KEYS */;
INSERT INTO `carrito_producto` VALUES (1,3,2,6),(2,1,2,7),(3,2,1,3);
/*!40000 ALTER TABLE `carrito_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Goma'),(2,'Lapíz'),(3,'Sacapuntas'),(4,'Marcador Pizarron'),(5,'Marcador Aceite'),(6,'Marcatextos'),(7,'Libreta'),(8,'Plastilina'),(9,'Pintura Acrilica'),(10,'Juego Geometrico'),(11,'Colores'),(12,'Lapicero'),(13,'Goma'),(14,'Lapíz'),(15,'Sacapuntas'),(16,'Marcador Pizarron'),(17,'Marcador Aceite'),(18,'Marcatextos'),(19,'Libreta'),(20,'Plastilina'),(21,'Pintura Acrilica'),(22,'Juego Geometrico'),(23,'Colores'),(24,'Lapicero');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'Ciudad de México',1),(2,'Puebla',1),(3,'Veracruz',1),(4,'Guadalajara',1),(5,'Monterrey',1);
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Negro','#000000'),(2,'Rojo','#FF0000'),(3,'Azul','#0000FF'),(4,'Verde','#008000'),(5,'NA',''),(6,'Negro','#000000'),(7,'Rojo','#FF0000'),(8,'Azul','#0000FF'),(9,'Verde','#008000'),(10,'NA','');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `counter`
--

LOCK TABLES `counter` WRITE;
/*!40000 ALTER TABLE `counter` DISABLE KEYS */;
/*!40000 ALTER TABLE `counter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `detalle_venta`
--

LOCK TABLES `detalle_venta` WRITE;
/*!40000 ALTER TABLE `detalle_venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,'73175','Calle Principal','5 de octubre','123','7761353506','Casa con porton negro',5),(2,'73175','2da Cerrada','Adolfo López Mateos','65','7761141256','Alado de la tienda Mary',5),(3,'73176','Calle Hortalizas','El Paraíso','34','776444125','Casa color turquesa',5);
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `envio`
--

LOCK TABLES `envio` WRITE;
/*!40000 ALTER TABLE `envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `inventario`
--

LOCK TABLES `inventario` WRITE;
/*!40000 ALTER TABLE `inventario` DISABLE KEYS */;
INSERT INTO `inventario` VALUES (1,1,12000,12,1000),(2,2,1200,120,1000),(3,3,1000,16,1000),(4,4,100,0,0);
/*!40000 ALTER TABLE `inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'dalia@example.com','Dalia','123456',1,1,1,1),(2,'nahomi@example.com','Nahomi','09876',1,1,2,1),(3,'alejandra@example.com','Alejandra','1234562',1,1,3,1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pago`
--

LOCK TABLES `pago` WRITE;
/*!40000 ALTER TABLE `pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'México');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1,'Dalia','Pérez Cruz','7761268951',1),(2,'Nahomi','Salas Gonzalez','7767894562',2),(3,'Alejandra','Arellano Martínez','7761112314',3);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(2,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(3,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(4,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(5,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(6,'1111','Marcador Magistral Clásico 4 Pz','Azor','Marcadores para pizarrón blanco / Tinta a base de alcohol / Alta intensidad / Punta de cincel de 6mm / Barril de plástico / Tapa de seguridad antiasfixia / Contiene 4 pz de colores / No tóxicos','{\"url\": [\"https://www.costco.com.mx/medias/sys_master/products/h8b/hf8/79546448052254.webp\"]}',70,75,80,50,5,65,4,2,2),(7,'4444','Goma Factis S 20 1 Pz','Factis','Goma de borrar FACTIS S 20 La original es mejor. Libre de PVC. No tóxico.','{\"url\": [\"https://chedrauimx.vtexassets.com/arquivos/ids/15741985-800-auto?v=638230776960330000&width=800&height=auto&aspect=true\"]}',30,39,36,34,3,70,1,12,1),(8,'5555','Goma Factis S 20 20 Pz','Factis','Goma de borrar FACTIS S 20 Caja con 20 pz. La original es mejor. Libre de PVC. No tóxico.','{\"url\": [\"https://chedrauimx.vtexassets.com/arquivos/ids/15741985-800-auto?v=638230776960330000&width=800&height=auto&aspect=true\"]}',185,14,210,200,1,100,2,6,2),(9,'6659','Lapicero Bic Caja 12 pz','Bic','BIC Bolígrafo Cristal Punto Mediano 1.0 mm Cuerpo Hexagonal Tapa Ventilada para Evitar Asfixia 12 Piezas','{\"url\": [\"https://chedrauimx.vtexassets.com/arquivos/ids/15741985-800-auto?v=638230776960330000&width=800&height=auto&aspect=true\"]}',30,39,36,34,3,70,1,12,3);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roll`
--

LOCK TABLES `roll` WRITE;
/*!40000 ALTER TABLE `roll` DISABLE KEYS */;
INSERT INTO `roll` VALUES (1,'Adiministrador'),(2,'Usuario'),(3,'Vendedor');
/*!40000 ALTER TABLE `roll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Caja'),(2,'Paquete'),(3,'Unitario'),(4,'Caja'),(5,'Paquete'),(6,'Unitario');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-31 20:13:21
