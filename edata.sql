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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,1,0),(2,2,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carddetail`
--

LOCK TABLES `carddetail` WRITE;
/*!40000 ALTER TABLE `carddetail` DISABLE KEYS */;
INSERT INTO `carddetail` VALUES (1,2,8,4389000,1,4389000,'2023-10-17',1,1),(2,2,7,25399000,1,25399000,'2023-10-17',1,1),(3,2,6,14899000,1,14899000,'2023-10-17',1,1),(4,2,5,8499000,1,8499000,'2023-10-17',1,1),(5,2,13,39999000,1,39999000,'2023-10-17',1,2),(6,2,14,19199000,1,19199000,'2023-10-17',1,2),(7,2,10,15999000,1,15999000,'2023-10-17',1,2),(8,2,16,35499000,1,35499000,'2023-10-17',1,3),(9,2,10,15999000,1,15999000,'2023-10-17',1,4),(10,2,11,9999000,1,9999000,'2023-10-17',1,4),(11,2,15,11999000,1,11999000,'2023-10-17',1,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Màn hình','default.jpg','Màn hình máy tính'),(2,'LAPTOP, MACBOOK, SURFACE','default.jpg','LAPTOP, MACBOOK, SURFACE'),(3,'LINH KIỆN','default.jpg','LINH KIỆN'),(4,'TẢN NHIỆT, FAN, ĐÈN LED','default.jpg','LOA, TAI NGHE, MIC, WEBCAM'),(5,'LINH KIỆN MÁY TÍNH','default.jpg','LINH KIỆN MÁY TÍNH');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'SAMSUNG','0123456789','check','samsung@gmail.com','samsung.jpg'),(2,'ASUS','01234567891','check','asus@gmail.com','asus.jpg'),(3,'Apple','01234567892','check','apple@gmail.com','apple.jpg'),(4,'MSI','012345687','check','msi@gmail.com','msi.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetail`
--

LOCK TABLES `orderdetail` WRITE;
/*!40000 ALTER TABLE `orderdetail` DISABLE KEYS */;
INSERT INTO `orderdetail` VALUES (1,2,NULL,'2023-10-17',53221000,'Chờ thanh toán',1,'Chưa cập nhật',0),(2,2,NULL,'2023-10-17',75232000,'Đang giao hàng',1,'Chưa cập nhật',0),(3,2,NULL,'2023-10-17',35534000,'Chờ thanh toán',1,'Chưa cập nhật',0),(4,2,NULL,'2023-10-17',38032000,'Đã giao hàng',1,'Chưa cập nhật',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'MÀN HÌNH GAMING SAMSUNG ODYSSEY ARK G97NB LS55BG970NEXXV (55 INCH/UHD/VA/165HZ/CONG)','<h2>Đánh giá: Màn Hình Samsung Odyssey Ark G97NB LS55BG970NEXXV (55 inch/UHD/VA/165hz/Cong)</h2><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng xem bảng thông số kĩ thuật hoặc hỏi kinh doanh trước khi mua.&nbsp;</em></p><h2><strong>Samsung Odyssey Ark G97NB là màn hình gaming 55 inch và có độ cong 1000R đầu tiên trên thế giới. Sở hữu kích độ phân giải 4K UHD tỉ lệ 16:9&nbsp;tương đương với các dòng màn hình TV hiện tại. Thời gian phản hồi ngắn cùng công nghệ Neural Quantum Processor Ultra cho gia tăng chất lượng hiển thị. Chế độ Cockpit (buồng lái) cho phép nâng màn hình lên và xoay dọc lại, tạo không gian làm việc cũng như giải trí đa nhiệm, khi có thể chia ba màn hình cho các tác vụ khác nhau thay vì phải gắn nhiều màn hình.</strong></h2><p>Chiếm ngưỡng thế giới game rộng lớn với màn hình cực đại 55-inch và độ cong 1000R mãn nhãn. Công nghệ Quantum Mini-LED mang đến độ sâu hoàn hảo, kết hợp cùng công nghệ Âm thanh vòm cho trải nghiệm âm thanh đắm chìm mọi giác quan.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota1.jpg\"></p><p>Chọn vị trí chiến đấu hoàn hảo với Chế độ Cockpit khi xoay màn hình. Sử dụng Ark Dial để dễ dàng điều chỉnh kích thước và tỷ lệ màn hình, thưởng thức nhiều nguồn nội dung cùng một lúc chỉ với một lần chạm. Cảm giác như bạn đang ở trong một buồng lái của một phi thuyền chuyên nghiệp. Xoay dọc màn hình sang Chế độ Cockpit với chức năng HAS điều chỉnh độ cao, nghiêng và xoay cho bạn toàn quyền điều khiển để có vị trí và không gian màn hình tối ưu</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota2.jpg\"></p><p>Công nghệ đèn nền Quantum Matrix phân tích và kiểm soát độ sáng tối của mini-Led. Tăng khả năng hiển thị hình ảnh chi tiết, màu sắc chân thực hơn. Giảm thiểu khuyết điểm hở sáng như ở công nghệ IPS, tạo chiều sâu của nội dung hiển thị</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota3.jpg\"></p><p>Màn hình tự động điều chỉnh độ sáng, khuếch đại độ tương phản và cải tiến nâng cấp độ phân giải của bất kỳ nội dung nào bạn đang xem. Kiến tạo và tự nâng cấp cho bạn trải nghiệm chất lượng hình ảnh 4K tối ưu chưa từng có. Thay vì chỉ sử dụng một mạng mô phỏng thần kinh nhân tạo để phân tích dữ liệu hình ảnh, bộ xử lý Neo Quantum 4K sử dụng dữ liệu được tạo ra từ 20 mạng mô phỏng thần kinh nhân tạo giúp tăng cường đến từng chi tiết theo chuẩn 4K cho mọi nội dung.</p><p><br></p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota4.jpg\"></p><p><br></p><p>Chinh phục mọi đối thủ, ngay cả ở tốc độ cực cao. Tần số quét 165 Hz cùng thời gian phản hồi 1 ms cung cấp những chuyển động hình ảnh mượt mà với tốc độ phản hồi nhanh chóng, cho phép bạn làm việc trên các ứng dụng đồ họa hay giải trí, xem phim mà ít xảy ra hiện tượng xé hình hay bóng mờ</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota5.jpg\"></p><p><br></p><p>Tính năng VRR (Tần số quét biến thiên) cùng công nghệ AMD FreeSync Premium Pro giúp đồng bộ GPU và bảng điều khiển nhằm hạn chế giật lắc và hiện tượng xé hình. Những trận game đòi hỏi thao tác nhanh và phức tạp sẽ luôn ổn định và không lo giật hình, làm tăng khả năng chiến thắng của bạn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota6.jpg\"></p><p><br></p><p>Điều khiển các tính năng một cách đơn giản và đa dạng. Tùy chỉnh kích thước màn hình, vị trí, thậm chỉ là tỷ lệ thiết lập chơi game để thoải mái nhất.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/man_hinh_odyssey_ark_mota7.jpg\"></p><p><br></p><p>Thiết đặt nhiều màn hình đã trở thành quá khứ. Ngoài ra, các ứng dụng tích hợp sẵn như YouTube và Samsung TV Plus mang đến trải nghiệm Smart TV để bạn có thể giải trí, phát trực tuyến và duyệt web chỉ với một màn hình.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/09-03-2023/samsung_odyssey_ark_mota.jpg\"></p>',7,150,150,38000000,39000000,1,'Còn hàng','image-1697514456046.jpeg','image-1697514456046.jpeg,image-1697514458354.jpeg,image-1697514460901.jpeg,image-1697514462929.jpeg',0,0,1,1,1,1,1),(4,'MÀN HÌNH GAMING ASUS TUF VG27AQ3A (27 INCH/QHD/IPS/180HZ/1MS/LOA)','<p>Thông số sản phẩm</p><ul><li>Kích thước: 27 inch</li><li>Độ phân giải: WQHD 2560x1440</li><li>Tấm nền: IPS</li><li>Tần số quét: 180Hz</li><li>Thời gian phản hồi: 1ms</li><li>Tích hợp loa: 2x 2W</li><li>Độ sáng: 250 nits</li><li>VESA: 100x100mm</li><li>Tỉ lệ tương phản: 1000:1</li><li>Cổng kết nối: 2x HDMI, 1x DisplayPort</li></ul><p><br></p>',7,50,50,8999000,7888000,1,'Còn hàng','image-1697514920221.jpeg','image-1697514920221.jpeg,image-1697514923725.jpeg,image-1697514926047.jpeg',0,0,1,1,1,2,1),(5,'MÀN HÌNH GAMING ASUS TUF VG27AQ (27 INCH/WQHD/IPS/165HZ/1MS)','<h2>Đánh giá: Màn hình Asus TUF VG27AQ | HACOM</h2><p><img src=\"https://hanoicomputercdn.com/media/product/47638_eyecare_tuf_vg_series.jpg\"></p><p><a href=\"https://www.hacom.vn/man-hinh-asus-tuf-gaming-27-vg27aq-wqhd-ips-hdr-165hz-1ms\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">TUF Gaming VG27AQ</a>&nbsp;là màn hình IPS, 27 inch, độ&nbsp;phân giải QHD (2560x1440), với tần số quét 165Hz được thiết kế cho các game thủ chuyên nghiệp Lần đầu tiên Motion Blur và Adaptive-sync có thể được bật cùng một lúc. Công nghệ mới này được gọi là ASUS Extreme Low Motion Blur Sync (ELMB SYNC). ELMB SYNC hoạt động với G-SYNC Compatible, cho phép game thủ thưởng thức các khung hình sắc nét, tốc độ cao.</p><h3><strong>&nbsp;<img src=\"https://hanoicomputercdn.com/media/lib/49178_VG27AQSpec1.jpg\"></strong></h3><h3><strong>ĐỘ PHÂN GIẢI QHD, PANEL IPS ĐEM LẠI TRẢI NGHIỆM HÌNH ẢNH ĐỈNH CAO</strong></h3><p><a href=\"https://www.hacom.vn/man-hinh-may-tinh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">Màn hình</a>&nbsp;TUF Gaming VG27AQ có bảng điều khiển WQHD (2560 x 1440) mang lại không gian nhiều hơn 77% so với màn hình Full HD (1920 x 1080) tiêu chuẩn. Công nghệ IPS mang đến cho bạn hình ảnh vượt trội với màu sắc nổi bật nhờ gam màu 99% sRGB và tỷ lệ tương phản 1.000: 1 đáng kinh ngạc. Góc nhìn rộng 178 độ đảm bảo độ méo và chuyển màu tối thiểu ngay cả khi bạn đang xem từ các vị trí khó quan sát.</p><p>&nbsp;<img src=\"https://hanoicomputercdn.com/media/lib/49178_VG27AQSpec2.jpg\"></p><h3><strong>TỐC ĐỘ LÀM MỚI CỰC NHANH 165Hz</strong></h3><p>Tốc độ làm mới&nbsp;<strong>TUF Gaming VG27AQ 165Hz</strong>&nbsp;làm giảm độ trễ và độ mờ chuyển động để giúp bạn chiếm ưu thế trong các game bắn súng góc nhìn thứ nhất, đua xe hay chiến lược thời gian thực và các tựa game thể thao.Tốc độ làm mới cực nhanh này cho phép bạn chơi ở cài đặt cấu hình cao nhất và cho phép bạn phản ứng ngay lập tức với những gì thấy trên màn hình.</p><p>&nbsp;<img src=\"https://hanoicomputercdn.com/media/lib/49178_VG27AQSpec3.jpg\"></p><h3><strong>GIẢM THIỂU BÓNG MỜ TỐI TÂN</strong></h3><p>Với ELMB SYNC, bạn có thể kích hoạt ELMB (công nghệ làm mờ chuyển động thấp) và G-SYNC compatible cùng lúc, loại bỏ hiện tượng bóng ma và xé hình ảnh cho hình ảnh sắc nét và tốc độ khung hình cao khi chơi game.</p><p>&nbsp;<img src=\"https://hanoicomputercdn.com/media/lib/49178_VG27AQSpec4.jpg\"></p><h3><strong>HDR10</strong></h3><p>Để cải thiện tầm nhìn của game thủ, TUF Gaming tương thích với dải nhạy sáng rộng HDR10 tiêu chuẩn công nghiệp cho mức độ màu sắc và độ sáng vượt quá khả năng của màn hình thông thường.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/49178_VG27AQSpec5.jpg\"></p><p><br></p>',7,56,60,7499000,8499000,1,'Còn hàng','image-1697515013512.jpeg','image-1697515013512.jpeg,image-1697515016173.jpeg,image-1697515018912.jpeg,image-1697515022979.jpeg',4,0,1,1,1,2,2),(6,'MÀN HÌNH GAMING ASUS ROG STRIX XG32VC (31.5INCH/WQHD/VA/170HZ/1MS/CONG)','<h2>Đánh giá: Màn hình Asus XG32VC Gaming Cao Cấp, Hiển thị Màu cực Chuẩn</h2><h2><strong><img src=\"https://hanoicomputercdn.com/media/product/48370_eyecare_xg_series.jpg\"></strong></h2><h2><strong>Hình ảnh chi tiết và độ tương phản cao</strong></h2><p>Với độ phân giải WQHD (2560 x 1440) giúp màn hình tận dụng được hơn 77% không gian chơi game trên màn hình so với màn hình Full HD tiêu chuẩn (1920 x 1080). Ngoài ra, màn hình này còn được trang bị độ tương phản đáng kinh ngạc 3000:1.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_1.jpg\"></p><p>&nbsp;</p><h2><strong>Công nghệ Chống Nhòe Chuyển động Độc quyền của ASUS</strong></h2><p>ROG Strix XG32VC sử dụng công nghệ độc quyền ASUS Extreme Low Motion Blur (Độ nhòe chuyển động siêu thấp), giúp loại bỏ hiện tượng bóng mờ và nhòe chuyển động, làm cho các hình ảnh chuyển động trở nên sắc nét hơn, nhờ đó trải nghiệm chơi game trở nên trơn tru và nhanh nhạy hơn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_2.jpg\"></p><p>&nbsp;</p><h2><strong>TỐC ĐỘ LÀM TƯƠI CỰC NHANH 170HZ</strong></h2><p>Nhờ có trải nghiệm hình ảnh mượt mà đáng kinh ngạc, bạn sẽ luôn có được lợi thế trong các tựa game bắn súng góc nhìn người thứ nhất, đua xe, chiến thuật thời gian thực và thể thao.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_3.jpg\"></p><p>&nbsp;</p><h2><strong>Công nghệ AMD FreeSync™ Premium Pro</strong></h2><p>Công nghệ AMD FreeSync™ Premium Pro đem đến trải nghiệm chơi game HDR thực thụ: một sự kết hợp giữa trải nghiệm chơi game với hiệu năng cao nhất và những hình ảnh có độ tương phản cao trong khi độ trễ thấp vẫn được duy trì.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_4.jpg\"></p><p>&nbsp;</p><h2><strong>Hub USB Type-C</strong></h2><p>Thiết kế này hỗ trợ truyền video thông qua tín hiệu DisplayPort; có thể đóng vai trò như một hub USB, có nghĩa là bạn có thể kết nối thiết bị của mình với các thiết bị ngoại vi có dây nhằm sắp xếp gọn gàng bàn làm việc Hub USB này cũng có thể sử dụng để sạc thiết bị di động của bạn. Thiết kế đầu nối USB Type-C ™ có thể đảo ngược giúp việc kết nối mọi thiết bị trở nên dễ dàng và nhanh chóng.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_6.jpg\"></p><h2><strong>&nbsp;</strong></h2><h2><strong>Hỗ trợ bộ chuyển đổi KVM Switch</strong></h2><p>Khi hai thiết bị được kết nối với màn hình, KVM switch cho phép bạn điều khiển cả hai thiết bị chỉ bằng một bàn phím và chuột. Điều này giúp tiết kiệm không gian bàn làm việc và trực quan hơn!</p><h2><strong>HDR</strong></h2><ul><li>HIGH DYNAMIC RANGE&nbsp;<strong>(</strong>HDR<strong>)</strong></li><li>VỚI DISPLAYHDR™ 400</li><li>Nhiều chế độ HDR</li></ul><h4><strong>HIGH DYNAMIC RANGE&nbsp;(HDR)&nbsp;VỚI DISPLAYHDR</strong><sup><strong>™</strong></sup><strong>&nbsp;400</strong></h4><p>Công nghệ HDR hỗ trợ nhiều phạm vi độ sáng để mang lại dải màu rộng hơn và độ tương phản cao hơn so với màn hình truyền thống. Với màu trắng sáng nhất và màu đen tối nhất, màn hình này sẽ đem đến những hình ảnh sắc nét chưa từng thấy. Ngoài ra, độ sáng của màn hình này còn có thể tăng lên mức cao nhất là 400 nit để đáp ứng yêu cầu chứng nhận DisplayHDR™ 400.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_7.jpg\"></p><h2><strong>Cải thiện trong game</strong></h2><ul><li>Công nghệ Shadow Boost</li><li>GamePlus</li><li>GameVisual</li><li>Công nghệ</li><li>Flicker−Free</li><li>Công nghệ Ultra−Low</li><li>Blue Light</li></ul><h4><strong>Công nghệ Shadow Boost</strong></h4><p>Công nghệ ASUS Shadow Boost làm sáng các vùng tối của thế giới game mà không gây cháy sáng các vùng sáng hơn - cải thiện được trải nghiệm xem tổng thể đồng thời giúp dễ phát hiện được kẻ địch ẩn nấp trong các vùng tối của bản đồ.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_8.jpg\"></p><h2><strong>Kỹ thuật</strong></h2><ul><li>Khả năng kết nối đa dạng</li><li>Thiết kế Chú trọng đến Người Sử dụng</li></ul><h4><strong>Khả năng kết nối đa dạng</strong></h4><p>Các tùy chọn cổng kết nối mở rộng, bao gồm, I/O: DisplayPort1.2, HDMI (v2.0) và USB Type-C hỗ trợ nhiều loại thiết bị đa phương tiện.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/57179_9.png\"></p><p><br></p>',6,26,30,13899000,14899000,1,'Còn hàng','image-1697515783460.png','image-1697515783460.png,image-1697515787015.png,image-1697515789459.png,image-1697515792126.png',4,0,1,1,1,2,2),(7,'MÀN HÌNH GAMING ASUS ROG STRIX XG349C (34 INCH/UWQHD/FAST IPS/180HZ/1MS)','<h2>Đánh giá: Màn hình Asus XG349C (34 inch/UWQHD/Fast IPS/180Hz/1ms/400 nits/HDMI+DP+USB+USBC+Audio)</h2><p>Là&nbsp;<a href=\"https://hacom.vn/man-hinh-asus-xg349c\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\"><strong>màn hình 34 inch UWQHD</strong></a>&nbsp;(3440 x 1440) HDR 21: 9 với tốc độ làm mới lên đến 180Hz siêu nhanh. Được thiết kế cho các game thủ và những người khác tìm kiếm lối chơi nhập vai, nó cung cấp một số thông số kỹ thuật nghiêm túc.</p><p>ROG Strix Asus XG349C cũng có tính năng Variable Overdrive độc ​​quyền tinh chỉnh các mức OD, giúp chuyển động trông nhất quán hơn ở phạm vi tốc độ khung hình thay đổi rộng hơn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/16-04-2022/xg349c_banner3.jpeg\"></p><h3><strong>Độ cong cực rộng</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/16-04-2022/65234_man_h__nh_asus_xg349c_850x850e.jpg\"></p><p>Bảng điều khiển UWQHD (3440 X 1440) 34 inch của ROG Strix Asus XG349C&nbsp;mang đến hình ảnh tuyệt đẹp từ mọi góc độ với độ cong 1900R đảm bảo mọi điểm đều đều với mắt bạn. Điều này góp phần mang lại sự thoải mái khi xem hơn – ngay cả trong thời gian sử dụng kéo dài – và cho phép bạn tận hưởng góc nhìn rộng với ít biến dạng và chuyển màu khi chơi game và xem phim</p><h3><strong>Tần số quét siêu nhanh 180Hz *</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/16-04-2022/screenshot_1650084156.png\"></p><p>Tốc độ làm mới ấn tượng 180Hz * giúp loại bỏ độ trễ và nhòe chuyển động để mang đến cho bạn ưu thế trong các tựa game bắn súng góc nhìn thứ nhất, đua xe, chiến lược thời gian thực và thể thao. Tốc độ làm mới cực nhanh này cho phép bạn chơi ở cài đặt hình ảnh cao nhất và phản ứng tức thì với những gì trên màn hình.</p><p>* Một số card đồ họa / GPU có thể hỗ trợ ngõ ra nguồn đồ họa 180Hz (thông qua DisplayPort). Xin lưu ý rằng chức năng / hiệu suất ép xung phụ thuộc vào GPU hoặc nội dung hiển thị. Hiệu suất thực tế trong thế giới thực phụ thuộc vào phần cứng.</p><h3><strong>Hình ảnh HDR sáng hơn</strong></h3><p>Ngoài ra tính năng DisplayHDR ™ 400 cung cấp độ tương phản mượt mà và tốt hơn giữa các vùng sáng nhất và tối nhất của màn hình. Nó cũng mang lại độ sáng tối đa ấn tượng là 400 nits để cho phép hình ảnh sáng hơn.</p><h3><strong>Kết nối phong phú</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/16-04-2022/xg349c_banner1.png\"></p><p>Tận hưởng các tùy chọn kết nối phong phú, bao gồm DisplayPort 1.4, HDMI (V2.0), với hai cổng Type-A 3.2 và một Type-C có công suất sạc 18w. Không thể thiếu giắc cắm tai nghe 3,5 mm để kết nối với nhiều loại thiết bị đa phương tiện.</p><p><br></p>',5,56,60,23399000,25399000,1,'Còn hàng','image-1697515933478.jpeg','image-1697515933478.jpeg,image-1697515936471.jpeg,image-1697515938744.jpeg,image-1697515943307.jpeg',4,0,1,1,1,2,1),(8,'MÀN HÌNH ASUS VY279HE (27INCH/FHD/IPS/75HZ/1MS)','<h2>Đánh giá: Màn hình Asus VY279HE (27inch/FHD/IPS/75Hz/1ms/250nits/HDMI+VGA+Audio/Freesync)</h2><h3><strong>Thiết kế không viền</strong></h3><p><br></p><p><a href=\"https://hacom.vn/man-hinh-may-tinh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">Màn hình</a>&nbsp;Asus VY279HE được thiết kế không khung viền giúp cho màn hình trở nên lí tưởng hơn với các cấu hình đa màn hình gần như liền mạch để bạn có được trải nghiệm xem đắm chìm.</p><p><img src=\"https://hanoicomputercdn.com/media/product/63853_man_hinh_asus_vy279he_4.jpg\"></p><h3><strong>Hình ảnh hiển thị vượt trội</strong></h3><p><br></p><p>Màn hình Asus VY279HE có tấm nền IPS 27 inch với độ phân giải Full HD (1920 x 1080), giúp mang lại góc nhìn rộng 178° và chất lượng hình ảnh sống động. Tầm nhìn rộng nhờ trang bị tấm nền IPS cùng góc xem rộng lên tới 178°, giảm thiểu sự thay đổi sắc màu, cho màu sắc đồng đều và chính xác tại bất kỳ góc xem nào để mang lại trải nghiệm xem tốt hơn.</p><p><img src=\"https://hanoicomputercdn.com/media/product/63854_man_hinh_asus_va229hr_5.jpg\"></p><h3><strong>Trải nghiệm xem sống động</strong></h3><p><br></p><p>Tốc độ làm mới lên đến 75Hz với công nghệ Adaptive-Sync/ FreeSync™ để loại bỏ bóng mờ và đảm bảo video phát lại được sắc nét và rõ ràng.</p><p>Công nghệ Adaptive-Sync/FreeSync™ giúp loại bỏ hiện tượng xé hình và tốc độ khung hình bị lag, mang đến cho bạn hình ảnh liền mạch và chơi game mượt mà. Màn hình văn phòng với công nghệ này sẽ mang lại cho bạn ưu thế trong các tựa game bắn súng góc nhìn thứ nhất, đua xe, chiến lược thời gian thực và thể thao.</p><h3><strong>Công nghệ độc quyền của Asus</strong></h3><p><br></p><p>Phím nóng GamePlus độc quyền của ASUS với các chức năng chỉnh hồng tâm Crosshair (chỉnh hồng tâm), Timer (hẹn giờ) và FPS counter (đếm số khung hình/giây) để mang đến cho bạn những lợi ích trong trò chơi giúp bạn trải nghiệm tối đa trò chơi của mình. Chức năng này được đồng phát triển với ý kiến đóng góp từ các game thủ chuyên nghiệp, cho phép họ luyện tập và nâng cao kỹ năng chơi game của mình.</p><p>&nbsp;</p><h3><strong>Bảo vệ đôi mắt bạn luôn khỏe mạnh</strong></h3><p><br></p><p>Công nghệ Blue Light Filter (Bộ lọc ánh sáng xanh) của ASUS được TÜV Rheinland chứng nhận bảo vệ bạn khỏi ánh sáng xanh có hại và bạn có thể dễ dàng truy cập bốn cài đặt bộ lọc thông qua một phím nóng. Màn hình Asus đã trải qua các thử nghiệm nghiêm ngặt và được chứng nhận bởi các phòng thí nghiệm của TÜV Rheinland - một nhà cung cấp toàn cầu các dịch vụ về kỹ thuật, an toàn và chứng nhận - là không bị nhấp nháy màn hình và có cấp độ ánh sáng xanh dương phát ra thấp.</p><p>Màn hình Asus trang bị công nghệ Flicker-free (Khử nhấp nháy) của ASUS đã được TÜV Rheinland chứng nhận để giảm hiện tượng nhấp nháy trên màn hình nhằm mang lại trải nghiệm xem thoải mái hơn. Công nghệ này giúp giảm thiểu các hiện tượng mỏi mắt và các bệnh gây tổn hại mắt khác đặc biệt là khi bạn xem các chương trình video ưa thích trong thời gian dài.</p><p><img src=\"https://hanoicomputercdn.com/media/product/63854_man_hinh_asus_va229hr_2.jpg\"></p>',7,76,80,3389000,4389000,1,'Còn hàng','image-1697516077624.jpeg','image-1697516077624.jpeg,image-1697516079992.jpeg,image-1697516082392.jpeg',4,0,1,1,1,2,2),(9,'LAPTOP APPLE MACBOOK AIR 13 (MGN93SA/A) (APPLE M1/8GB RAM/256GB SSD/13.3 INCH IPS/MAC OS/BẠC)','<h2>Đánh giá: Laptop Apple Macbook Air 13 (Z124000DE) (Apple M1/16GB RAM/256GB SSD/13.3 inch IPS/Mac OS/Xám)</h2><p><strong><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-1.jpeg\"></strong></p><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng liên hệ với các tư vấn viên để được trợ giúp.</em></p><p>Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn.</p><h3><strong>Thiết kế sang trọng, tinh tế</strong></h3><p>MacBook Air M1 2020 không những thừa hưởng thiết kế mỏng nhẹ, hiện đại của các thế hệ trước mà còn học hỏi thêm phong cách hiện đại của các dòng Macbook Pro. Trọng lượng máy chỉ vỏn vẹn 1.29 kg và mỏng của thân máy là 16.1 mm có tính cơ động cao, dễ đem theo xử lý công việc</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-2.jpeg\"></p><p>Vỏ máy được thiết kế nguyên khối từ nguyên liệu nhôm tái chế 100% vừa góp phần bảo vệ môi trường vừa cho độ bền cao, chịu va đập tốt bảo vệ các linh kiện bên trong an toàn nếu có xảy ra va chạm mạnh.</p><h3><strong>Chip Apple M1 tốc độ xử lý nhanh gấp 3.5 lần thế hệ trước</strong></h3><p>Chiếc MacBook này được trang bị con chip Apple M1 được sản xuất độc quyền bởi Nhà Táo trên tiến trình 5 nm, 8 lõi bao gồm 4 lõi tiết kiệm điện và 4 lõi hiệu suất cao, mang đến một hiệu năng kinh ngạc, xử lý mọi tác vụ văn phòng một cách mượt mà như Word, Excel, Powerpoint,... thực hiện tốt các nhiệm vụ chỉnh sửa hình ảnh, kết xuất 2D trên các phần mềm Photoshop, AI,... máy còn hỗ trợ tiết kiệm được điện năng cao.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-3.jpeg\"></p><p>Đi cùng CPU là card đồ họa tích hợp 7 nhân GPU có hiệu năng vượt trội sau nhiều bài thử nghiệm hiệu năng đồ họa của benchmark, bạn có thể sử dụng nhiều phần mềm đồ họa chuyên nghiệp, thoả sức sáng tạo nội dung, render video ổn định với chất lượng hình ảnh cao.</p><p>Máy được trang bị RAM 8/16gb cho khả năng đa nhiệm cao, bạn có thể mở cùng lúc nhiều cửa sổ hoặc ứng dụng để phục vụ cho công việc, giải trí của mình ví dụ như vừa mở Chrome tra cứu thông tin vừa mở Word để làm việc cực kỳ tiện lợi mà không cần lo lắng là máy sẽ bị đơ.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-4.jpeg\"></p><p>MacBook sở hữu ổ cứng SSD 256/512/1TB cho tốc độ xử lý nhanh chóng, thao tác cuộn trong Safari cực mượt, đánh thức máy đang trong chế độ ngủ chỉ mất vài giây và đem đến không gian lưu trữ rộng rãi bạn cứ thoải mái lưu lại những bộ phim hay mà không lo nó sẽ chiếm chỗ của các tệp tài liệu công việc.</p><p>Bên cạnh sử dụng con chip mới Apple còn ra mắt phiên bản hệ điều hành macOS Big Sur với giao diện hoàn hảo hơn, các chuyển động cuộn, phóng to và chuyển tiếp màn hình mượt mà. Ngoài đổi mới giao diện macOS Big Sur còn mang đến khả năng phản hồi nhanh chóng và kho ứng dụng khổng lồ.</p><h3><strong>Màu sắc chân thực, hình ảnh sắc nét&nbsp;</strong></h3><p>Laptop màn hình Retina 13.3 inch cao cấp cho hình ảnh sắc nét màu sắc tự nhiên. Kết hợp cùng công nghệ True Tone giúp điều chỉnh cân bằng sắc trắng cũng như độ sáng để màu sắc hình ảnh hiển thị chính xác nhất.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-5.jpeg\"></p><p>Ngoài ra, góc nhìn của máy cũng được mở rộng hơn nhờ có công nghệ IPS đem lại trải nghiệm nhìn đã mắt, dù bạn nhìn màn hình bằng góc nghiêng.</p><p>MacBook Air M1 được trang bị camera FaceTime HD giúp bạn gọi video cho người thân, bạn bè với chất lượng hiển thị cao. Tích hợp dãy 3 micro giúp truyền tải giọng nói của bạn chính xác hơn.&nbsp;</p><h3><strong>Bàn phím êm ái</strong></h3><p>Magic Keyboard có hành trình phím 1 mm mang lại trải nghiệm gõ nhạy, thoải mái và yên tĩnh, bàn phím còn được trang bị thêm đèn nền vừa tạo cảm giác sang trọng vừa hỗ trợ bạn gõ phím chính xác hơn trong môi trường thiếu sáng.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-9.jpeg\"></p><h3><strong>Bảo mật vân tay&nbsp;</strong></h3><p>Apple trang bị cho chiếc Macbook M1 này bảo mật vân tay giúp bạn mở khóa nhanh chóng chỉ với một cái chạm nhẹ. Bên cạnh đó, vân tay của bạn sẽ được tích hợp vào việc xác nhận thông tin khi mua sắm online hay truy cập vào các tài liệu có bảo mật mà không cần phải nhập mật khẩu cực kỳ tiện lợi.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-7.jpeg\"></p><h3><strong>Kết nối tốc độ cao Thunder Bolt 4</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-8.jpeg\"></p><p>Laptop được trang bị 2 cổng kết nối Thunderbolt 3 với tốc độ truyền tải lên đến 40 Gb/s cho tốc độ truyền tải nhanh gấp 2 lần so với thế hệ Thunderbolt 2 trước đây. Bên cạnh Thunderbolt 3 máy còn được trang bị thêm kết nối không dây là Wi-Fi 6 cho tốc độ truyền tải dữ liệu nhanh chóng lên đến 10.000 Mbps cao hơn Wi-Fi 5 chỉ có 7.000 Mbps và Bluetooth v5.0 có tốc độ tối đa là 50 Mbps cho bạn trải nghiệm mượt mà hơn.</p><h3><strong>Khả năng nâng cấp</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/06-07-2022/hacom-macbook-air-m1-10.jpg\"></p><p>Laptop Apple MacBook Air M1 2020 với hiệu năng mạnh mẽ đáp ứng tốt mọi công việc, thiết kế cực mỏng sẽ là sự lựa chọn tuyệt vời dành cho bạn. Theo dõi&nbsp;<a href=\"https://www.hanoicomputer.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">HACOM&nbsp;</a>nhiều hơn để cập nhật thêm nhiều bài viết hay ho hơn nữa! Hãy gọi ngay hotline 1900.1903 nếu có bất cứ câu hỏi hay thắc mắc nào mà các bạn cần giải đáp để được đội ngũ tư vấn viên trợ giúp&nbsp;nhé!</p>',7,200,200,30009000,31009000,1,'Còn hàng','image-1697516313754.jpeg','image-1697516313754.jpeg,image-1697516317431.jpeg,image-1697516320759.jpeg,image-1697516324453.jpeg',0,0,1,2,1,3,1),(10,'LAPTOP ASUS VIVOBOOK X1504VA-NJ070W (I5 1335U/16GB RAM/512GB SSD/15.6 FHD/WIN11/XANH)','<p>Thông số sản phẩm</p><ul><li>CPU : Intel® Core™ i5-1335U</li><li>Ram : 8GB DDR4 on board + 8GB DDR4 SO-DIMM</li><li>Ổ cứng : SSD 512GB M.2 NVMe™ PCIe® 3.0</li><li>VGA : Intel® Iris® Xe Graphics</li><li>Màn hình : 15.6\" Full HD,60Hz,250nits, 45% NTSC</li><li>Màu: Xanh</li><li>OS : Windows 11 Home</li></ul><p><br></p>',7,26,30,16299000,15999000,1,'Còn hàng','image-1697516460645.jpeg','image-1697516460645.jpeg,image-1697516466553.jpeg,image-1697516476074.jpeg',4,0,1,2,1,2,2),(11,'LAPTOP MSI MODERN 14 (C11M-011VN) (I3 1115G4/8GB RAM/512GB SSD/14.0 INCH FHD/WIN11/ĐEN)','<h2>Đánh giá: Laptop MSI Modern 14 (C11M-011VN) (i3 1115G4/8GB RAM/512GB SSD/14.0 inch FHD/Win11/Đen)</h2><p><strong><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-0.jpeg\"></strong></p><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng liên hệ với các tư vấn viên để được trợ giúp.</em></p><p>Laptop MSI Modern 14 là phiên bản&nbsp;<a href=\"https://hacom.vn/laptop-van-phong\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">laptop văn phòng</a>&nbsp;được nhà MSI cho ra mắt với sứ mệnh phục vụ tốt mọi tác vụ thiết yếu cơ bản hằng ngày của người dùng khi sở hữu cấu hình ổn định đến từ con chip Intel Gen 11 cùng ngoại hình trang nhã, thời thượng và mang tính di động cao.</p><h3><strong>Thu hút mọi ánh nhìn với lối thiết kế sang trọng</strong></h3><p>Lớp vỏ kim loại bền chắc có gam màu xám chủ đạo đã toát lên vẻ sang trọng và thời thượng cho laptop MSI Modern, giúp cho chủ nhân sở hữu nó nổi bật hơn hẳn dù làm việc trong văn phòng hay những quán cafe đông người. Độ linh hoạt được hoàn thiện đáng kể khi máy sở hữu trọng lượng chỉ vỏn vẹn 1.3 kg, cho phép bạn di chuyển đến bất cứ mọi không gian bạn muốn mà không lo cồng kềnh, nặng nhọc. Chính vì có trọng lượng siêu nhẹ này, đây là mẫu&nbsp;<a href=\"https://hacom.vn/laptop-cho-nu-van-phong-nen-mua-loai-nao\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">laptop dành cho nữ văn phòng</a>&nbsp;được rất nhiều người lựa chọn.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-5.jpeg\"></p><p>Máy đạt độ bền chuẩn quân đội MIL STD 810G với hàng loạt bài kiểm tra khắt khe từ độ rung, nhiệt độ, độ ẩm, bụi bẩn,... cho phép người dùng yên tâm sử dụng trong một khoảng thời gian dài với độ bền ấn tượng, hạn chế tối đa các va đập không mong muốn xảy ra hằng ngày.</p><h3><strong>Hiệu năng đủ tốt để đáp ứng các tác vụ thông thường</strong></h3><p>Bộ vi xử lý Intel Core i thế hệ 11 đạt tốc độ xung nhịp tối thiểu 3.0 GHz giúp bạn giải quyết nhẹ nhàng các tác vụ cơ bản trên Word, Excel, PowerPoint,... hay những nhu cầu giải trí cơ bản như lướt web, xem phim, nghe nhạc,... và có thể ép xung tối đa lên đến 4.1 GHz Turbo Boost để tối ưu hiệu năng làm việc hơn cho máy.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-6.jpeg\"></p><p>Chỉnh sửa hình ảnh, thiết kế kết xuất 2D đơn giản một cách hiệu quả trên Photoshop, Figma,... các chuyển động video cũng trở nên mượt mà hơn nhờ card đồ họa tích hợp Intel UHD Graphics.</p><p>RAM chuẩn DDR4 2 khe có tốc độ Bus RAM 3200 MHz mang đến khả năng xử lý công việc vượt trội với độ đa nhiệm ấn tượng, nâng cao hiệu suất làm việc khi cho phép bạn vừa soạn thảo vừa tra cứu thông tin trên mạng, song song đó là hỗ trợ nâng cấp tối đa 64 GB đáp ứng tối ưu mọi nhu cầu cần thiết cho người dùng.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-1.jpeg\"></p><p>Không gian lưu trữ vừa đủ để bạn tải các tệp tin hay ứng dụng cần thiết về máy để phục vụ cho công việc nhờ ổ cứng SSD NVMe PCIe, có thể linh hoạt tháo ra và lắp thanh khác tối đa 2 TB, bên cạnh đó còn rút ngắn thời gian khởi động máy và ứng dụng chỉ trong vài giây đồng thời tiết kiệm nguồn điện năng đáng kể hơn so với các thế hệ trước.&nbsp;</p><h3><strong>Thư giãn hơn với âm thanh, hình ảnh sinh động như thật</strong></h3><p>Laptop màn hình 14 inch có tấm nền IPS tiên tiến mang đến cho bạn góc nhìn rộng lên đến 178 độ, quan sát bao quát toàn bộ khung hình để không phải bỏ lỡ bất kỳ chi tiết nào, kết hợp với độ phân giải Full HD (1920 x 1080) cung cấp các mảng màu sắc tươi tắn, rõ nét, mãn nhãn người xem với những thước phim chân thực nhất dù bạn nhìn trực diện hay nhìn nghiêng.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-3.jpeg\"></p><p>Lượng ánh sáng được cung cấp đầy đủ để phục vụ cho các nhu cầu làm việc và giải trí trên máy nhờ tần số quét 60 Hz và độ sáng 250 nits, hiển thị rõ nét từng nội dung trên màn hình dù bạn làm việc trong nhà hay ngoài trời nắng. Bên cạnh đó, màn hình chống chói Anti Glare hạn chế tối đa hiện tượng chói sáng ở những nơi có cường độ mạnh và gắt.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-4.jpeg\"></p><p>Sự kết hợp gần như là hoàn hảo giữa công nghệ Hi-Res Audio và hệ thống vòm Nahimic Audio 3D cho chất âm to rõ, xuất phát từ nhiều hướng khác nhau tạo nên những nốt thăng trầm sinh động nhất, cải thiện chất âm vượt trội với độ chuẩn xác cao đến từng chi tiết, đắm chìm người nghe vào nhưng tình khúc du dương hay những bộ phim gây cấn.</p><h3><strong>Trải nghiệm phím êm ái</strong></h3><p>Tiết diện phím rộng rãi với thiết kế tràn gần sát cạnh máy, mang đến cho bạn khoảng cách gõ phím thoải mái hơn mà không bị vướng víu, kết hợp cùng hành trình sâu và đèn nền đặc sắc, giúp tăng thêm hứng thú làm việc cho người dùng với tốc độ gõ phím nhanh chóng nhưng không tạo ra tiếng ồn xung quanh đồng thời soạn thảo chuẩn xác từng vị trí phím ngay cả khi bạn làm việc trong môi trường thiếu sáng.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-2.jpeg\"></p><h3><strong>Kết nối đa dạng</strong></h3><p>Các thông tin và dữ liệu được truyền tải nhanh chóng và dễ dàng hơn đến các thiết bị ngoại vi tương thích như loa, chuột, máy chiếu,... mà không cần dùng cáp chuyển đổi phức tạp nhờ trang bị các cổng kết nối phổ biến dọc 2 bên laptop bao gồm 2 cổng USB 3.2, HDMI, Jack tai nghe 3.5 mm và USB Type-C.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-02-2023/hacom-msi-modern-14-b11-7.jpeg\"></p><p>Chuẩn Bluetooth 5.1 và Wi-Fi 6 (802.11ax) cho hiệu suất đường truyền được cải thiện vượt trội với băng thông hoạt động lên đến 10.000 Mbps, giúp quá trình làm việc trực tuyến của bạn trở nên suôn sẻ hơn trên các nền tảng Zoom, Ms Team, Google Meet,... ngoài ra còn cung cấp chất lượng hình ảnh sắc nét hơn cho các cuộc gọi video nhờ Webcam HD được trang bị trên laptop MSI.&nbsp;</p><p>Nhìn chung, MSI Modern 14 không hề kém cạnh bất cứ một đối thủ nào trong cùng phân khúc với lối thiết kế thời thượng, hiện đại cùng cấu hình ổn định và mức giá vô cùng hợp lý, sẽ là một trợ thủ đắc lực cho mọi nhu cầu thiết yếu của người dùng.&nbsp;<em>&nbsp;</em></p><p>Theo dõi&nbsp;<a href=\"https://www.hanoicomputer.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">HACOM&nbsp;</a>nhiều hơn để cập nhật thêm nhiều bài viết hay ho hơn nữa! Hãy gọi ngay hotline 1900.1903 nếu có bất cứ câu hỏi hay thắc mắc nào mà các bạn cần giải đáp để được đội ngũ tư vấn viên trợ giúp&nbsp;nhé!</p>',7,49,50,10199000,9999000,1,'Còn hàng','image-1697516682225.jpeg','image-1697516682225.jpeg,image-1697516686116.png,image-1697516689486.png,image-1697516692929.png',1,0,1,2,1,4,1),(12,'LAPTOP APPLE MACBOOK AIR (MLXY3SA/A) (APPLE M2/8C CPU/8C GPU/8GB RAM/256GB SSD/13.6 INCH IPS/MAC OS/BẠC) (2022)','<h2>Đánh giá: Laptop Apple Macbook Air (MLXY3SA/A) (Apple M2/8C CPU/8C GPU/8GB RAM/256GB SSD/13.6 inch IPS/Mac OS/Bạc) (2022)</h2><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng liên hệ với các tư vấn viên để được trợ giúp.</em></p><p><a href=\"https://hacom.vn/apple-macbook-air-mlxx3sa-a-apple-m2-8c-cpu-10c-gpu-8gb-ram-512gb-ssd-13.6-inch-mac-os-xam-2022\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">Siêu phẩm MacBook Air M2</a>&nbsp;được trình làng vào giữa năm 2022 một lần nữa đã khẳng định vị thế của Apple trong phân khúc laptop cao cấp - sang trọng, đánh bật mọi rào cản với con chip Apple M2 đầy mạnh mẽ cùng lối thiết kế lịch lãm, thời thượng đặc trưng cùng thời lượng pin lên đến 18 giờ ấn tượng.&nbsp;</p><h2><strong>Lột xác ngoạn mục với thiết kế thời thượng, sang trọng&nbsp;</strong></h2><p>Sự đẳng cấp đến từ ngoại hình của nhà Apple là điều không thể phủ nhận và khó có dòng sản phẩm cùng phân khúc nào có thể qua mặt được. Vẫn là lớp vỏ kim loại nguyên khối cứng cáp cùng các cạnh góc vuông vức, sang trọng nhưng chiếc MacBook Air 2022 năm nay đã thoát ra khỏi ngôn ngữ thiết kế nhẹ nhàng vốn có từ rất lâu và khoác lên diện mạo mới tương tự như “đàn anh” MacBook Pro.</p><p>Bề dày 11.3 mm cùng cân nặng ấn tượng 1.24 kg sẽ là một điểm cộng hoàn hảo cho khả năng di động của máy, luôn sẵn sàng đồng hành cùng sinh viên, dân văn phòng đến trường học, công ty hay khám phá các cuộc phiêu lưu cùng người dùng sáng tạo và đặc biệt là những chuyến công tác xa của doanh nhân.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-1.jpg\"></p><p>Một sự thay đổi rõ rệt trên chiếc bàn phím Magic Key của dòng laptop Apple M2 năm nay chính là kích thước của hàng phím chức năng F được gia tăng bằng với các dòng phím khác, cho thao tác sử dụng chuẩn xác, không bị nhầm lẫn. Trải nghiệm gõ phím nhẹ nhàng, êm tay kết hợp cùng đèn nền hỗ trợ người dùng làm việc dễ dàng trong môi trường thiếu sáng.&nbsp;</p><p>Tính năng cảm biến vân tay tích hợp nút nguồn mang đến khả năng mở khóa máy và truy cập các ứng dụng khác một cách nhanh chóng, không cần tốn nhiều thời gian hay phải nhớ mật khẩu như các kiểu bảo mật truyền thống.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-2.jpg\"></p><p>Các cổng giao tiếp hữu dụng như Jack tai nghe 3.5 mm, 2 cổng Thunderbolt 3 hỗ trợ truyền xuất dữ liệu với tốc độ lên đến 40 Gbps cùng sạc nam châm MagSafe 3 với thiết kế nhỏ nhắn, cho khả năng sạc pin nhanh chóng mà không cần sử dụng đến các dây cáp dài rườm rà, đồng thời còn tôn thêm vẻ đẹp tối giản của máy.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-3.jpg\"></p><h2><strong>Phá vỡ mọi giới hạn nhờ sức mạnh đến từ con Apple M2</strong></h2><p>Sự xuất hiện của chip Apple M2 tuy có mặt cấu tạo tương đồng với chip M1 nhưng hiệu suất hoạt động hứa hẹn cao hơn 18% và nhanh hơn 1.9 lần so với chip của các dòng laptop 10 lõi khác, đích thực là nguồn sức mạnh tiềm năng cho mọi tác vụ từ học tập, làm việc đến đồ họa, kỹ thuật chuyên sâu.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-4.jpg\"></p><p>Theo công bố của hãng, card đồ họa GPU 8 nhân cho khả năng hoạt động mạnh mẽ hơn 35% so với dòng chip M1, xử lý lên đến 15.8 nghìn tỷ tác vụ trong 1 giây nên các công việc liên quan đến hình ảnh, đồ họa, video,... đều được giải quyết rất mượt mà.</p><p>Có 3 tùy chọn về RAM là 8/16/24 GB cho phép người dùng sử dụng cùng lúc nhiều cửa sổ ứng dụng khác nhau với độ đa nhiệm mượt mà đáng kể, vừa làm việc trên Photoshop vừa nghe nhạc vẫn rất trơn tru. Đi kèm theo đó là 3 lựa chọn về SSD 256/512/1TB GB mang đến khả năng lưu trữ vừa đủ các tài liệu, ứng dụng học tập đồng thời tăng tốc độ đọc ghi cho máy.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-5-.jpg\"></p><p>Đặc biệt hơn hết, sức mạnh đến từ con chip Apple M2 cho phép bạn phát và chỉnh sửa nhiều luồng video 4K, 8K ProRes 12 ấn tượng, chưa bao giờ làm các tín đồ nhà Táo thất vọng với khả năng đáp ứng hoàn hảo các tác vụ liên quan đến đồ họa - kỹ thuật.</p><h2><strong>Trải nghiệm hình ảnh, âm thanh trên cả tuyệt vời&nbsp;</strong></h2><p>Độ phân giải Liquid Retina (2560 x 1664) cùng chiếc màn hình 13.6 inch viền mỏng đắm chìm bạn vào không gian giải trí sống động trên từng khung hình, lý tưởng hóa mọi nội dung hiển thị từ học tập, làm việc cơ bản đến xem phim, thiết kế,... Độ sáng 500 nits hiển thị màu sắc rực rỡ ngay cả khi sử dụng laptop trong môi trường ánh sáng mạnh.</p><h3><strong><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-6.jpg\"></strong></h3><p>Sự kết hợp giữa dải màu rộng P3 cùng 1 tỷ màu tạo nên một bức tranh hoàn mỹ cho mọi trải nghiệm hình ảnh của người dùng với màu sắc sinh động và chuẩn xác trên từng vật thể nhỏ nhất. Công nghệ True Tone cho khả năng tự động điều chỉnh mức độ ánh sáng phù hợp với môi trường, giúp hình ảnh được tự nhiên hơn và giảm thiểu hiện tượng mỏi mắt.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-7.jpg\"></p><p>Hệ thống âm thanh của chiếc MacBook M2 là sự cộng hưởng giữa 4 Loa, Dolby Atmos và công nghệ Spatial Audio cho chất lượng âm đa chiều sống động, mang đến trải nghiệm xem phim, nghe nhạc đánh bật mọi đối thủ khác.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-8.jpg\"></p><p>Camera Facetime HD 1080p giúp quá trình học tập, làm việc trực tuyến hay gọi video diễn ra suôn sẻ với chất lượng hình ảnh rõ nét hơn, hạn chế tối đa tình trạng nhòe hay mờ hình.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-9.jpg\"></p><h2><strong>Apple silicon và macOS mang đến khả năng bảo mật nâng cao</strong></h2><p>Apple silicon là vi xử lý được thiết kế riêng trên tất cả các sản phẩm của Apple dưới một kiến trúc chung, tối ưu toàn bộ phần mềm trên hệ sinh thái Apple để sử dụng dễ dàng đồng thời khâu kiểm soát được quản lý chặt chẽ hơn mang đến khả năng bảo mật cực tốt. Tính năng bảo mật vân tay trên máy giúp vừa mở máy nhanh chóng vừa tăng cường độ an toàn cho dữ liệu cá nhân của bạn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/22-11-2022/apple-macbook-air-mly03sa-a-apple-m2-10.jpg\"></p><p>Hệ điều hành macOS độc quyền của nhà Apple cung cấp trình quản lý chính System Preferences với nhiều công cụ hiện đại được tích hợp, tăng cường độ bảo mật cho phép người dùng dễ dàng thiết lập, kiểm soát và tự quản lý máy tính của mình tốt hơn.&nbsp;&nbsp;</p><p>Tổng kết lại, chiếc MacBook Air M2 2022 chính là sự kết hợp hoàn hảo giữa phong cách thiết kế thời thượng, hiệu năng vượt trội cùng màn hình hiển thị sắc nét, sẽ là một cánh tay phải đắc lực cùng bạn đối đầu mọi thách thức.&nbsp;</p><p>Theo dõi&nbsp;<a href=\"https://www.hanoicomputer.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">HACOM&nbsp;</a>nhiều hơn để cập nhật thêm nhiều bài viết hay ho hơn nữa! Hãy gọi ngay hotline 1900.1903 nếu có bất cứ câu hỏi hay thắc mắc nào mà các bạn cần giải đáp để được đội ngũ tư vấn viên trợ giúp nhé!</p><p><span style=\"color: rgb(0, 90, 255); background-color: rgb(255, 255, 255);\">Thu gọn&nbsp;</span></p><p>Video: Laptop Apple Macbook Air (MLXY3SA/A) (Apple M2/8C CPU/8C GPU/8GB RAM/256GB SSD/13.6 inch IPS/Mac OS/Bạc) (2022)</p><p><br></p>',7,150,150,27099000,31499000,1,'Còn hàng','image-1697516900944.png','image-1697516900944.png,image-1697516903699.png,image-1697516905964.png,image-1697516908309.png',0,0,1,2,1,3,1),(13,'LAPTOP APPLE MACBOOK PRO 13 (Z16T0003V) (APPLE M2 /8C CPU/10C GPU/16GB RAM/256GB SSD/13.3 INCH/MAC OS/BẠC) (2022)','<h2>Đánh giá: Laptop Apple Macbook Pro 13 (Z16T0003V) (Apple M2 /8C CPU/10C GPU/16GB RAM/256GB SSD/13.3 inch/Mac OS/Bạc) (2022)</h2><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-1.jpg\"></p><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng liên hệ với các tư vấn viên để được trợ giúp.</em></p><p>Thiết kế thanh lịch, sang trọng cùng hiệu năng vượt trội đến từ vi xử lý tân tiến Apple M2 có trong Macbook Pro M2, hứa hẹn sẽ mang lại nhiều giá trị cho người dùng sáng tạo, phục vụ tốt nhu cầu thiết kế đồ hoạ nâng cao.</p><h3><strong>Thiết kế quyến rũ, biểu tượng cho sự hoàn mỹ thu hút mọi ánh nhìn</strong></h3><p>Macbook Pro được chế tác từ lớp vỏ kim loại nguyên khối toát lên vẻ đẹp của chiếc laptop cao cấp - sang trọng. Trọng lượng máy chỉ 1.4 kg và mỏng 15.6 mm đem đến sự cơ động cho bạn dễ dàng bỏ vào balo để mang theo bên mình.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-2.jpg\"></p><p>Ấn tượng trong thiết kế của Apple luôn là logo táo khuyết được đặt chính giữa mặt lưng, tạo nên sự nhận diện thương hiệu mà ai ai cũng phải ngước nhìn mỗi khi bạn cầm trên tay hay làm việc ngoài quán cà phê.</p><p><strong>Magic Keyboard</strong>&nbsp;được thiết kế tinh xảo, đẹp mắt, độ nảy ổn định luôn mang đến sự yên tĩnh và thoải mái cho người dùng mỗi khi soạn thảo văn bản. Đèn nền bàn phím được tích hợp trên máy giúp bạn thao tác dễ dàng trong môi trường thiếu sáng, nâng cao trải nghiệm cho người dùng.</p><p><strong>Touch Bar (thanh cảm ứng)&nbsp;</strong>vẫn được tích hợp trên máy như thế hệ Macbook Pro trước tạo nên sự thuận tiện cho bạn khi cần sử dụng để điều chỉnh với nhiều ứng dụng khác nhau như: kéo tua video trên thanh cảm ứng, chụp màn hình, điều chỉnh âm lượng,...</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-3.jpg\"></p><h3><strong>Hiệu năng vượt trội của dòng chip thế hệ mới</strong></h3><p>Laptop Apple Macbook sở hữu CPU Apple M2 với 8 nhân CPU và 10 nhân GPU mang lại một sức mạnh đột phá, hỗ trợ người dùng chạy mượt mà các tác vụ của một chiếc laptop đồ họa - kỹ thuật như thiết kế, chỉnh ảnh hay render video trên các phần mềm của Adobe như: Photoshop, Premiere,...&nbsp;</p><p>RAM 8/16/24 GB đem đến cho người dùng khả năng đa nhiệm mượt mà các tác vụ như lướt web, đọc báo, chỉnh sửa ảnh Photoshop cùng lúc mà vẫn hạn chế xảy ra tình trạng đứng máy hay phản hồi chậm.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-4-.jpg\"></p><p>Ổ cứng SSD 256GB/512GB/1TB mang đến không gian lưu trữ đủ dùng cho các tác vụ văn phòng, thiết kế,... đồng thời tối ưu khả năng khởi động máy hay truy cập ứng dụng nhanh chóng.</p><h3><strong>Thao tác nhanh hơn với bộ đôi chip M2 và MacOS</strong></h3><p>Chiếc MacBook M2 được các tín đồ công nghệ đánh giá cao khi sản xuất trên tiến trình 5 nm với 20 tỷ bóng bán dẫn, nhiều hơn 25% so với M1 điều này giúp chiếc máy vận hành trơn tru nhưng tiết kiệm điện năng hơn. Bộ điều khiển cung cấp băng thông bộ nhớ hợp nhất 100 GB/giây, nhiều hơn 50% so với thế hệ tiền nhiệm giúp máy truyền ghi dữ liệu nhanh chóng hơn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-5.jpg\"></p><p>Hệ điều hành macOS phát triển và phân phối độc quyền bởi Apple được thiết kế với giao diện đẹp mắt, dễ dùng cùng kho ứng dụng đồ sộ mang đến sự tiện lợi tối đa cho mọi công việc, học tập của bạn, đồng thời giúp cho khả năng hoạt động mượt mà hơn đáng kể.</p><h3><strong>Màn hình Retina kết hợp công nghệ True Tone mang lại hình ảnh sống động, lôi cuốn</strong></h3><p>Laptop sở hữu màn hình 13.3 inch cùng độ phân giải Retina (2560 x 1600) sắc nét, màu sắc trung thực. Độ tương phản cao nhờ độ sáng 500 nits, công nghệ màn hình IPS đem lại khả năng hiển thị rõ ràng dù thay đổi vị trí nhìn ở bất kì đâu.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-6.jpg\"></p><p>Công nghệ True tone, Wide color (P3) như một lời khẳng định của Apple mang đến màu sắc hiển thị chính xác tối ưu khả năng làm việc cho người dùng thiết kế sáng tạo. Các công nghệ đó được kết hợp với nhau tạo nên một không gian giải trí để xem phim Youtube, Netflix,... sống động hơn bao giờ hết.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-7.jpg\"></p><h3><strong>Macbook Pro M2 một studio thu nhỏ trong tầm tay</strong></h3><p>Không gian giải trí của các sản phẩm nhà Apple chưa bao giờ làm người dùng thất vọng khi sở hữu loa kép (2 kênh) cùng công nghệ Wide Stereo và Dolby Atmos, mang đến chất lượng âm thanh trên cả tuyệt vời, đắm chìm người dùng vào những bản nhạc du dương lan tỏa khắp căn phòng.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-8.jpg\"></p><p>Máy được tích hợp 720p FaceTime Camera cho khả năng hiển thị sắc nét giúp bạn luôn tươi tắn trong mọi buổi họp hay lớp học trực tuyến. 3 microphones cho phép người dùng thu tiếng tốt hơn, không bị rè, khử tiếng ồn tốt và mang lại sự ổn định khi giao tiếp, hỗ trợ cho quá trình học tập trực tuyến hay gọi điện video tiện lợi hơn.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-9.jpg\"></p><p>Tự hào là doanh nghiệp đứng đầu trong khả năng bảo mật và riêng tư với tính năng bảo mật vân tay tích hợp phím nguồn ngang với thanh cảm ứng Touch Bar trên máy, giúp người dùng khởi động máy nhanh chóng hơn kiểu nhập mật khẩu truyền thống đồng thời đảm bảo tối đa khả năng bảo mật dữ liệu cá nhân của người dùng.</p><h3><strong>Kết nối siêu nhanh</strong></h3><p>Laptop trang bị 2 cổng Thunderbolt 3 được tích hợp sạc pin, truyền dữ liệu nhanh chóng với băng thông 40 Gbps và Jack tai nghe 3.5 mm, phù hợp với nhiều loại tai nghe phổ biến trên thị trường.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-10.jpg\"></p><p>Đảm bảo cho tốc độ truyền tải mượt mà hơn trên mọi tác vụ mà không lo gián đoạn giữa chừng khi bạn làm việc nhờ Wi-Fi 6 (802.11ax) có băng thông tăng 40% so với thế hệ tiền nhiệm.</p><h3><strong>Khả năng nâng cấp</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/20-08-2022/hacom-macbook-pro-13-m2-11.jpg\"></p><p>Tổng kết lại, laptop&nbsp;MacBook Pro M2&nbsp;2022 sẽ đem đến cho người dùng sự cộng hưởng trong thiết kế đẳng cấp và hiệu năng vượt trội. Tất cả tính năng tân tiến sẽ được Apple áp dụng, phục vụ tối ưu nhất cho công việc sáng tạo thiết kế đồ họa nâng cao trong chiếc laptop mỏng nhẹ.</p><p>Theo dõi&nbsp;<a href=\"https://www.hanoicomputer.vn/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">HACOM&nbsp;</a>nhiều hơn để cập nhật thêm nhiều bài viết hay ho hơn nữa! Hãy gọi ngay hotline 1900.1903 nếu có bất cứ câu hỏi hay thắc mắc nào mà các bạn cần giải đáp để được đội ngũ tư vấn viên trợ giúp&nbsp;nhé!</p><p><br></p>',7,157,160,35999000,39999000,1,'Còn hàng','image-1697517092126.png','image-1697517092126.png,image-1697517094837.png,image-1697517096969.png,image-1697517101185.png',3,0,1,2,1,3,1),(14,'LAPTOP MSI MODERN 15 (B13M-438VN) (I5 1335U /8GB RAM/512GB SSD/15.6 INCH FHD/WIN11/ĐEN)','<p>Thông số sản phẩm</p><ul><li>CPU: Intel i5 1335U</li><li>RAM: 8GB DDR4 3200 MHz ( Tối đa 16GB )</li><li>Ổ cứng: 512 GB SSD NVMe PCIe 2280</li><li>VGA: Intel Iris Xe</li><li>Màn hình: 15.6\"Full HD (1920 x 1080)</li><li>Vỏ : Nhựa</li><li>Màu: Xám</li><li>OS: Windows 11 Home</li></ul><p><br></p>',7,47,50,17199000,19199000,1,'Còn hàng','image-1697517240175.jpeg','image-1697517240175.jpeg,image-1697517242786.jpeg,image-1697517245067.jpeg,image-1697517247826.jpeg',3,0,1,2,1,4,1),(15,'LAPTOP MSI MODERN 15 (B7M-099VN) (R5 7530U/8GB RAM/512GB SSD/15.6 INCH FHD/WIN11/ĐEN)','<p>Thông số sản phẩm</p><ul><li>CPU: Intel® Core ™ i7-1360P (Up to 5.00 GHz, 18MB)</li><li>RAM: 16GB</li><li>Ổ cứng: 1TB NVMe PCIe SSD</li><li>VGA: Intel Iris Xe Graphics</li><li>Màn hình: 13.3 FHD (1920x1080) IPS</li><li>Tính năng: Đèn bàn phím</li><li>Màu sắc: Bạc</li><li>OS: Windows 11 Home</li></ul><p>BỘ QUÀ TẶNG TRỊ GIÁ 3.297.000Đ</p><ul><li>Chuột MSI trị giá&nbsp;<strong style=\"color: red;\">499.000đ</strong>&nbsp;(MEMS039) (số lượng có hạn)</li><li>Tai nghe gaming MSI H991 trị giá 999.000đ (TNMS012) (số lượng có hạn).</li><li>Túi MSI Prestige trị giá&nbsp;<strong style=\"color: red;\">799.000đ</strong>&nbsp;(Tặng kèm trong hộp máy)</li><li>Tặng phiếu vệ sinh bảo dưỡng Laptop, PC miễn phí trọn đời trị giá 999.000đ (THEK417)</li></ul><p>ƯU ĐÃI HẤP DẪN MUA KÈM LAPTOP</p><ul><li>Giảm ngay 50.000đ khi mua Balo, Cặp, Túi chống sốc cao cấp thương hiệu WIWU</li><li>Giảm ngay 100.000đ khi mua Ram Laptop thương hiệu KINGSTON, LEXAR</li><li>Giảm ngay 200.000đ khi mua Ghế công thái học thương hiệu LEGION</li></ul><p><br></p><p><br></p>',7,149,150,12299000,11999000,1,'Còn hàng','image-1697517565884.jpeg','image-1697517565884.jpeg,image-1697517568531.jpeg,image-1697517570974.png,image-1697517573411.png',1,0,1,2,1,4,1),(16,'LAPTOP ACER SWIFT 3 SUPER SF314-71-74WD (NX.KAWSV.001) (I7-12700H/16GB RAM/1TB SSD/14.0 INCH 2.8K OLED/WIN11/VÀNG/VỎ NHÔM)','<p>Thông số sản phẩm</p><ul><li>CPU: Intel® Core™ i7-12700H</li><li>RAM: 16GB onboard (không nâng cấp được)</li><li>Ổ cứng: 1TB PCIe NVMe</li><li>VGA: Intel® Iris® Xe Graphics</li><li>Màn hình: 14inch WQ2.8K (2880x1800) OLED Adobe 100%, 90Hz</li><li>Màu sắc: Gold</li><li>Tính năng: bảo mật vân tay</li><li>OS: Windows 11 Home</li></ul><p><br></p>',7,48,50,33499000,35499000,1,'Còn hàng','image-1697517698140.png','image-1697517698140.png,image-1697517700676.png,image-1697517708105.png,image-1697517711234.png',2,0,1,2,1,2,2),(17,'MÀN HÌNH SAMSUNG LS27C330GAEXXV (27 INCH/FHD/IPS/100HZ/4MS)','<h2>Đánh giá: Màn hình Samsung LS27C330GAEXXV (27 inch/FHD/IPS/100Hz/4ms)</h2><p><strong>Lưu ý:&nbsp;</strong><em>Bài viết và hình ảnh chỉ có tính chất tham khảo vì cấu hình và đặc tính sản phẩm có thể thay đổi theo thị trường và từng phiên bản. Quý khách cần cấu hình cụ thể vui lòng xem bảng thông số kĩ thuật hoặc hỏi kinh doanh trước khi mua.&nbsp;</em></p><h3><a href=\"https://hacom.vn/man-hinh-samsung-ls27c330gaexxv-27-inch-fhd-ips-100hz-4ms\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\"><strong>Màn hình Samsung LS27C330</strong></a><strong>&nbsp;giúp làm việc hiệu quả, mắt luôn thoải mái. Màn trang bị tấm nền IPS giúp nâng cao trải nghiệm hiển thị. Góc nhìn rộng 178° và chất lượng hình ảnh sống động. Tăng trải nghiệm giải trí liền mạch với công nghệ AMD FreeSync. Tần số quét 100Hz tạo nên khác biệt với những thế hệ màn văn phòng đời trước.</strong></h3><p><img src=\"https://hanoicomputercdn.com/media/lib/05-09-2023/man-hinh-samsung-ls27c330_mota1a.jpg\"></p><h3><strong>Thiết kế, kiểu dáng</strong></h3><p>Màn hình Samsung LS27C330 có trọng lượng tổng thể&nbsp;<strong>3.6 kg</strong>&nbsp;cùng kích thước rộng&nbsp;<strong>61.1 cm</strong>, cao&nbsp;<strong>46.2 cm</strong>&nbsp;. Dù chân đế được cấu thành từ nhựa nhưng vẫn tỏ rõ sự cứng cáp thiết kế gọn nhẹ, mang đến sự di động cho phép bạn di chuyển đến bất kỳ vị trí nào trên bàn làm việc hay bàn học một cách dễ dàng.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/05-09-2023/man-hinh-samsung-ls27c330_mota2.jpg\"></p><p>Chân đế chỉ dừng lại ở các chế độ ngả nghiêng cơ bản, vẫn có thể mang tới cảm giác trải nghiệm trọn vẹn. Mặt sau hỗ trợ ngàm<a href=\"https://hacom.vn/gia-treo-man-hinh\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(0, 90, 255);\">&nbsp;treo màn hình</a>&nbsp;tiêu chuẩn VESA 100x100mm, giúp màn hình linh hoạt trong việc tối ưu không gian sử dụng.</p><h3><strong>Hình ảnh chân thực, sắc nét</strong></h3><p>Kích thước màn hình rộng 27 inch cùng độ phân giải Full HD (1920 x 1080) sắc nét. Hỗ trợ 16.7 triệu màu giúp màu sắc của hình ảnh tái tạo lại một cách chân thực. Góc nhìn rộng 178 độ dọc và 178 độ ngang nhờ vào tấm nền IPS hiện đại, cho phép hình ảnh hiển thị rõ nét, chân thật ở mọi góc nhìn.&nbsp;</p><p><img src=\"https://hanoicomputercdn.com/media/lib/05-09-2023/man-hinh-samsung-ls27c330_mota3a.jpg\"></p><p>Tần số quét<strong>&nbsp;100 Hz</strong>&nbsp;cùng thời gian phản hồi&nbsp;<strong>4ms</strong>&nbsp;cung cấp những chuyển động hình ảnh mượt mà với tốc độ phản hồi nhanh chóng, cho phép bạn làm việc trên các ứng dụng đồ họa hay giải trí, xem phim mà ít xảy ra hiện tượng xé hình hay bóng mờ. Độ sáng&nbsp;<strong>250 nits</strong>&nbsp;cung cấp đủ lượng ánh sáng để người dùng xử lý tốt mọi công việc văn phòng cơ bản hay đồ họa nâng cao,&nbsp;chất lượng hình ảnh luôn ổn định ở&nbsp;mọi môi trường ánh sáng khác nhau.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/05-09-2023/man-hinh-samsung-ls24c330_mota4.jpg\"></p><h3><strong>Công nghệ bảo vệ mắt</strong></h3><p>Công nghệ<strong>&nbsp;Lọc ánh sáng xanh&nbsp;</strong>làm giảm các thành phần ánh sáng màu xanh phát ra từ màn hình, bảo vệ thị lực của bạn trước những luồng&nbsp;ánh sáng mạnh đồng thời làm giảm tình trạng mệt mỏi hay khô mắt khi phải làm việc quá lâu với màn hình&nbsp;máy tính.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/30-08-2023/man-hinh-asus-va24ehf_5.png\"></p><h3><strong>Kết nối tối giản</strong></h3><p>Hỗ trợ các kết nối đa dạng bao gồm HDMI, DisplayPort. Với những tính năng và thiết kế tiện dụng, màn hình Samsung LS27C330 là một lựa chọn tốt cho những người sử dụng cần một sản phẩm màn hình chất lượng với mức giá phải chăng.</p><p><img src=\"https://hanoicomputercdn.com/media/lib/05-09-2023/man-hinh-samsung-ls24c330_mota5.jpg\"></p>',4,20,20,3499000,4499000,5,'Còn hàng','image-1697691835394.jpeg','image-1697691835394.jpeg,image-1697691837725.jpeg,image-1697691840477.jpeg,image-1697691843140.jpeg',0,0,1,1,1,1,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Quản trị viên','admin','$2b$10$FMz3k8eYVMGE0nH2HaNAcu7uVhTyoQvYKNwWwdneVCZKtFX6jiyRa',NULL,NULL,'admin@gmail.com','0123456789','Chưa cập nhật',1,0,0,1,'2023-03-30 16:02:46',NULL,1),(2,'user1','user1','$2b$10$goWIm0vJ8jIVgwqWCY0X9urKcAKD/nx4X5flZNHsB9eiOUYzsw1Sq',NULL,NULL,'user1@gmail.com','0523164849','Chưa cập nhật',1,0,0,2,'2023-10-17 12:11:52',NULL,2);
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

-- Dump completed on 2023-10-19 13:57:31
