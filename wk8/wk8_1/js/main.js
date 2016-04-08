/**
 * Created by Administrator on 2016/2/20.
 */
define(function (require,exports,moudle) {
    var $ = require('jquery');

    var ImgSwitch = require("./ImageSwitch");
    var imgSwitch=new ImgSwitch("imgOuter","imgs-left","imgs-middle","imgs-right",3);

    setInterval(imgSwitch.arrowRight,3000);
});