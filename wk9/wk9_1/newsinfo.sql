/*
Navicat MySQL Data Transfer

Source Server         : Alice0424
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : phplession

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-03-04 20:27:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for newsinfo
-- ----------------------------
DROP TABLE IF EXISTS `newsinfo`;
CREATE TABLE `newsinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(100) NOT NULL,
  `newscontent` varchar(200) DEFAULT NULL,
  `newsfrom` varchar(50) NOT NULL,
  `newstime` date NOT NULL,
  `newstype` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of newsinfo
-- ----------------------------
INSERT INTO `newsinfo` VALUES ('159', '习近平治国理政的民心指向', 'news1-1.jpg', '无论是会议讲话中的强调，还是考察调研时的细节，我们总能感受到习近平心中至深至切的爱民之情。党的...', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('160', '王国庆谈员工下岗：这是暂时的', 'news1-2.jpg', '2016年全国两会即将启幕。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('161', '哈德森34+5+4周鹏关键3分 广东险胜辽宁1-2', 'news1-3.jpg', '哈德森投进三分，随即周鹏和阿联各自投进三分，广东队83-73领先。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('162', '习近平治国理政的民心指向', 'news1-1.jpg', '无论是会议讲话中的强调，还是考察调研时的细节，我们总能感受到习近平心中至深至切的爱民之情。党的...', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('163', '王国庆谈员工下岗：这是暂时的', 'news1-2.jpg', '2016年全国两会即将启幕。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('164', '哈德森34+5+4周鹏关键3分 广东险胜辽宁1-2', 'news1-3.jpg', '哈德森投进三分，随即周鹏和阿联各自投进三分，广东队83-73领先。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('165', '印尼苏门答腊外海发生强震 当局发布海啸预警', '', '印尼苏门答腊西南部海域发生8.3级地震，目前尚无人员伤亡和财产损失报告，印尼首都雅加达有震感。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('166', '媒体称傅艺伟带闺蜜吸毒', 'news1-4.jpg,news1-4.jpg,news1-4.jpg', '', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('167', '葫芦兄弟拍真人版电影 欲在银幕上重塑经典 ', 'news1-5.jpg,news1-5.jpg,news1-5.jpg', '', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('168', '习近平治国理政的民心指向', 'news1-1.jpg', '无论是会议讲话中的强调，还是考察调研时的细节，我们总能感受到习近平心中至深至切的爱民之情。党的...', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('169', '王国庆谈员工下岗：这是暂时的', 'news1-2.jpg', '2016年全国两会即将启幕。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('170', '哈德森34+5+4周鹏关键3分 广东险胜辽宁1-2', 'news1-3.jpg', '哈德森投进三分，随即周鹏和阿联各自投进三分，广东队83-73领先。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('171', '习近平治国理政的民心指向', 'news1-1.jpg', '无论是会议讲话中的强调，还是考察调研时的细节，我们总能感受到习近平心中至深至切的爱民之情。党的...', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('172', '王国庆谈员工下岗：这是暂时的', 'news1-2.jpg', '2016年全国两会即将启幕。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('173', '哈德森34+5+4周鹏关键3分 广东险胜辽宁1-2', 'news1-3.jpg', '哈德森投进三分，随即周鹏和阿联各自投进三分，广东队83-73领先。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('174', '印尼苏门答腊外海发生强震 当局发布海啸预警', '', '印尼苏门答腊西南部海域发生8.3级地震，目前尚无人员伤亡和财产损失报告，印尼首都雅加达有震感。', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('175', '媒体称傅艺伟带闺蜜吸毒', 'news1-4.jpg,news1-4.jpg,news1-4.jpg', '', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('176', '葫芦兄弟拍真人版电影 欲在银幕上重塑经典 ', 'news1-5.jpg,news1-5.jpg,news1-5.jpg', '', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('177', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('178', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('179', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('180', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('181', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('182', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('183', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('184', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('185', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('186', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('187', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('188', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('189', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('190', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('191', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('192', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'baijia');
INSERT INTO `newsinfo` VALUES ('193', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('194', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('195', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('196', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('197', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('198', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('199', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('200', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('201', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('202', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('203', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('204', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('205', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('206', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('207', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('208', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('209', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('210', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('211', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('212', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('213', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('214', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('215', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('216', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('217', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('218', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('219', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('220', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('221', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('222', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('223', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('224', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('225', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('226', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('227', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('228', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('229', '人人都看到我，但不知道我是谁', 'news2-1.jpg', '', '网易要闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('230', '监管显威力：2月份北京一家新增P2P平台都没有', 'news2-2.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('231', '你以为银行为啥做P2P资金存管？它不止想赚那点费率', 'news2-3.jpg', '', '网易要闻', '2016-02-16', 'social');
INSERT INTO `newsinfo` VALUES ('232', '血淋淋！3亿元自宫转型，这家公司要用5分钟改变世界', 'news2-4.jpg', '', '网易要闻', '2016-02-16', 'social');
