/**
 * Created by xiaojuan on 2016/1/23.
 */
define(function (require) {
    var $ = require("jquery");
    var WaterFlow = require("./jQueryWaterFlow");
    var wf = new WaterFlow("#wrap", ".box");

    wf.initImgPosition();

    var BackToTop=require("./BackToTop");
    BackToTop.backToTop("#backToTop");

    //模拟数据
    var data = [
        {'src': '2.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '3.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '41.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '9.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '10.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '7.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '8.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '21.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '11.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '12.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '31.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '32.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '33.jpg', 'title': '素材家园-sucaijiayuan.com'},
        {'src': '34.jpg', 'title': '素材家园-sucaijiayuan.com'}
    ];

    window.onscroll = function () {
        if(wf.getCheck()){
            var outerElem = $("#wrap");
            for (i in data) {
                var divBox = $("<div></div>");
                divBox.addClass("box");
                outerElem.append(divBox);

                var divInfo = $("<div></div>");
                divInfo.addClass("info");
                divBox.append(divInfo);

                var divPic = $("<div></div>");
                divPic.addClass("pic");
                divInfo.append(divPic);

                var aElem = $("<a></a>");
                divPic.append(aElem);

                var imgElem = $("<img>");
                imgElem.attr("src", "images/" + data[i].src);
                imgElem.css("height", "auto");
                aElem.append(imgElem);
            }

            var wfScroll = new WaterFlow("#wrap", ".box");
            wfScroll.initImgPosition();
        }
    }
})
;