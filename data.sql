CREATE DATABASE  IF NOT EXISTS `webecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webecommerce`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: webecommerce
-- ------------------------------------------------------
-- Server version	8.0.28

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
  `nameBanner` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,1,0),(2,2,0),(3,3,0),(4,4,0),(5,5,0),(6,6,0),(7,7,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carddetail`
--

LOCK TABLES `carddetail` WRITE;
/*!40000 ALTER TABLE `carddetail` DISABLE KEYS */;
INSERT INTO `carddetail` VALUES (1,2,29,180000,3,540000,'2023-04-01',1,1),(2,2,39,179000,1,179000,'2023-04-02',1,1),(3,2,9,350000,1,350000,'2023-04-02',1,1),(4,2,39,179000,6,1074000,'2023-04-02',1,2),(5,2,9,350000,1,350000,'2023-04-02',1,2),(6,2,39,179000,2,358000,'2023-04-03',1,3),(7,2,5,189000,1,189000,'2023-04-03',1,3),(8,2,39,179000,1,179000,'2023-04-03',1,4),(9,2,29,180000,1,180000,'2023-04-03',1,4),(10,2,9,350000,1,350000,'2023-04-03',1,4),(11,2,39,179000,1,179000,'2023-04-03',1,5),(12,2,29,180000,1,180000,'2023-04-03',1,5),(13,2,14,280000,1,280000,'2023-04-03',1,5),(14,2,39,179000,1,179000,'2023-04-03',1,6),(15,2,29,180000,1,180000,'2023-04-03',1,6),(16,2,39,179000,1,179000,'2023-04-04',1,11),(17,2,29,180000,1,180000,'2023-04-04',1,11),(18,2,9,350000,1,350000,'2023-04-04',1,11),(19,2,29,180000,1,180000,'2023-04-04',1,12),(20,2,39,179000,1,179000,'2023-04-05',1,13),(21,2,17,200000,1,200000,'2023-04-05',1,13),(22,2,22,159000,1,159000,'2023-04-05',1,13),(23,2,42,189000,1,189000,'2023-04-05',1,13),(24,2,31,135000,1,135000,'2023-04-05',1,13),(25,2,18,210000,1,210000,'2023-04-05',1,14),(26,3,39,179000,1,179000,'2023-04-05',1,15),(27,3,39,179000,2,358000,'2023-04-05',1,19),(28,3,29,180000,2,360000,'2023-04-05',1,19),(29,3,9,350000,1,350000,'2023-04-05',1,19),(30,3,39,179000,3,537000,'2023-04-06',1,20),(69,2,39,179000,2,358000,'2023-05-15',0,NULL),(70,3,39,179000,1,179000,'2023-05-16',1,21);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Chân váy','default.jpg','Chân váy chữ A'),(2,'Đầm váy nữ xếp tầng','default.jpg','Đầm váy nữ xếp tầng tay phồng '),(3,'Áo Thun ','default.jpg','Áo Thun Form Fit '),(4,'Quần Jeans','default.jpg','Quần Jeans'),(5,'Áo dài cách tân','default.jpg','Áo dài cách tân'),(6,'Áo sơ mi','default.jpg','Aó sơ mi trendy xinh xẻo');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `sex` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `address` text NOT NULL,
  `username` varchar(200) NOT NULL,
  `passwordEn` varchar(200) NOT NULL,
  `statusLock` int NOT NULL,
  `dateOfBirth` date NOT NULL,
  `idRole` int NOT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `idRole` (`idRole`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`idRole`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite`
--

LOCK TABLES `favourite` WRITE;
/*!40000 ALTER TABLE `favourite` DISABLE KEYS */;
INSERT INTO `favourite` VALUES (96,39,2),(97,39,3),(98,29,3),(99,8,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'Lan Hoàng','0123854796','Nam Pháp 1 Ngô Quyền Hải Phòng','lanhonag@gmail.com','Chưa cập nhật'),(2,'ELISE','089562856','Nam Pháp 1 Ngô Quyền Hải Phòng','elise@gmail.com','Chưa cập nhật'),(3,'JUNO','033698521','Nam Pháp 1 Ngô Quyền Hải Phòng','juno@gmail.com','Chưa cập nhật');
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
  `state` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Chờ thanh toán',
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (1,2,NULL,'2023-04-02',1104000,'Đơn hàng đã hoàn thành',1,'Chưa cập nhật',0),(2,2,NULL,'2023-04-02',1459000,'Đã hủy',1,'Chưa cập nhật',0),(3,2,NULL,'2023-04-03',582000,'Đơn hàng đã hoàn thành',1,'Chưa cập nhật',0),(4,2,NULL,'2023-04-03',744000,'Chờ thanh toán',1,'Chưa cập nhật',0),(5,2,NULL,'2023-04-03',674000,'Chờ thanh toán',1,'Chưa cập nhật',0),(6,2,NULL,'2023-04-04',394000,'Chờ thanh toán',1,'Chưa cập nhật',0),(7,2,NULL,'2023-04-04',744000,'Chờ xác nhận',1,'Chưa cập nhật',0),(8,2,NULL,'2023-04-04',744000,'Chờ xác nhận',1,'Chưa cập nhật',0),(9,2,NULL,'2023-04-04',744000,'Chờ xác nhận',1,'Chưa cập nhật',0),(10,2,NULL,'2023-04-04',744000,'Chờ xác nhận',1,'Chưa cập nhật',0),(11,2,NULL,'2023-04-04',744000,'Chờ thanh toán',1,'Chưa cập nhật',0),(12,2,NULL,'2023-04-04',215000,'Chờ thanh toán',1,'Chưa cập nhật',0),(13,2,NULL,'2023-04-05',897000,'Chờ thanh toán',4,'Chưa cập nhật',0),(14,2,NULL,'2023-04-05',245000,'Chờ thanh toán',4,'Chưa cập nhật',0),(15,3,NULL,'2023-04-05',214000,'Chờ thanh toán',4,'Chưa cập nhật',0),(16,3,NULL,'2023-04-05',35000,'Chờ thanh toán',4,'Chưa cập nhật',0),(17,3,NULL,'2023-04-05',35000,'Chờ thanh toán',4,'Chưa cập nhật',0),(18,3,NULL,'2023-04-05',35000,'Chờ thanh toán',4,'Chưa cập nhật',0),(19,3,NULL,'2023-04-06',1103000,'Chờ thanh toán',1,'Chưa cập nhật',0),(20,3,NULL,'2023-05-16',572000,'Chờ thanh toán',1,'Chưa cập nhật',0),(21,3,NULL,'2023-05-16',214000,'Chờ thanh toán',1,'Chưa cập nhật',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Chân váy chữ a ngắn chất kaki túi hộp khuy sắt phong cách hàn quốc sexy','<p>Tên sản phẩm : Chân váy chữ a ngắn chất kaki túi hộp khuy sắt phong cách hàn quốc sexy</p><p>? HƯỚNG DẪN CHỌN SIZE ?</p><p>&nbsp;</p><p>• Size S: 40 - 45Kg ( eo dưới 64cm)</p><p>&nbsp;</p><p>• Size M: 46 - 50kg (eo dưới 68 cm)</p><p>&nbsp;</p><p>• Size L:&nbsp;51 - 55kg (eo dưới 72 cm)</p><p>&nbsp;</p><p>• Size XL:&nbsp;51 - 55kg (eo dưới 75 cm)</p><p>&nbsp;</p><p>- Chiều dài&nbsp;35cm</p><p>&nbsp;</p><p>? LƯU Ý : bảng size tham khảo, còn tùy thuộc vào fom dáng chiều cao cân nặng của từng người.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>? CAM KẾT SHOP ?</p><p>&nbsp;</p><p>• Lỗi 1 đổi 1</p><p>&nbsp;</p><p>• Trợ giá phí vận chuyển toàn quốc, nhận hàng thanh toán</p><p>&nbsp;</p><p>• Hàng luôn có sẵn, đóng gói cẩn thận trước khi giao đi</p><p>&nbsp;</p><p>• Hỗ trợ đổi hàng khi không vừa Size</p>',1,146,150,170000,200000,5,'Còn hàng','image-1679019887934.jpeg','image-1679019887934.jpeg,image-1679019908732.jpeg,image-1679019911442.jpeg',4,0,1,1,1,1,1),(2,'Chân váy xếp ly Tennis có quần trong cạp cao dáng xòe Chân váy tennis xếp ly ngắn vải dày mềm','<p>?Mẫu chân váy xếp ly ngắn ngang gối được XƯỞNG VÁY XINH thiết kế kiểu dáng Hàn Quốc trẻ trung, năng động với những đường ly nhỏ xếp liền nhau, có QUẦN LÓT TRONg - CẠP LƯNG CAO TRÊN RỐN - KHÓA SƯỜN cá tính.</p><p>- Chân váy tennis có các màu Đen, Nâu, Trắng rất phù hợp cho các nàng mùa hè mặc đi làm công sở, đi chơi dạo phố và học sinh mặc đi học, đi biển, hẹn hò siêu đẹp.</p><p>&nbsp;</p><p>∆ BẢNG SIZE CHÂN VÁY XẾP LY TENNIS</p><p>• Size S &lt;46kg - Eo &lt;68cm - Váy dài 40cm</p><p>• Size M &lt;50kg - Eo &lt;70cm - Váy dài 40cm</p><p>• Size L &lt;54kg - Eo &lt;72cm - Váy dài 41cm</p><p>• Size XL &lt;57kg - Eo &lt;76cm - Váy dài 41cm</p><p>&nbsp;</p><p>∆ CHẤT LIỆU: Chân váy tennis được may 100% chất vải VITEX cao cấp – Loại vải có độ có giãn nhẹ, không quá dày cũng không quá mỏng, bền màu và được nhất là không nhăn, không bám lông, bám bụi, không sờn mốc, xù lông sau một thời gian sử dụng nên mặc cực thích.</p>',1,199,200,13000,160000,5,'Còn hàng','image-1679020164541.jpeg','image-1679020164541.jpeg,image-1679020167726.jpeg,image-1679020169915.jpeg',1,0,1,1,1,1,1),(3,'Chân Váy chữ A Ngắn Nâu Phong Cách Hàn Quốc Cá Tính','<p>* THÔNG TIN SẢN PHẨM: Chân váy ngắn Hàn Quốc Cá Tính màu nâu</p><p>• Chân váy rất dễ phối đồ, có thể mix với áo phông, sơ mi, áo len,.. </p><p>• Chất liệu: Vitex, mặc thoải mái, mát, không mỏng</p><p>• Màu sắc: Nâu</p><p>• Fullsize:</p><p>&nbsp;&nbsp;&nbsp;&nbsp;+ Size S:&nbsp;&nbsp;&nbsp;&lt; dưới 46kg; Eo &lt; 65cm.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;+ Size M:&nbsp;&nbsp;&lt; dưới 51kg; Eo &lt; 68cm.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;+ Size L:&nbsp;&nbsp;&nbsp;&lt; dưới 55kg Eo&nbsp;&lt; 70cm.</p><p>&nbsp;( Các size còn phụ thuộc vào form dáng của từng người)</p><p>&nbsp;</p><p>✔️CAM KẾT CỦA SHOP:</p><p>+ Cam kết 100% đổi Size hoặc trả hàng nếu sản phẩm khách đặt không vừa hoặc lỗi do shop.</p><p>+ Nếu có bất cứ điều gì không hài lòng về sản phẩm, khách vui lòng liên hệ với shop trước khi đánh giá shop nhé. Mình sẽ sắp xếp đổi, trả hàng hoặc hoàn tiền cho khách ạ!</p><p>+ Mọi người nhớ theo dõi shop để cập nhật mẫu mới và ưu đãi nhanh nhất nha!</p>',1,144,150,127000,180000,5,'Còn hàng','image-1679020317496.jpeg','image-1679020317496.jpeg,image-1679020321909.jpeg,image-1679020358744.jpeg',6,0,1,1,1,1,1),(4,'Quần giả váy nữ lưng thun chất kaki cực đẹp lên form xinh ','<p>THÔNG SỐ SẢN PHẨM </p><p>SIZE S : eo 58-65cm&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 37cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 88cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 62cm </p><p>&nbsp;</p><p>SIZE M : eo 65-72c </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 39cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 95cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 62cm </p><p>&nbsp;</p><p>SIZE L : eo 70 - 78cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 41cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 100cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 64cn </p><p>Vì quần lưng thun nên phần eo bình thường chưa giãn sẽ ko chênh nhau quá nhiều. Các bạn thích mặc vừa khít eo hoạc rộng thì xíu cho thoải mái thì tham khảo số đo giúp shop nhé ?</p><p>&nbsp;</p><p>* Lưu ý : sai số tầm 2-3cm , bảng số đo chỉ ở mức tương đối . Bạn nào ko chắc chắn thì inb bọn mình tư vấn nhaa&nbsp;</p>',1,27,40,150000,179000,5,'Còn hàng','image-1679020556938.jpeg','image-1679020556938.jpeg,image-1679020561784.jpeg',13,0,1,1,2,1,1),(5,'Chân váy dáng xòe cạp cao Xquin, Quần váy 2 tầng lưng cao có quần bảo hộ bên trong siêu xinh','<p>❣️ MÔ TẢ CHI TIẾT</p><p>-Chất liệu bằng chất kaki, co giãn tốt, độ dày vừa phải.</p><p>-Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn.</p><p>-Thiết kế hiện đại, trẻ trung, cá tính. </p><p>-Cực kỳ phù hợp cho công sở, đi chơi, cà phê, dạo phố, dự tiệc,... </p><p>❣️ Thông số chọn size </p><p>Size S Eo 64 Vòng hông 86 Chiều dài váy 30</p><p>Size M Eo 68 Vòng hông 90 Chiều dài váy 31</p><p>Size L Eo 72 Vòng hông 94 Chiều dài váy 32</p>',1,15,30,15000,189000,5,'Còn hàng','image-1679020649122.jpeg','image-1679020649122.jpeg,image-1679020654941.jpeg,image-1679020657978.jpeg',15,0,1,1,1,1,1),(6,'Chân Váy Denim Chân Váy Ngắn Xếp Li Kèm Nịt To Dày Dặn Hàng Qc Cao Cấp Phong Cách Hàn Quốc ','<p>Chân Váy Denim Chân Váy Ngắn Xếp Li Kèm Nịt To Dày Dặn Hàng Qc Cao Cấp Phong Cách Hàn Quốc </p><p>Thông tin chi tiết sản phẩm sản phẩm</p><p>Size S M L Như Hình trên</p><p>- Màu sắc : Đen , ,Xanh Jean, be</p><p>- Chất liệu : Jean Kaki</p><p>- Hình ảnh : Kèm video ảnh thật trải sàn shop tự chụp</p>',1,57,60,165000,195000,5,'Còn hàng','image-1679020841244.jpeg','image-1679020841244.jpeg,image-1679020843317.jpeg,image-1679020846325.jpeg',3,0,1,1,1,1,1),(7,'Chân váy Denim Ngắn Xếp Ly Xòe Có Quần Trong Chân Váy Jean Ngắn Đuôi Cá ','<p>Thông tin chi tiết sản phẩm sản phẩm</p><p>Size S M L Như Hình trên</p><p>- Màu sắc : Đen ,Trắng ,Xanh Jean</p><p>- Chất liệu : Jean Kaki</p><p>- Hình ảnh : Kèm video ảnh thật trải sàn shop tự chụp</p><p>CAM KẾT CỦA SHOP : </p><p>+ Bao đổi trả hàng miễn phí khi sản phẩm kém chất lượng và không giống hình, nhầm size, số lượng . </p><p>&nbsp;LƯU Ý KHI SỬ DỤNG CÁC SẢN PHẨM CỦA SHOP</p><p>- Trong quá trình đóng gói và vận chuyển sản phẩm có thể bị nhàu, quý khách vui lòng giặt trước khi sử dụng để cảm nhận sản phẩm tốt nhất </p><p>- Đối với sản phẩm đa dạng về chất liệu, kiểu dáng cách bảo quản sản phẩm tốt nhất là giặt tay với bột (nước) giặt nhẹ để giữ được độ bền của vải, tránh bị phai màu từ các loại quần áo khác. </p><p>- Đối với những sản phẩm có thể giặt máy, chỉ nên để ở chế độ giặt nhẹ, hoặc mức trung bình và nên phân loại sản phẩm cùng màu và cùng loại vải khi giặt. </p><p>- Nên phơi sản phẩm ở nơi thoáng mát, tránh ánh nắng trực tiếp dễ bị phai bạc màu, nên làm khô quần áo bằng cách phơi ở những điểm đón gió sẽ giữ được màu vải tốt hơn</p>',1,57,60,155000,200000,5,'Còn hàng','image-1679020929850.jpeg','image-1679020929850.jpeg,image-1679020932391.jpeg,image-1679020934878.jpeg',3,0,1,1,1,1,1),(8,'Chân váy xếp ly to màu xám phong cách Hàn Quốc','<p>➖ THÔNG TIN SẢN PHẨM: Chân váy xám xếp ly to, phong cách HQ.</p><p>&nbsp;</p><p>• Chất liệu: vitex.</p><p>• Size: </p><p>S -eo 64cm (Dưới 48kg)</p><p>M - eo 68cm (Dưới 52kg)</p><p>L - eo 72cm (Dưới 56kg)</p><p>(Số đo cân nặng không chính xác hoàn toàn và còn tuỳ và dáng mỗi người)</p><p>&nbsp;</p><p>✔️CAM KẾT CỦA SHOP:✨</p><p>+ Cam kết 100% đổi hàng do lỗi shop và lỗi sản phẩm.</p><p>+ Nếu có bất cứ điều gì&nbsp;không hài lòng về sản phẩm, khách vui lòng liên hệ với shop trước khi đánh giá shop nhé. Shop sẽ sắp xếp đổi, trả hàng hoặc hoàn tiền cho khách ạ!</p><p>+ Mọi người nhớ theo dõi shop để cập nhật mẫu mới và ưu đãi nhanh nhất nha!&nbsp;</p>',1,8,30,135000,25000,6,'Còn hàng','image-1679021009026.jpeg','image-1679021009026.jpeg,image-1679021011381.jpeg,image-1679021013807.jpeg',22,1,1,1,1,1,1),(9,'Chân Váy ulzzang Dáng Dài Xếp Ly Chất Cotton Cao Cấp Ko Kèm Đai','<p>? HƯỚNG DẪN CHỌN SIZE ?</p><p>• Size S: 40 - 45Kg ( eo dưới 64cm - Chiều dài 85cm )</p><p>• Size M: 46 - 50kg (eo dưới 68cm - Chiều dài 85cm )</p><p>• Size L:&nbsp;51 - 55kg (eo dưới 72 cm - Chiều dài 85cm )</p><p>? LƯU Ý : bảng size tham khảo, còn tùy thuộc vào fom dáng chiều cao cân nặng của từng người.</p><p>&nbsp;</p><p>? THÔNG TIN SẢN PHẨM ?</p><p>• Kiểu dáng: chân váy xếp ly dài </p><p>• Phong cách: lưng cao, thiết kế cá tính</p><p>• Chất liệu: Cotton mềm, dày dặn, ko co giãn</p><p>• Màu sắc: đen, trắng không phai màu, bong tróc</p><p>• Kích thước: 3 Size S,M,L</p><p>• Đặc điểm nổi bật nhất: được làm từ chất liệu vải đẹp , không xù , không co rút , fom dáng chuẩn ko chỉ thừa </p><p>• Đóng gói: Đóng gói cẩn thận và an toàn, bạn luôn yên tâm khi nhận sản phẩm.</p><p>&nbsp;</p><p>? MÔ TẢ SẢN PHẨM ?</p><p>• Form dáng chuẩn, rộng rãi thoải mái</p><p>• Thiết kế may chi tiết kỉ đẹp ko chỉ thừa</p><p>• Kiểu dáng: bassic nhẹ nhàng. Đa phong cách, gọn nhẹ, năng động</p><p>• Mùa sử dụng: xuân, hạ, thu, đông</p><p>• Đối tượng sử dụng: nữ từ 55kg quay đầu</p><p>&nbsp;</p><p>? Hướng dẫn bảo quản ?</p><p>• Giặt riêng sản phẩm màu sáng và màu tối</p><p>• Giặt sản phẩm với nước ở nhiệt độ thường</p><p>• Nên phơi sản phẩm dưới ánh nắng trực tiếp</p><p>• Không nên sử dụng chất tẩy, không xoắn vắt mạnh</p>',1,43,100,170000,350000,5,'Còn hàng','image-1679021105200.jpeg','image-1679021105200.jpeg,image-1679021108077.jpeg,image-1679021110571.jpeg',57,0,1,1,1,1,1),(10,'Đầm váy nữ xếp tầng tay phồng tiểu thư có lớp lót bên trong vải tơ sóng nhẹ nhàng ','<p>??? THÔNG TIN VỀ SẢN PHẨM ???</p><p>&nbsp;</p><p>? Chất liệu: vải tơ sóng</p><p>&nbsp;</p><p>? Màu sắc: Xanh, Đen, Trắng</p><p>&nbsp;</p><p>? Size: S, M,&nbsp;( tùy thuộc vào chiều cao, cân nặng - bạn để lại inbox để được tư vấn tốt hơn nhé )</p><p>&nbsp;</p><p>▪️ Độ dày: Dày dặn và mức độ dày tùy thuộc vào màu sắc, thường thì màu đậm có độ dày nhiều hơn so với các màu khác. </p><p>&nbsp;</p><p>▪️ Độ co giãn: Co giãn và đàn hồi rất tốt cả chiều ngang và chiều dọc, giữa các sợi vải có spandex giữ độ dàn hồi, giúp sản phẩm giữ được form sau khi giặt. Chính tính chất co giãn cực tốt giúp tôn dáng người mặc, ôm dáng.</p>',1,47,60,200000,350000,6,'Còn hàng','image-1679024118815.jpeg','image-1679024118815.jpeg,image-1679024121382.jpeg,image-1679024124050.jpeg',13,0,1,2,1,1,1),(11,'Đầm váy nữ tay dài phồng dáng xoè tiểu thư chất voan ép hoa nổi may 2 lớp có lót ','<p>Mẫu này xinh tuyệt vời luônnnn</p><p>Chất ren hoa mặt trời xinh xắn tiêu thư mà sang chảnh cực kì </p><p>Đường may cẩn thận chất liệu vải thì khỏi bàn cãi luôn ạ</p><p>Bên trong có lót hapu xịn xò</p><p>Một chiếc váy che được tất cả các khuyết điểm: bắp tay to, vai thô, đùi to, háck dáng siêu xinh</p><p>Size: S - M </p><p>Màu: Kem, trắng</p><p>Chất: Vải voan ép hoa nổi</p>',1,87,100,225000,300000,6,'Còn hàng','image-1679024232738.jpeg','image-1679024232738.jpeg,image-1679024235114.jpeg,image-1679024237510.jpeg',13,0,1,2,1,1,1),(12,'Set đồ nữ - váy đầm nữ croptop chất xốp chân váy ngắn chữ A 2 màu trắng đen tay ngắn phồng cổ tròn khuy ngọc','<p>Set váy đầm nữ chất xốp 2 màu trắng đen tay ngắn phồng cổ tròn khuy ngọc V23</p><p>Màu: trắng - đen</p><p>Size: S-M</p><p>Thiết kế cúc ngọc sang chảnh</p><p>Màu trắng và đen dễ phối đồ</p>',1,75,80,320000,450000,8,'Còn hàng','image-1679024343421.jpeg','image-1679024343421.jpeg,image-1679024345468.jpeg,image-1679024348227.jpeg',5,0,1,2,1,1,1),(13,'Đầm hoa dài tay ','<p>Váy hoa vừa xinh vừa đáng yêu lại còn quyến rũ, rất phù hợp cho các cậu trong các buổi đi chơi đó.</p><p>Tên sản phẩm: váy hoa dài tay princess.</p><p>Chất liệu: Hoa gấm 2 lớp. Có mút ngực</p><p>Màu sắc: be</p><p>Kiểu dáng: </p><p>Hoạt tiết: hoa</p><p>Size: S/M</p><p>Size S: dưới 48kg, dài váy 83cm, rộng ngực 90cm, rộng eo dưới 68cm, dài tay 48cm.</p><p>Size M: dưới 54kg(tuỳ chiều cao), dài váy 83cm, rộng ngực 92cm, rộng eo dưới 73cm, dài tay 48cm.</p>',1,80,80,150000,288000,8,'Còn hàng','image-1679024505704.jpeg','image-1679024505704.jpeg,image-1679024508238.jpeg,image-1679024510540.jpeg',0,0,1,2,1,1,1),(14,'Đầm cúc ngọc dáng dài','<p>THÔNG TIN SẢN PHẨM </p><p>Tên sản phẩm: Váy gấm cúc ngọc dáng dài </p><p>Chất liệu: gấm</p><p>Màu sắc: trắng</p><p>Kiểu dáng: dáng dài</p><p>Hoạt tiết: trơn</p><p>Size: S/M </p><p>Size S : Dài 93cm , rộng eo : dưới 68cm , rộng ngực 88cm , dưới 48kg</p><p>Size M : Dài 93cm , rộng eo 69- 74cm , rộng ngực 89cm , dưới 54kg </p><p>Số đo cân nặng của mang tính tham khảo, khi chọn size cậu chọn theo số đo sẽ chuẩn hơn nha. Tia19 không hỗ trợ đổi size, số đo được đo thủ công nên sẽ có sự chênh lệch 1-2cm ạ.</p>',1,59,70,180000,280000,6,'Còn hàng','image-1679024586467.jpeg','image-1679024586467.jpeg,image-1679024589047.jpeg,image-1679024591938.jpeg',11,0,1,2,1,1,1),(15,'Đầm cổ tàu cộc tay','<p>TTên sản phẩm: Váy gấm cổ tàu nơ trắng </p><p>Chất liệu: gấm</p><p>Màu sắc: be</p><p>Kiểu dáng: dáng ngắn</p><p>Hoạt tiết: trơn</p><p>Size: S/M </p><p>Size S : Dài 90cm , rộng eo : dưới 68cm , rộng ngực 88cm , dài tay 26cm, dưới 48kg</p><p>Size M : Dài 90cm , rộng eo 69- 74cm , rộng ngực 89cm , dài tay&nbsp;26cm, dưới 54kg </p><p>Số đo cân nặng của mang tính tham khảo, khi chọn size cậu chọn theo số đo sẽ chuẩn hơn nha. Tia19 không hỗ trợ đổi size, số đo được đo thủ công nên sẽ có sự chênh lệch 1-2cm ạ.</p>',1,58,60,150000,250000,4,'Còn hàng','image-1679024668542.jpeg','image-1679024668542.jpeg,image-1679024671537.jpeg',2,0,1,2,1,1,1),(16,'ĐẦM HOA NỔI CỔ VUÔNG KEM','<p>??? ĐẦM HOA NỔI CỔ VUÔNG KEM</p><p>màu kem tôn da ăn ảnh lắm nhen</p><p>Freesize &lt;55kg mặc xinh ???</p><p>eo dưới 70cm </p><p>có sẵn mút ngực ạ</p>',1,60,60,150000,285000,2,'Còn hàng','image-1679024759064.jpeg','image-1679024759064.jpeg,image-1679024761428.jpeg,image-1679024763548.jpeg',0,0,1,2,1,1,1),(17,'Đầm ôm body yếm bí thiết kế siêu tôn dáng sexy, vải co giãn, mặc đi chơi, dự tiệc','<p>1. Thông tin sản phẩm </p><p>- Kiểu dáng: đầm body</p><p>- Giới tính: nữ</p><p>- Chất liệu: Thun</p><p>- Định lượng: 230gsm </p><p>- fressize eo dưới 72cm, v1&lt;85, cao dưới 1m65</p><p>&nbsp;</p><p>ỨNG DỤNG</p><p>Thiết kế bắt trend, tối giản hoạ tiết thoải mái mix &amp; match đồ.</p><p>&nbsp;</p><p>ĐIỀU KIỆN ĐỔI TRẢ</p><p>- Sản phẩm sai size, loại hàng</p><p>- Sản phẩm lỗi do nhà sản xuất</p><p>- Tem mác còn nguyên vẹn</p><p>- CUng cấp video mở hàng rõ nét quay 6 cạnh bưu phẩm</p>',1,138,150,100000,200000,3,'Còn hàng','image-1679024844949.jpeg','image-1679024844949.jpeg,image-1679024847230.jpeg,image-1679024849970.jpeg',12,0,1,2,1,1,1),(18,'Váy xoè ôm dáng lệch vai dài tay hotrend vải dày dặn chất đẹp mặc hai kiểu','<p>1. Thông tin sản phẩm </p><p>- Kiểu dáng: Set váy/đầm</p><p>- Giới tính: nữ</p><p>- Kích thước: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;freesize từ 40-56kg, &lt;1m62 (eo dưới 70cm, v1&lt;83cm)</p><p>- Định lượng: 230gsm</p><p>&nbsp;</p><p>ỨNG DỤNG</p><p>Thiết kế bắt trend, tối giản hoạ tiết thoải mái mix &amp; match đồ. Cho nàng phong cách nữ tính, trẻ trung nhưng vẫn vô cùng năng động.</p><p>&nbsp;</p><p>&nbsp;</p><p>ĐIỀU KIỆN ĐỔI TRẢ</p><p>- Sản phẩm sai size, loại hàng</p><p>- Sản phẩm lỗi do nhà sản xuất</p><p>- Tem mác còn nguyên vẹn</p><p>- CUng cấp video mở hàng rõ nét quay 6 cạnh bưu phẩm</p>',1,147,150,120000,210000,3,'Còn hàng','image-1679024926887.jpeg','image-1679024926887.jpeg,image-1679024929588.jpeg,image-1679024931651.jpeg',3,0,1,2,1,1,1),(19,'Đầm hoa nhí vintage cổ cúc body tay phồng ulzzang thắt eo tiểu thư','<p>1. Thông tin sản phẩm </p><p>- Kiểu dáng: Set váy/đầm</p><p>- Giới tính: nữ</p><p>- Chất liệu: kate</p><p>- Kích thước: </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;freesize 40-58kg</p><p>- Định lượng: 230gsm</p><p>&nbsp;</p><p>ỨNG DỤNG</p><p>Thiết kế bắt trend, tối giản hoạ tiết thoải mái mix &amp; match đồ. Cho nàng phong cách nữ tính, trẻ trung nhưng vẫn vô cùng năng động.</p><p>&nbsp;</p><p>HƯỚNG DẪN GIẶT &amp; BẢO QUẢN:</p><p>- Lần giặt áo đầu tiên bạn nên vò bằng tay, giặt bằng nước lã và không sử dụng xà phòng. Bạn không nên giặt chung với các đồ dùng có khác màu đặt biệt là màu trắng vì đối với các loại áo thun có màu đậm như (đỏ đô, cam, xanh đen…) rất dễ ra màu ảnh hưởng đến các đồ khác.</p><p>- Không đổ trực tiếp các loại xà phòng, nước tẩy lên hình in. Không nên sử dụng các loại xà phòng có tính giặt tẩy cao và tuyệt đối không dùng thuốc tẩy cho các áo màu.</p><p>- Hạn chế sử dụng nước xả làm mềm vải vì nó sẽ làm cho áo bạn nhanh bị giãn và làm cho hình in bị mềm, dễ bong tróc. Nếu bạn muốn áo được thơm sau khi giặt bạn nên dùng nước xả thơm.</p><p>- Không nên vắt áo thun sau khi giặt vì điều này khiến áo bạn bị giản ra và chảy xệ mất đi vẻ đẹp của áo. Tốt nhất bạn nên gập áo lại khi phơi và vỗ nhẹ lên áo giúp áo bạn mau khô và không bị nhăn</p>',1,146,150,180000,450000,5,'Còn hàng','image-1679025003475.jpeg','image-1679025003475.jpeg,image-1679025006244.jpeg,image-1679025008789.jpeg',4,0,1,2,1,1,1),(20,'Áo Thun Form Fit Chữ B Chất Thun Co Dãn','<p>Size M: dài 58cm, rộng 48cm / dưới 55kg dưới 1m63</p><p>Size L: dài 62cm, rộng 51cm / dưới 65kg dưới 1m72</p><p>&nbsp;</p><p>Chất liệu: 100% cotton 2 chiều co giãn, mềm mịn thấm hút mồ hôi tốt.</p><p>Công nghệ in: in cao thành nổi trên bề mặt vải.</p><p>&nbsp;</p><p>️ Chính sách đổi trả:</p><p>- Khi mở hàng các bạn vui lòng quay video lại để shop giải quyết khi có lỗi.</p><p>- Trường hợp quên quay video shop nhận đổi trả trong 3 ngày tính từ ngày giao hàng thành công ( trường hợp lỗi từ nhà sản xuất )</p>',1,59,60,145000,200000,5,'Còn hàng','image-1679304883261.jpeg','image-1679304883261.jpeg,image-1679304886838.jpeg,image-1679304891391.jpeg',1,0,1,3,1,1,1),(21,'Áo thun form rộng Localbrand','<p>Bảng size sản phẩm:</p><p>? M: dài 70 rộng 54 | 1m45 - 1m65, Dưới 65Kg</p><p>? L: dài 72 rộng 56 | 1m65 - 1m75, Dưới 75Kg</p><p>? XL: dài 74 rộng 58 | 1m75 - 1m85, Dưới 85Kg</p><p>-</p><p>Chất liệu: Cotton 4D cực kỳ mịn với độ dày vừa phải giúp thoải mái trong các hoạt động hàng ngày.</p><p>&nbsp;</p><p>✨ Vì shop mới thành lập được nên đơn hàng còn ít nhưng các tình iu cứ yên tâm vì áo cực kỳ xịn luôn ý ạ</p>',1,48,50,120000,160000,5,'Còn hàng','image-1679304977801.jpeg','image-1679304977801.jpeg,image-1679304980813.jpeg,image-1679304983268.jpeg',2,0,1,3,2,1,1),(22,'Áo Thun Cotton Tay Ngắn Họa Tiết Kẻ Sọc Đơn Giản Thời Trang Mùa Hè Mới Cho Nữ','<p>màu sắc : 4 màu kẻ trắng / kẻ vàng rêu - kẻ nâu / kẻ đen</p><p>Chiều dài : 70-71cm </p><p>Chiều rộng ngang : 55-56cm.</p>',1,138,150,140000,159000,1,'Còn hàng','image-1679305063947.jpeg','image-1679305063947.jpeg,image-1679305066552.jpeg,image-1679305069142.jpeg',12,0,1,3,1,1,1),(23,'Quần jeans lưng cao ống rộng màu RETRO','<p>- Mã Sản Phẩm:</p><p>- Màu Sắc Sản Phẩm: RETRO</p><p>- Chất Liệu Vải: Jeans Cotton không giãn, dày dặn và quan trọng độ bền màu cao</p><p>- Size: S M L ( Tham khảo bảng chọn size, hoặc inbox shop tư vấn ạ)</p><p>&nbsp;</p><p>- Về hình ảnh là toàn bộ shop chụp thật 100% nhưng màu sắc có thể chênh lệch tí xíu do hiệu ứng ánh sáng và độ phân giải của từng loại máy ạ.</p><p>--------------------</p><p>Hướng Dẫn Sử Dụng và Bảo Quản:</p><p>- Nên giặt sản phẩm trước khi sử dụng. </p><p>- Tốt nhất nên giặt tay và không nên chà mạnh bằng bàn chải có sợi cứng. </p><p>- Nếu giặt máy, nên chọn chế độ giặt nhẹ và sản phẩm có chất vải phù hợp để bảo quản được lâu. </p><p>- Không nên sử dụng chất giặt tẩy. </p><p>- Không nên ngâm chung với trang phục bị ra màu. </p><p>- Lộn mặt trái khi phơi tránh bị phai màu.</p>',1,100,100,159000,180000,5,'Còn hàng','image-1679543225821.jpeg','image-1679543225821.jpeg,image-1679543230964.jpeg,image-1679543235537.jpeg',0,0,1,4,2,1,1),(24,'Quần Cạp Lệch Màu Xanh Form Rộng Hàn Quốc Siêu Hot 2023','<p>Quần Cạp Lệch Khuy Vàng Form Rộng Hàn Quốc, Mẫu Mới Nhất Mùa Đông </p><p>? Chất Liệu: Quần jean 100% co dãn, ít phai màu </p><p>? Màu sắc: Xanh đậm (màu sắc bên ngoài có thể chênh lệch 10-20%)</p><p>? Thông số size quần:</p><p>XS</p><p>S</p><p>M</p><p>L</p><p>XL</p><p>? QUẦN FORM RỘNG, CÁC CẬU THAM KHẢO BẢNG SIZE Ở CUỐI SẢN PHẨM NHA</p><p>Khách hàng băn khoăn về size quần và kiểu dáng quần, vui lòng ib Cam trước khi đặt hàng để được tư vấn chính xác nhất!! </p><p>? CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM:</p><p>- Trường hợp đổi size, đổi mẫu do mong muốn khách hàng: áp dụng với sản phẩm có giá tương đương hoặc giá cao hơn (trường hợp khách đổi sang mẫu giá trị thấp hơn, shop sẽ không back lại giá trị chênh lệch 2sp hoặc trừ vào phí ship).</p><p>- Trường hợp shop gửi thiếu sản phẩm: vui lòng giữ nguyên bao bì, có video quay khi unbox đơn hàng.</p><p>- Cam kết 1 đổi 1 khi sản phẩm bị lỗi do nhà sản xuất.</p>',1,30,30,135000,180000,4,'Còn hàng','image-1679900205715.jpeg','image-1679900205715.jpeg,image-1679900210734.jpeg',0,0,1,4,2,1,2),(25,'Quần Jeans Nữ Ống Đứng Gấp Gấu Co Dãn Cạp Cao Cá Tính Trẻ Trung','<p>QUẦN JEAN GẬP GẤU </p><p>?Lên tiếp mã hot</p><p>Eo ơi mã này các chị ko chốt chắc e tức mà bỏ nghề lun á :)))) nó đẹp ghê gớm luôn ạ. </p><p>Size S &lt; 45kg, Sz M &lt; 49kg&nbsp;, L &lt; 52kg</p><p>Màu sắc : Xanh nhạt - Xanh đậm</p><p>Chất liệu bò dày đẹp co dãn - Ảnh thật các bác nhé ??</p><p>&nbsp;</p><p>&nbsp;</p><p>* BẢO QUẢN</p><p>- Khi giặt chúng ta không ngâm trong bột giặt quá 30 phút.</p><p>- Sử dụng xà phòng trung tính</p><p>- Lộn trái khi giặt máy và giặt ở chế độ nhẹ nhàng, không sử dụng nước nóng quá 40 độ C</p><p>- Không sử dụng thuốc tẩy, tẩy quần áo</p><p>- Là ở nhiệt độ dưới 120 độ C</p><p>- Nên phơi ở những nơi thoáng mát và tránh ánh nắng mặt trời.</p><p>- Không giặt chung đồ trắng với những sản phẩm màu</p><p>&nbsp;</p><p>SHOP CAM KẾT: </p><p>- Có kèm ảnh thật chụp</p><p>- Form dáng của sản phẩm đẹp chuẩn y hình. Đảm bảo vải chất lượng tốt 100%.&nbsp;</p>',1,60,60,135000,175000,1,'Còn hàng','image-1679900744246.jpeg','image-1679900744246.jpeg,image-1679900751534.jpeg,image-1679900757899.jpeg',0,0,1,4,2,1,1),(26,'QUẦN JEANS ỐNG RỘNG NỮ LƯNG CAO RÁCH 2 MẢNG ĐÙI PHẢI PHỐI MẢNG TO GỐI TRÁI XANH NHẠT ĐẬM SIÊU ĐẸP','<p>Tên sản phẩm: Quần Jeans Ống Rộng Nữ Lưng Cao</p><p>Nội dung bắt buộc theo tính chất của từng loại hàng hóa/ dịch vụ:</p><p>A) Thành phần: Vải jeans 100% cotton</p><p>+ Mang lại cho người mặc cảm giác thoái mái và thông thoáng tốt nhất. Không còn cảm giác bí bách, thô nóng trong mọi hoạt động hằng ngày</p><p>&nbsp;</p><p>B) Thông số kỹ thuật:</p><p>Size S, M, L</p><p>Quần Ống Rộng Nữ:</p><p>Size S: eo trên rốn 58-60cm, dài 98cm, lưng cao 30cm ( trên rốn ) Cân nặng: khoảng 38kg-44kg ( tùy chiều cao )</p><p>Size M: eo trên rốn 63-65cm, dài 98cm, lưng cao 30cm ( trên rốn )</p><p>Cân nặng: khoảng 45kg-50kg ( tùy chiều cao )</p><p>Size L: eo trên rốn 67-69cm, dài 98cm, lưng cao 30cm ( trên rốn ) Cân nặng: khoảng 51kg-55kg ( tùy chiều cao )</p><p>&nbsp;</p><p>C) Thông tin cảnh báo:</p><p>Với tất cả sản phẩm thời trang: Nên giặt 1 lần trước khi mặc để đảm bảo an toàn cho da.</p>',1,100,100,145000,189000,3,'Còn hàng','image-1679900922626.jpeg','image-1679900922626.jpeg,image-1679900926643.jpeg,image-1679900931569.jpeg',0,0,1,4,2,1,1),(27,'Quần bò nữ ống đứng,quần jean ống suông,xuông cạp cao,jeans ống rộng co giãn túi trước phong cách Hàn Quốc','<p>Quần Jeans Skinny Túi trước Co giãn xịn xò</p><p>quần jean nữ ống đứng,quần bò dáng suông,xuông cạp cao,chất jeans ống rộng co giãn túi trước phong cách Hàn Quốc</p><p>- Chất jean đẹp có co giãn mặc thích lắm ạ , lê dáng vô cùng xịn xò nè - Ảnh mẫu thật 100% </p><p>- Các nàng mua qua insta nhà t mê mẩn lắm đó ạ ^^ </p><p>- Full size S M L </p><p>S ~ 40-45kg&nbsp;, eo ~ 62 </p><p>M ~ 45-50kg , eo ~ 65 </p><p>L ~ 50-58kg , eo ~ 71</p><p>Ngoài ra chất jean có co giãn vậy lên sẽ nhỉnh lên cân nặng khoảng 2-3 kg và kèm kích thước size eo nữa nha&nbsp;</p>',1,30,30,130000,150000,1,'Còn hàng','image-1679901126847.jpeg','image-1679901126847.jpeg,image-1679901134435.jpeg',0,0,1,4,2,1,1),(28,'Quần ống rộng dáng suông nữ cạp cao, quần jean kaki ống đứng trơn màu nâu tây sang chảnh size SML','<p>Quần jean ống rộng,quần bò màu kem kaki,chất jeans cạp cao hách dáng cá tính </p><p>Thông tin sản phẩm : sản phẩn được gia công tại việt nam</p><p>quần jean ống rộng,quần bò màu kem kaki,chất jeans cạp cao hách dáng cá tính </p><p>- Màu quần này đang rất hot luôn mọi người à , trước mình cứ mong muốn có một em quần jean màu lạ mắt một chút để có thể mic nhiều đồ xinh hơn nay chính shop e ra mắt em quần jean màu kaki cá tính và lạ mắt mẫu mới nhất năm nay luôn ạ</p><p>- Chất jean dày dặn from ống rộng cạp cao cá tính lắm ạ</p><p>- Size S M L chiều dài quần &gt; 100cm vậy nên sẽ chùm mắt cá chân nha </p><p>- Dạ shop có sẵn ạ cậu đặt đơn ngay và luôn để giao hàng được nhanh nha</p><p>&nbsp;Quần dài&nbsp;&gt;100 cm Các bạn có thể mặc xắn gấu lên hoặc cắt nếu dài </p><p>- size S dưới 46kg eo dưới 66cm - mông dưới 89cm - dài 98cm</p><p>- size M dưới 52kg eo dưới 70cm - mông dưới 92cm - dài 100cm</p><p>- size L dưới 58kg eo dưới 74cm - mông dưới 95cm - dài 102cm</p>',1,30,30,143000,179000,1,'Còn hàng','image-1679901406998.jpeg','image-1679901406998.jpeg,image-1679901415857.jpeg,image-1679901424241.jpeg',0,0,1,4,2,1,1),(29,'Chân Váy Jean Dáng Dài [ Chân Váy Midi  Chữ A Cạp Cao ] Chan Váy Tua Gấu','<p>? HƯỚNG DẪN CHỌN SIZE ?</p><p>• Size S: 40 - 45Kg ( eo dưới 64cm - Chiều dài 85cm )</p><p>• Size M: 46 - 50kg (eo dưới 68cm - Chiều dài 85cm )</p><p>• Size L:&nbsp;51 - 55kg (eo dưới 72 cm - Chiều dài 85cm )</p><p>? LƯU Ý : bảng size tham khảo, còn tùy thuộc vào fom dáng chiều cao cân nặng của từng người.</p><p>&nbsp;</p><p>? THÔNG TIN SẢN PHẨM ?</p><p>• Kiểu dáng: chân váy xếp ly dài </p><p>• Phong cách: lưng cao, thiết kế cá tính</p><p>• Chất liệu: Cotton mềm, dày dặn, ko co giãn</p><p>• Màu sắc: đen, trắng không phai màu, bong tróc</p><p>• Kích thước: 3 Size S,M,L</p><p>• Đặc điểm nổi bật nhất: được làm từ chất liệu vải đẹp , không xù , không co rút , fom dáng chuẩn ko chỉ thừa </p><p>• Đóng gói: Đóng gói cẩn thận và an toàn, bạn luôn yên tâm khi nhận sản phẩm.</p><p>&nbsp;</p><p>? MÔ TẢ SẢN PHẨM ?</p><p>• Form dáng chuẩn, rộng rãi thoải mái</p><p>• Thiết kế may chi tiết kỉ đẹp ko chỉ thừa</p><p>• Kiểu dáng: bassic nhẹ nhàng. Đa phong cách, gọn nhẹ, năng động</p><p>• Mùa sử dụng: xuân, hạ, thu, đông</p><p>• Đối tượng sử dụng: nữ từ 55kg quay đầu</p><p>&nbsp;</p><p>? Hướng dẫn bảo quản ?</p><p>• Giặt riêng sản phẩm màu sáng và màu tối</p><p>• Giặt sản phẩm với nước ở nhiệt độ thường</p><p>• Nên phơi sản phẩm dưới ánh nắng trực tiếp</p><p>• Không nên sử dụng chất tẩy, không xoắn vắt mạnh</p>',1,0,60,140000,180000,1,'Còn hàng','image-1679924414782.jpeg','image-1679924414782.jpeg,image-1679924418531.jpeg,image-1679924422586.jpeg',68,1,1,1,2,1,1),(30,'Áo sơ mi nữ kiểu babydoll tay bồng hottrend phong cách Hàn Quốc năng động màu đen trắng','<p>? THÔNG TIN SẢN PHẨM:</p><p>-Tên sản phẩm: Áo sơ mi nữ kiểu babydoll hottrend phong cách Hàn Quốc năng động màu đen trắng</p><p>-Màu sắc: trắng, ĐEN</p><p>Freesize &lt;58kg mang thoải mái.</p><p>Số đo cụ thể:</p><p>Dài áo: 54cm</p><p>V1 102cm</p><p>Tay áo: 58Cm</p><p>vai 40cm</p><p>CHẤT ĐŨI XỐP HÀN CHÂU</p><p>Áo sơ mi nữ kiểu babydoll hottrend phong cách Hàn Quốc năng động màu đen trắng bảo quản như sau ạ</p><p>- Giặt máy thì nên lật trái chân váy để giặt còn giặt tay thì ko cần ạ</p><p>&nbsp;</p><p>Áo sơ mi nữ kiểu babydoll hottrend phong cách Hàn Quốc năng động màu đen trắng có cam kết như sau ạ</p><p>&nbsp;- Đảm bảo chất&nbsp;xịn cao cấp 100% </p><p>- Hàng bên mình có sẵn nên khách đặt bên mình giao liền ạ</p>',1,15,15,120000,155000,2,'Còn hàng','image-1679924880410.jpeg','image-1679924880410.jpeg,image-1679924887223.jpeg,image-1679924891546.jpeg',0,0,1,6,2,1,1),(31,'Áo sơ mi nữ cổ bèo 2 tầng kiểu form rộng màu trắng phong cách Hàn Quốc','<p>? THÔNG TIN SẢN PHẨM:</p><p>-Tên sản phẩm: Áo sơ mi nữ cổ bèo 2 tầng kiểu form rộng màu trắng phong cách Hàn Quốc </p><p>-Màu sắc: trắng</p><p>Freesize &lt;60kg mang thoải mái.</p><p>Số đo cụ thể:</p><p>Dài áo: 61cm</p><p>Vai áo: 43cm</p><p>Ngực áo 107cm</p><p>Tay áo: 50cm</p><p>Áo sơ mi nữ cổ bèo 2 tầng kiểu form rộng màu trắng phong cách Hàn Quốc bảo quản như sau ạ</p><p>- Giặt máy thì nên lật trái chân váy để giặt còn giặt tay thì ko cần ạ</p><p>&nbsp;</p><p>Áo sơ mi nữ cổ bèo 2 tầng kiểu form rộng màu trắng phong cách Hàn Quốc có cam kết như sau ạ</p><p>&nbsp;- Đảm bảo chất&nbsp;xịn cao cấp 100% </p><p>- Hàng bên mình có sẵn nên khách đặt bên mình giao liền ạ</p>',1,48,50,105000,135000,5,'Còn hàng','image-1679924990248.jpeg','image-1679924990248.jpeg,image-1679924995380.jpeg,image-1679925001494.jpeg',2,0,1,6,2,1,1),(32,'Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc ','<p>? THÔNG TIN SẢN PHẨM:</p><p>-Tên sản phẩm: Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc -Màu sắc: nâu, kem</p><p>Freesize &lt;56kg mang thoải mái.</p><p>Số đo cụ thể:</p><p>Dài áo: 37cm vạt trước, 57cm vạt sau</p><p>vai 39cm</p><p>V1 100cm</p><p>Tay áo: 58Cm</p><p>CHẤT VOAN LỤA MỎNG</p><p>Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc bảo quản như sau ạ</p><p>- Giặt máy thì nên lật trái chân váy để giặt còn giặt tay thì ko cần ạ</p><p>&nbsp;</p><p>Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc có cam kết như sau ạ</p><p>&nbsp;- Đảm bảo chất&nbsp;xịn cao cấp 100% </p><p>- Hàng bên mình có sẵn nên khách đặt bên mình giao liền </p>',1,50,50,125000,155000,2,'Còn hàng','image-1679925157946.jpeg','image-1679925157946.jpeg,image-1679925160673.jpeg,image-1679925163887.jpeg',0,0,1,6,2,1,1),(33,'Áo sơ mi nữ voan tơ MỎNG cổ bèo form rộng full 6 màu phong cách Hàn Quốc ','<p>? THÔNG TIN SẢN PHẨM:</p><p>-Tên sản phẩm: Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc -Màu sắc: nâu, kem</p><p>Freesize &lt;56kg mang thoải mái.</p><p>Số đo cụ thể:</p><p>Dài áo: 37cm vạt trước, 57cm vạt sau</p><p>vai 39cm</p><p>V1 100cm</p><p>Tay áo: 58Cm</p><p>CHẤT VOAN LỤA MỎNG</p><p>Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc bảo quản như sau ạ</p><p>- Giặt máy thì nên lật trái chân váy để giặt còn giặt tay thì ko cần ạ</p><p>&nbsp;</p><p>Áo sơ mi nữ croptop voan lụa cổ bèo form vừa 2 màu nâu kem phong cách Hàn Quốc có cam kết như sau ạ</p><p>&nbsp;- Đảm bảo chất&nbsp;xịn cao cấp 100% </p><p>- Hàng bên mình có sẵn nên khách đặt bên mình giao liền </p>',1,30,30,129000,170000,2,'Còn hàng','image-1679925230934.jpeg','image-1679925230934.jpeg,image-1679925237338.jpeg,image-1679925241150.jpeg',0,0,1,6,2,1,1),(34,'Áo Sơ Mi nữ form rộng Dài Tay Công Sở Chất Xốp Kẻ Sọc dễ mặc 3 màu phong cách Hàn Quốc','<p>? THÔNG TIN SẢN PHẨM:</p><p>-Tên sản phẩm: Áo Sơ Mi nữ form rộng Dài Tay Công Sở Chất Xốp Kẻ Sọc dễ mặc 3 màu phong cách Hàn Quốc</p><p>-Màu sắc: kẻ cam, kẻ tím, kẻ xanh dương</p><p>Freesize từ 48kg- 65kg mang thoải mái.</p><p>Số đo cụ thể:</p><p>Dài áo: 74cm</p><p>Ngang thân: 60cm (x2 ra chu vi)</p><p>Vai áo: 67cm</p><p>Tay áo: 56cm</p><p>Form RỘNG nha các nàng.</p><p>&nbsp;</p><p>Áo Sơ Mi nữ form rộng Dài Tay Công Sở Chất Xốp Kẻ Sọc dễ mặc 3 màu phong cách Hàn Quốc bảo quản như sau ạ</p><p>- Giặt máy thì nên lật trái chân váy để giặt còn giặt tay thì ko cần ạ</p><p>Áo Sơ Mi nữ form rộng Dài Tay Công Sở Chất Xốp Kẻ Sọc dễ mặc 3 màu phong cách Hàn Quốc có cam kết như sau ạ</p><p>&nbsp;- Đảm bảo chất&nbsp;xịn cao cấp 100% </p><p>- Hàng bên mình có sẵn nên khách đặt bên mình giao liền ạ</p>',1,100,100,100000,150000,2,'Còn hàng','image-1679925352800.jpeg','image-1679925352800.jpeg,image-1679925357396.jpeg,image-1679925362251.jpeg',0,0,1,6,2,1,1),(35,'Áo sơ mi vải mát form rộng khoác ngoài đi biển DELIZ, áo sơ mi cổ đức công sở nhiều màu','<p>✅Tên Sản Phẩm:&nbsp;Áo sơ mi nữ dài tay form rộng ulzzang kiểu hàn basic màu trắng, xanh, nâu, vàng, tím dễ phối đồ</p><p>Chất Liệu: Cotton mềm</p><p>Màu Sắc: Trắng, Hồng, Nâu, Xanh, Xanh min, Vàng</p><p>Xuất Xứ: Quảng Châu</p><p>Kích Thước: &lt;65kg Free Size</p><p>&nbsp;</p><p>Chiều Dài Áo: sz ~64cm </p><p>&nbsp;</p><p>Vòng 1: (80-92cm) </p><p>&nbsp;</p><p>✅ Mix đồ: ce có thể mix kèm chân váy hoặc các loại quần đều phù hợp nhé vì dòng áo vintager lên rất dễ mặc</p><p>&nbsp;</p><p>✅ - Áo sơ mi trắng nữ đi học form rộng vừa, tay dài, phần tay nhúm cách điệu. Loại vải không quá dày, không quá mỏng, mặc mát thoáng khí khi đạp xe đi học, tập thể dục ngoài sân trường, ngồi học trong lớp,&nbsp;các bạn nữ yên tâm là không lộ áo trong.</p><p>✅ - Sơ mi trắng có thể mặc đi học, đi chơi, đi làm, đi hẹn hò</p><p>&nbsp;</p><p>✅ - Áo sơ mi màu có thể mặc để đi chơi, đi biển</p><p>&nbsp;</p>',1,100,100,95000,135000,10,'Còn hàng','image-1679925426323.jpeg','image-1679925426323.jpeg,image-1679925430842.jpeg,image-1679925434029.jpeg',0,0,1,6,2,1,1),(36,'Áo thun trơn 10 màu A.studio tăm xốp ','<p>Màu sắc : nhiều màu</p><p>Chiều dài áo : 48cm</p><p>Chiều rộng áo : 42cm</p><p>&nbsp;</p><p>Có ảnh chụp thật + video các bạn lướt hết để xem nhé - do độ phân giải của từng máy khác nhau và yếu tố ánh sáng nên màu sắc sẽ bị chênh lệch chút xíu nha ??? .</p>',1,75,75,70000,99000,5,'Còn hàng','image-1679925526976.jpeg','image-1679925526976.jpeg,image-1679925532580.jpeg,image-1679925537290.jpeg',0,0,1,3,2,1,1),(37,'Quần jean ống đứng form hàn lưng cao','<p>Quần jean nữ ống đứng cạp cao , quần bò ống rộng xẻ gấu hách dáng chất co giãn Hàn Quốc</p><p>&nbsp;</p><p>* THÔNG TIN SẢN PHẨM : </p><p>- Quần jean chất co giãn mặc thích lắm các bae nha , cạp cao mic đồ gì cũng xinh hết nè </p><p>- Hiện đang sẵn màu : xanh xám bạc </p><p>- Size SML </p><p>+ Size S dưới 47kg </p><p>&nbsp;</p><p>+ Size M dưới 52kg </p><p>&nbsp;</p><p>+ Size L dưới 58kg </p><p>&nbsp;</p>',1,60,60,150000,190000,1,'Còn hàng','image-1679926001745.jpeg','image-1679926001745.jpeg,image-1679926005646.jpeg,image-1679926008980.jpeg',0,0,1,4,2,1,2),(38,'Quần Kaki Túi Hộp Ống Suông Lưng Cao Quần Cargo Dày Dặn Co Giãn TheCotton Co Giãn 4 Chiều','<p>Quần kaki nữ túi hộp ống suông TheCotton thiết kế và sản xuất mang phong cách streetwear phù hợp với cả nam và nữ, trẻ trung, năng động - Đảm bảo chất lượng giống mô tả 100%</p><p>&nbsp;</p><p>- Quần có chun phía sau cực kì co giãn</p><p>Lưu ý: bảng size trên chỉ là tương đối các bạn có thể nhắn tin cho chúng mình để tư vấn size cụ thể hơn nha</p><p>&nbsp;</p><p>* Chi tiết sản phẩm Quần kaki nữ túi hộp ống suông TheCotton:</p><p>+ Chất liệu kaki dày dặn, co giãn tốt.</p><p>+ Phù hợp khi mix với nhiều loại trang phục, đi chơi, đi học, đi làm đều đẹp.</p><p>+ Thiết kế đơn giản trẻ trung, năng động.</p>',1,60,60,150000,190000,1,'Còn hàng','image-1679926150421.jpeg','image-1679926150421.jpeg,image-1679926154423.jpeg,image-1679926157437.jpeg',0,0,1,4,2,1,2),(39,'Quần giả váy nữ ','<p>❤️ THÔNG SỐ SẢN PHẨM </p><p>SIZE S : eo 58-65cm&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 37cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 88cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 62cm </p><p>&nbsp;</p><p>SIZE M : eo 65-72c </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 39cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 95cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 62cm </p><p>&nbsp;</p><p>SIZE L : eo 70 - 78cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chiều dài 41cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mông 100cm </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;đùi 64cn </p><p>Vì quần lưng thun nên phần eo bình thường chưa giãn sẽ ko chênh nhau quá nhiều. Các bạn thích mặc vừa khít eo hoạc rộng thì xíu cho thoải mái thì tham khảo số đo giúp shop nhé ?</p><p>&nbsp;</p><p>* Lưu ý : sai số tầm 2-3cm , bảng số đo chỉ ở mức tương đối . Bạn nào ko chắc chắn thì inb bọn mình tư vấn nhaa&nbsp;</p>',1,75,36,140000,179000,1,'Còn hàng','image-1679926337614.jpeg','image-1679926337614.jpeg,image-1679926342093.jpeg',137,2,1,1,2,1,2),(40,'Quần ngố màu trắng','<p><br></p><p>➖ THÔNG TIN SẢN PHẨM: quần ngố màu trắng be</p><p>• Chất liệu: Kaki</p><p>• Size: </p><p>S -eo 64cm (Dưới 48kg)</p><p>M - eo 68cm (Dưới 52kg)</p><p>L - eo 72cm (Dưới 56kg)</p><p>(Số đo cân nặng không chính xác hoàn toàn và còn tuỳ và dáng mỗi người)</p><p>&nbsp;</p>',1,30,30,90000,125000,1,'Còn hàng','image-1679926670637.jpeg','image-1679926670637.jpeg',0,0,1,4,2,1,2),(41,'Quần ống rộng vải ruby','<p><br></p><p>➖ THÔNG TIN SẢN PHẨM: 	Quần ống rộng suông dài chất ruby</p><p>• Chất liệu: Ruby</p><p>• Size: </p><p>S -eo 64cm (Dưới 48kg)</p><p>M - eo 68cm (Dưới 52kg)</p><p>L - eo 72cm (Dưới 56kg)</p><p>(Số đo cân nặng không chính xác hoàn toàn và còn tuỳ và dáng mỗi người)</p><p>&nbsp;</p>',1,40,40,190000,235000,1,'Còn hàng','image-1679926800775.jpeg','image-1679926800775.jpeg,image-1679926805070.jpeg',0,0,1,4,2,1,2),(42,'Quần bò baggy trắng','<p><br></p><p>➖ THÔNG TIN SẢN PHẨM: 	Quần bỏ baggy màu trắng xinh xẻo</p><p>Chất liệu: kaki</p><p>• Size: </p><p>S -eo 64cm (Dưới 48kg)</p><p>M - eo 68cm (Dưới 52kg)</p><p>L - eo 72cm (Dưới 56kg)</p><p>(Số đo cân nặng không chính xác hoàn toàn và còn tuỳ và dáng mỗi người)</p><p>&nbsp;</p>',1,38,40,150000,189000,1,'Còn hàng','image-1679926929940.jpeg','image-1679926929940.jpeg,image-1679926933278.jpeg',2,0,1,4,2,1,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Quản trị viên','admin','$2b$10$FMz3k8eYVMGE0nH2HaNAcu7uVhTyoQvYKNwWwdneVCZKtFX6jiyRa',NULL,NULL,'admin@gmail.com','0123456789','Chưa cập nhật',1,0,0,1,'2023-03-30 16:02:46',NULL,1),(2,'Lê Mai Anh','maianh','$2b$10$DHOqsa/hc4X3D5zMYW4Fi.Hu6uAHdNVIPv37CvIk3nvI1qtUPMpWi',NULL,NULL,'lemaianh@gmail.com','0154789632','Chưa cập nhật',1,0,0,2,'2023-04-01 22:46:18','image-1680453785323.png',2),(3,'Ngọc Ánh','ngocanh','$2b$10$aVt8DWZ01qqln5rG3V5n9uvJeoTED0JZyvc6bqITgNhwJw0/9.xqS',NULL,NULL,'ngocanh@gmail.com','0123487956','Chưa cập nhật',1,0,0,2,'2023-04-05 22:44:50',NULL,3),(4,'Vũ Xuân Quý','xuanquy','$2b$10$ryk1pgFob.x/gmKvKRs5EOvSzIxxtoXyECBvj.88SZ7qVb673yyXO',NULL,NULL,'vuxuanquynnn@gmail.com','0868603825','Chưa cập nhật',1,0,0,2,'2023-04-06 16:54:17',NULL,4),(5,'Vũ Hồng Sơn','hongson','$2b$10$NSm0Ma/aIWakVQrtj1cDueOi8HRjprckT02yHm6/Bu3I60ays2CT2',NULL,NULL,'hongson@gmail.com','0123487569','Chưa cập nhật',1,0,0,2,'2023-04-06 17:06:35',NULL,5),(6,'VU QUY4444','tonydevbbw','$2b$10$oZ2zXZteg355o7LaK6ipDuJsUkF1DkBl8wH3rDo/zNgYngjCLNhhi',NULL,NULL,'vuxuanquynnn44@gmail.com','086860382544','Chưa cập nhật',1,0,0,2,'2023-04-06 17:10:35',NULL,6),(7,'123','123','$2b$10$.BH3dNs4a3DRYbfxOU.T0eAssujZFXPCKGhwrgRl/9HwZ3hM/gE5e',NULL,NULL,'3333','33333','Chưa cập nhật',1,0,0,2,'2023-04-06 17:14:52',NULL,7);
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

-- Dump completed on 2023-05-18 14:46:14
