(function() {
    var infiniteLoadSingleStyle = (function() {
        var instance;

        function InfiniteLoad() {
            var innerHtml = [" 福州零下温度洒水车仍上路 洒水成冰多车连环撞",
                " 女子陪朋友买房遇丈夫偷情 抓奸不成砸小三家当",
                " 杭州景区给游客派发年终奖 百万大钞满天飞"
            ];
            var len = innerHtml.length;

            var imgs = ["rec-11.jpg",
                "rec-22.jpg",
                "rec-33.jpg"
            ];

            function check(elem) {
                var elems = $(elem).find(".new");

                var lastTop = elems[elems.length - 1].offsetTop + elems[elems.length - 1].offsetHeight;

                var documentH = document.documentElement.clientHeight;
                var scrollH = document.documentElement.scrollTop || document.body.scrollTop;

                return scrollH + documentH > lastTop ? true : false;
            }

            return {
                infiniteLoad: function(appendToElem) {
                    window.onscroll = function() {
                        if (check(appendToElem)) {

                            var outer = $(appendToElem);
                            for (var i = 0; i < len; i++) {
                                var divNew = $("<div></div>");
                                divNew.addClass("new");
                                divNew.addClass("clearFloat");
                                outer.append(divNew);

                                //div info
                                var divInfo = $("<div></div>");
                                divInfo.addClass("info");
                                divNew.append(divInfo);

                                //div info下面的h2
                                var h2 = $("<h2></h2>");
                                divInfo.append(h2);

                                //div info下面的h2 h2下面的a
                                var h2A = $("<a href='#'>" + innerHtml[i] + "</a>");
                                h2.append(h2A);

                                var pA = $("<p><a href=''>中关村在线</a><span>01-26 13:29</span></p>");
                                divInfo.append(pA);

                                //类名为img的div
                                var divImg = $("<div></div>");
                                divImg.addClass("img");
                                divNew.append(divImg);

                                var imgA = $("<a></a>");
                                divImg.append(imgA);

                                var imgElem = $("<img>");
                                imgElem.attr("src", "images/" + imgs[i]);
                                imgElem.css("height", "auto");
                                imgA.append(imgElem);
                            }
                        }

                    }
                }
            }
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = new InfiniteLoad();
                }
                return instance;
            }
        }
    })();

    infiniteLoadSingleStyle.getInstance().infiniteLoad("#recommendLeft");
})();
