/*
Navicat MySQL Data Transfer

Source Server         : Alice0424
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : phplession

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-03-01 23:14:27
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
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of newsinfo
-- ----------------------------
INSERT INTO `newsinfo` VALUES ('1', '面对公关危机，企业该如何利用自媒体“反击”？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('2', '面对公关危机，企业该如何利用自媒体“反击”？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('3', '三次退学的学渣，身价475亿美元，靠什么干翻盖茨', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('4', '三次退学的学渣，身价475亿美元，靠什么干翻盖茨', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('5', '为什么苹果付费榜的人肉刷榜行为愈演愈烈？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('6', '为什么苹果付费榜的人肉刷榜行为愈演愈烈？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('7', '音频APP也想玩转自媒体？没有OGC怎么形成PUGC？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('8', '音频APP也想玩转自媒体？没有OGC怎么形成PUGC？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('9', '面临摘牌警告，酷六的出路在哪里', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('10', '面临摘牌警告，酷六的出路在哪里', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('11', '6天30亿：中国“互联网+”电影产业还有哪些机会？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('12', '6天30亿：中国“互联网+”电影产业还有哪些机会？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('13', '6天30亿：中国“互联网+”电影产业还有哪些机会？', 'bj1.jpg,bj1.jpg,bj1.jpg', '', '自媒体', '2016-02-17', 'baijia');
INSERT INTO `newsinfo` VALUES ('42', '习近平治国理政的民心指向', 'news1-1.jpg', '无论是会议讲话中的强调，还是考察调研时的细节，我们总能感受到习近平心中至深至切的爱民之情。党的...', '网易要闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('43', '哈尔滨“天价鱼”酒店被停业', 'news1-2.jpg', '通过该事件，也暴露出来我们对餐饮等行业监管还存在缺失，管理上还不到位。', '网易新闻', '2016-02-16', 'recommend');
INSERT INTO `newsinfo` VALUES ('44', '李克强首次发声“股市汇市炸弹已拆除” 中国经济“该出手时就出手”', 'news1-3.jpg', '李克强总理节后首次发话，认为去年针对股市、汇市波动的方针政策正确，避免了系统性金融风险的发生。', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('45', '罗杰斯：全球金融市场的末日即将到来', 'news1-4.jpg', '他是在接受CNN采访时向市场发出的警告，他说，今年可能会再次爆发的的金融危机，而低能的美联储官...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('46', '王健林告诉年轻人“进入这三大行业就有大钱赚”，此外还谈了他的下一个梦想', 'news1-4.jpg', '万达董事长王健林提到，春节期间全球股市动荡，万达今年工作将有更大不确定性，集团上下欲完成今年目...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('47', '职工住房公积金账户存款利率调整为一年期利率', 'news1-4.jpg', '此次调整是住房公积金收益和缴存职工存款收益之间的再分配，不会推升整体利率水平，也不会影响住房公...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('48', '职工住房公积金账户存款利率调整为一年期利率', 'news1-4.jpg', '此次调整是住房公积金收益和缴存职工存款收益之间的再分配，不会推升整体利率水平，也不会影响住房公...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('49', '\"天价鱼\"饭店生意如常 顾客称万元鳇鱼不奇怪', 'news1-4.jpg', '视频：哈尔滨疑似“天价鱼”事件、涉事消费者质疑调查结果。', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('50', '为什么全球投资者支持人民币', 'news1-4.jpg', '咱们国家外汇储备中，大量美元在中国手中，意味着流通的美元货币少了，若用美元进行投资时，流通货币...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('51', '为什么全球投资者支持人民币', 'news1-4.jpg', '咱们国家外汇储备中，大量美元在中国手中，意味着流通的美元货币少了，若用美元进行投资时，流通货币...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('52', '微信超额提现收费：关于微信“收费”那些事，被指雁过拔毛', 'news1-4.jpg', '微信超额提现收费：关于微信“收费”那些事，被指雁过拔毛', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('53', '微信超额提现收费：关于微信“收费”那些事，被指雁过拔毛', 'news1-4.jpg', '微信超额提现收费：关于微信“收费”那些事，被指雁过拔毛', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('54', '马云：经济形势好不好其实跟你没关系', 'news1-4.jpg', '我对企业失败的案例尤其感兴趣，在经济形势不好的情况下，你会发现，80%~90%的好企业都会经历...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('55', '马云：经济形势好不好其实跟你没关系', 'news1-4.jpg', '我对企业失败的案例尤其感兴趣，在经济形势不好的情况下，你会发现，80%~90%的好企业都会经历...', '网易新闻', '2016-02-15', 'recommend');
INSERT INTO `newsinfo` VALUES ('78', '习近平：提高新闻舆论的传播力', 'news1-5.jpg', '中共中央总书记、国家主席、中央军委主席习近平19日在北京主持召开党的新闻舆论工作座谈会并发表重...', '网易新闻', '2016-02-20', 'recommend');
INSERT INTO `newsinfo` VALUES ('79', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('80', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('81', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('82', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('83', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('84', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('85', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('86', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('87', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('88', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('89', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('90', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('91', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('92', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('93', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('94', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('95', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('96', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('97', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('98', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('99', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('100', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('101', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('102', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('103', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('104', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('105', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('106', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('107', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('108', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('109', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('110', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('111', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('112', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('113', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('114', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('115', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('116', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('117', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('118', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('119', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('120', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('121', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('122', 'TFBOYS演网络剧 阿姨粉姐姐粉又有期待了', 'tfboys.jpg,tfboys.jpg,tfboys.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('123', '《闭嘴!爱吧》首尔开机 张艺兴郑秀晶亮相', 'xingyi.jpg,xingyi.jpg,xingyi.jpg', '', '电视剧', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('124', '上海迪士尼最新宣传片出炉，场景奇幻哪个画面才能打动你？', 'xingyi.jpg', '', '迪斯尼', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('125', '海清《女不强大天不容》演记者 称女性弱势需自立', '', '', '海清', '2016-02-16', 'entertainment');
INSERT INTO `newsinfo` VALUES ('126', '猴年“四海同春”欢乐大结局 侨胞：愿年年，陪此宴', '', '海拔2400米的墨西哥城城市剧院内一片欢声笑语，“文化中国·四海同春”为南美侨胞奉献了今年最后...', '新闻', '2016-02-16', 'entertainment');
