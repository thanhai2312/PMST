/*
SQLyog Enterprise - MySQL GUI v7.02 
MySQL - 5.5.32 : Database - pmst
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`pmst` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `pmst`;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `cate_id` int(10) NOT NULL AUTO_INCREMENT,
  `cate_title` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`cate_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `category` */

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `cm_id` int(10) NOT NULL AUTO_INCREMENT,
  `message` text CHARACTER SET utf8,
  `time` datetime DEFAULT NULL,
  `cm_check` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `new_id` int(10) DEFAULT NULL,
  `user_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`cm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `comment` */

/*Table structure for table `new` */

DROP TABLE IF EXISTS `new`;

CREATE TABLE `new` (
  `new_id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `image` text CHARACTER SET utf8,
  `introduce` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `content` text CHARACTER SET utf8,
  `cate_id` int(11) NOT NULL,
  PRIMARY KEY (`new_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `new` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `level` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `user` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
