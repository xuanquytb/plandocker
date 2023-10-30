CREATE DATABASE  IF NOT EXISTS `webecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webecommerce`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: webecommerce
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `nameBanner` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'vay-ngan.jpg','Váy ngắn'),(2,'vay-nu-xep-tang.jpg','Váy nữ xếp tầng'),(3,'ao-thun.jpg','Áo thun');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `stateCard` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  CONSTRAINT `fk_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,1,0);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carddetail`
--

DROP TABLE IF EXISTS `carddetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carddetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCard` int NOT NULL,
  `idProduct` int DEFAULT NULL,
  `dongia` double NOT NULL,
  `quantity` int NOT NULL,
  `sumMoney` double NOT NULL,
  `createDate` date DEFAULT (curdate()),
  `detailstate` int DEFAULT '0',
  `idPayOrder` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_card` (`idCard`),
  KEY `fk_productDe` (`idProduct`),
  CONSTRAINT `fk_card` FOREIGN KEY (`idCard`) REFERENCES `card` (`id`),
  CONSTRAINT `fk_productDe` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carddetail`
--

LOCK TABLES `carddetail` WRITE;
/*!40000 ALTER TABLE `carddetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `carddetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameCategory` (`nameCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourite`
--

DROP TABLE IF EXISTS `favourite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idProduct` int NOT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_fa` (`idProduct`),
  KEY `fk_user_fa` (`idUser`),
  CONSTRAINT `fk_product_fa` FOREIGN KEY (`idProduct`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_user_fa` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite`
--

LOCK TABLES `favourite` WRITE;
/*!40000 ALTER TABLE `favourite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameManufacturer` varchar(200) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `mail` varchar(100) NOT NULL,
  `nameImage` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameManufacturer` (`nameManufacturer`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetail`
--

DROP TABLE IF EXISTS `orderdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idCustomer` int NOT NULL,
  `idEmployee` int DEFAULT NULL,
  `createAt` date DEFAULT (curdate()),
  `sumPayment` double NOT NULL,
  `state` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT 'Chờ thanh toán',
  `idPayment` int NOT NULL,
  `address` text NOT NULL,
  `stateOrder` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_userCus` (`idCustomer`),
  KEY `fk_Payment` (`idPayment`),
  KEY `fk_userEmp` (`idEmployee`),
  CONSTRAINT `fk_Payment` FOREIGN KEY (`idPayment`) REFERENCES `payment` (`id`),
  CONSTRAINT `fk_userCus` FOREIGN KEY (`idCustomer`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_userEmp` FOREIGN KEY (`idEmployee`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameOrigin` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameOrigin` (`nameOrigin`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origin`
--

LOCK TABLES `origin` WRITE;
/*!40000 ALTER TABLE `origin` DISABLE KEYS */;
INSERT INTO `origin` VALUES (1,'Việt Nam','Việt nam'),(2,'Hàn quốc','Hàn quốc');
/*!40000 ALTER TABLE `origin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenphuongthuc` text NOT NULL,
  `description` text NOT NULL,
  `nameImage` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'Thanh toán khi nhận hàng','Khách hàng chuẩn bị khoản tiền tương ứng khi nhân hàng','default.png'),(2,'Chuyển khoản ngân hàng','Khách hàng chuyển khoản số tiền qua ngân hàng Vietcombank Stk: 9869603825. Và đính kèm mã đơn hàng vào phần ghi chú','default.png'),(3,'Thanh toán qua Momo','Khách hàng chuyển khoản số tiền qua ví điện tử Momo Stk: 0869603825.Và đính kèm mã đơn hàng vào phần ghi chú','default.png'),(4,'9Pay','Khách hàng thanh toán qua cổng điện tử 9Pay','default.png');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `warranty` int NOT NULL,
  `quantity` int NOT NULL,
  `quantityIn` int NOT NULL,
  `priceIn` double NOT NULL DEFAULT '0',
  `price` double NOT NULL,
  `promotional` double NOT NULL,
  `status` text NOT NULL,
  `image` varchar(150) NOT NULL,
  `gallery` text NOT NULL,
  `sold` int DEFAULT '0',
  `liked` int DEFAULT '0',
  `idInvoiceIn` int DEFAULT NULL,
  `idCategory` int NOT NULL,
  `idUnit` int NOT NULL,
  `idManufacturer` int NOT NULL,
  `idOrigin` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameProduct` (`nameProduct`),
  KEY `idCategory` (`idCategory`),
  KEY `idUnit` (`idUnit`),
  KEY `idManufacturer` (`idManufacturer`),
  KEY `idOrigin` (`idOrigin`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`idUnit`) REFERENCES `unit` (`id`),
  CONSTRAINT `product_ibfk_3` FOREIGN KEY (`idManufacturer`) REFERENCES `manufacturer` (`id`),
  CONSTRAINT `product_ibfk_4` FOREIGN KEY (`idOrigin`) REFERENCES `origin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `product_view`
--

DROP TABLE IF EXISTS `product_view`;
/*!50001 DROP VIEW IF EXISTS `product_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `product_view` AS SELECT 
 1 AS `id`,
 1 AS `nameProduct`,
 1 AS `description`,
 1 AS `warranty`,
 1 AS `quantity`,
 1 AS `price`,
 1 AS `promotional`,
 1 AS `image`,
 1 AS `gallery`,
 1 AS `sold`,
 1 AS `liked`,
 1 AS `nameCategory`,
 1 AS `idCate`,
 1 AS `nameUnit`,
 1 AS `status`,
 1 AS `nameManufacturer`,
 1 AS `nameOrigin`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameRole` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameRole` (`nameRole`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrators','Quyền cho quản trị viên'),(2,'Customer','Quyền dành cho khách hàng'),(3,'Employee','Quyền dành cho nhân viên');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameUnit` varchar(200) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nameUnit` (`nameUnit`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,'Chiếc','1'),(2,'Bộ','2');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(150) NOT NULL,
  `sex` varchar(50) DEFAULT '',
  `dateOfBirth` date DEFAULT '1980-09-12',
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL DEFAULT (_utf8mb4''),
  `statusLock` int NOT NULL DEFAULT (1),
  `countOrder` int DEFAULT (0),
  `totalMonny` double DEFAULT (0),
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `nameAvata` varchar(150) DEFAULT (_utf8mb4'default.jpg'),
  `idCard` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `idCard_UNIQUE` (`idCard`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Quản trị viên','admin','$2b$10$FMz3k8eYVMGE0nH2HaNAcu7uVhTyoQvYKNwWwdneVCZKtFX6jiyRa',NULL,NULL,'admin@gmail.com','0123456789','Chưa cập nhật',1,0,0,1,'2023-03-30 16:02:46',NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_favourite`
--

DROP TABLE IF EXISTS `view_favourite`;
/*!50001 DROP VIEW IF EXISTS `view_favourite`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_favourite` AS SELECT 
 1 AS `idFavo`,
 1 AS `id`,
 1 AS `nameProduct`,
 1 AS `description`,
 1 AS `warranty`,
 1 AS `quantity`,
 1 AS `quantityIn`,
 1 AS `priceIn`,
 1 AS `price`,
 1 AS `promotional`,
 1 AS `status`,
 1 AS `image`,
 1 AS `gallery`,
 1 AS `sold`,
 1 AS `idInvoiceIn`,
 1 AS `idCategory`,
 1 AS `idUnit`,
 1 AS `idManufacturer`,
 1 AS `idOrigin`,
 1 AS `idUser`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_orderdetailjoinuser`
--

DROP TABLE IF EXISTS `view_orderdetailjoinuser`;
/*!50001 DROP VIEW IF EXISTS `view_orderdetailjoinuser`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_orderdetailjoinuser` AS SELECT 
 1 AS `id`,
 1 AS `idCustomer`,
 1 AS `state`,
 1 AS `idPayment`,
 1 AS `address`,
 1 AS `fullname`,
 1 AS `email`,
 1 AS `phone`,
 1 AS `sumPayment`,
 1 AS `createAt`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_product_like`
--

DROP TABLE IF EXISTS `view_product_like`;
/*!50001 DROP VIEW IF EXISTS `view_product_like`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_product_like` AS SELECT 
 1 AS `id`,
 1 AS `productLike`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'webecommerce'
--

--
-- Dumping routines for database 'webecommerce'
--
/*!50003 DROP PROCEDURE IF EXISTS `deleteCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCategory`(IN idCate int)
BEGIN
	SET FOREIGN_KEY_CHECKS=0; -- to disable them
	DELETE FROM category WHERE (id = idCate) LIMIT 1 ;
	SET FOREIGN_KEY_CHECKS=1; -- to re-enable them
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`(IN idProduct int)
BEGIN
	SET FOREIGN_KEY_CHECKS=0; -- to disable them
	DELETE FROM product WHERE (id = idProduct) LIMIT 1 ;
	SET FOREIGN_KEY_CHECKS=1; -- to re-enable them
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `listProdect_Order` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `listProdect_Order`(IN sidCus int)
BEGIN
	SELECT orderdetail.id,sumPayment ,count(carddetail.id) as "coutProduct",orderdetail.createAt ,orderdetail.state
	FROM orderdetail 
	join carddetail on orderdetail.id = carddetail.idPayOrder 	
	where idCustomer = sidCus group by(id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `procedureViewCard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `procedureViewCard`(IN userIdpr int)
BEGIN
	SELECT carddetail.id,nameProduct,carddetail.quantity,price,product.image,dongia  FROM card 
    join carddetail on card.id = carddetail.idCard 
    join product on carddetail.idProduct = product.id where userid = userIdpr and carddetail.detailstate = 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduct`(
IN fid INT,
IN fnameProduct VARCHAR(200),
IN fdescription TEXT,
IN fwarranty INT,
IN fquantity INT, 
IN fpromotional DOUBLE, 
IN fprice DOUBLE,
IN fstatus TEXT,
IN fidCategory nvarchar(200),
IN fnameManufacturer nvarchar(200),
IN forigin nvarchar(200)
)
BEGIN
	declare idManu int;
    declare idOri int;
    declare idCategory int;
    declare idUnit int;
	select id INTO idManu from manufacturer where nameManufacturer like fnameManufacturer;
    select id INTO idOri from origin where nameOrigin like forigin;
    select id INTO idCategory from category where nameCategory like fidCategory;

    Update product SET 
    nameProduct = fnameProduct, 
    description = fdescription, 
    warranty = fwarranty , 
    quantity = fquantity,
    price = fprice,
    promotional = fpromotional, 
    status = fstatus , 
    idCategory = idCategory, 
    idManufacturer = idManu , 
    idOrigin = idOri WHERE (id = fid);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `product_view`
--

/*!50001 DROP VIEW IF EXISTS `product_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `product_view` AS select `product`.`id` AS `id`,`product`.`nameProduct` AS `nameProduct`,`product`.`description` AS `description`,`product`.`warranty` AS `warranty`,`product`.`quantity` AS `quantity`,`product`.`price` AS `price`,`product`.`promotional` AS `promotional`,`product`.`image` AS `image`,`product`.`gallery` AS `gallery`,`product`.`sold` AS `sold`,`product`.`liked` AS `liked`,`category`.`nameCategory` AS `nameCategory`,`category`.`id` AS `idCate`,`unit`.`nameUnit` AS `nameUnit`,`product`.`status` AS `status`,`manufacturer`.`nameManufacturer` AS `nameManufacturer`,`origin`.`nameOrigin` AS `nameOrigin` from ((((`product` join `category` on((`product`.`idCategory` = `category`.`id`))) join `unit` on((`product`.`idUnit` = `unit`.`id`))) join `manufacturer` on((`product`.`idManufacturer` = `manufacturer`.`id`))) join `origin` on((`product`.`idOrigin` = `origin`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_favourite`
--

/*!50001 DROP VIEW IF EXISTS `view_favourite`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_favourite` AS select `favourite`.`id` AS `idFavo`,`product`.`id` AS `id`,`product`.`nameProduct` AS `nameProduct`,`product`.`description` AS `description`,`product`.`warranty` AS `warranty`,`product`.`quantity` AS `quantity`,`product`.`quantityIn` AS `quantityIn`,`product`.`priceIn` AS `priceIn`,`product`.`price` AS `price`,`product`.`promotional` AS `promotional`,`product`.`status` AS `status`,`product`.`image` AS `image`,`product`.`gallery` AS `gallery`,`product`.`sold` AS `sold`,`product`.`idInvoiceIn` AS `idInvoiceIn`,`product`.`idCategory` AS `idCategory`,`product`.`idUnit` AS `idUnit`,`product`.`idManufacturer` AS `idManufacturer`,`product`.`idOrigin` AS `idOrigin`,`favourite`.`idUser` AS `idUser` from (`favourite` join `product` on((`favourite`.`idProduct` = `product`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_orderdetailjoinuser`
--

/*!50001 DROP VIEW IF EXISTS `view_orderdetailjoinuser`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_orderdetailjoinuser` AS select `orderdetail`.`id` AS `id`,`orderdetail`.`idCustomer` AS `idCustomer`,`orderdetail`.`state` AS `state`,`orderdetail`.`idPayment` AS `idPayment`,`orderdetail`.`address` AS `address`,`user`.`fullname` AS `fullname`,`user`.`email` AS `email`,`user`.`phone` AS `phone`,`orderdetail`.`sumPayment` AS `sumPayment`,`orderdetail`.`createAt` AS `createAt` from (`orderdetail` join `user` on((`orderdetail`.`idCustomer` = `user`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_product_like`
--

/*!50001 DROP VIEW IF EXISTS `view_product_like`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_product_like` AS select `product`.`id` AS `id`,count(`favourite`.`idProduct`) AS `productLike` from (`favourite` join `product` on((`favourite`.`idProduct` = `product`.`id`))) group by `favourite`.`idProduct` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-15 12:47:21
