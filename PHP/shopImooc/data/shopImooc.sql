/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : shopimooc

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 07/09/2019 21:51:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE `shopimooc` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `shopimooc`;

-- ----------------------------
-- Table structure for imooc_admin
-- ----------------------------
DROP TABLE IF EXISTS `imooc_admin`;
CREATE TABLE `imooc_admin`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imooc_admin
-- ----------------------------
INSERT INTO `imooc_admin` VALUES (1, 'admin', '123456', 'chentian.ct@qq.com');

-- ----------------------------
-- Table structure for imooc_album
-- ----------------------------
DROP TABLE IF EXISTS `imooc_album`;
CREATE TABLE `imooc_album`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Pid` mediumint(8) UNSIGNED NOT NULL,
  `albumPath` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for imooc_cate
-- ----------------------------
DROP TABLE IF EXISTS `imooc_cate`;
CREATE TABLE `imooc_cate`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cName` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `cName`(`cName`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for imooc_pro
-- ----------------------------
DROP TABLE IF EXISTS `imooc_pro`;
CREATE TABLE `imooc_pro`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cId` int(10) UNSIGNED NOT NULL,
  `pSn` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pNum` int(10) UNSIGNED NULL DEFAULT 1,
  `mPrice` decimal(10, 2) NOT NULL,
  `iPrice` decimal(10, 2) NOT NULL,
  `pDesc` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pImg` varchar(155) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pubTime` time(0) NOT NULL,
  `isShow` tinyint(1) NULL DEFAULT 1,
  `isHot` tinyint(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `pName`(`pName`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for imooc_user
-- ----------------------------
DROP TABLE IF EXISTS `imooc_user`;
CREATE TABLE `imooc_user`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sex` enum('男','女','保密') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '保密',
  `face` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `regTime` time(0) NOT NULL,
  `activeFlag` tinyint(1) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
