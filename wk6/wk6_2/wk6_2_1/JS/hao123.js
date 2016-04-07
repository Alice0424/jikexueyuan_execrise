/**
 * Created by xiaojuan on 2016/1/3.
 */
(function() {
    function getCookies() {
        console.log("111:" + document.cookie);
        var cookies = document.cookie.split(";");
        var len = cookies.length;
        for (var i = 0; i < len; i++) {
            var details = cookies[i].split("=");
            if (details[0].trim() === "Alicecolor") {
                return details[1];
            }
        }
    }
    changeColor(getCookies());
    changeBgColor(getCookies());

    //颜色以此为蓝色、红色、黄色、绿色、A746、90E
    var colors = ["#0000c5", "#ff0000", "#bebf07", "#008000", "#803a76", "color-90E"];
    var elem_color = document.getElementsByName("li-color");
    var len = elem_color.length;
    var colorNum = 0;
    for (var i = 0; i < len; i++) {
        elem_color[i].onclick = function() {
            var expires = new Date();
            expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);
            document.cookie = "Alicecolor=" + colors[colorNum];
            console.log("setCookie:" + document.cookie);
            changeColor(colors[colorNum]);
            changeBgColor(colors[colorNum]);
            colorNum++;
        }
    }

    function changeBgColor(color) {
        console.log("changeBgColor:" + color);
        var targets = document.getElementsByName('changeBgColor');
        var len = targets.length;
        for (var i = 0; i < len; i++) {
            targets[i].style.background = color;
        }
    }

    function changeColor(color) {
        var targets = document.getElementsByName('changeColor');
        var len = targets.length;
        for (var i = 0; i < len; i++) {
            targets[i].style.color = color;
        }
    }
})();
