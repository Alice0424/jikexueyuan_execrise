/**
 * Created by Administrator on 2016/2/20.
 */
define(function(require,exports,module){
    var $ = require("jquery");

    var _out;
    var _stepWidth;
    var _scrollOrigin;
    //container : 控制显示图片的宽度的Tag
    //imgCnId1 ，imgConId3: 包含和img—conId2中相同的信息
    //imgConId2 : 网页开始显示的图片信息，
    //num:不重复图片的个数
    function ImageSwitch(container,imgConId1,imgConId2,imgConId3,num){
        expandImg(imgConId1,imgConId2,imgConId3);
        
        _out = document.getElementById(container);
        var imgArr = _out.getElementsByTagName("img");
        _stepWidth = imgArr[0].width;

        _scrollOrigin = _stepWidth*num;

        //设置滚动条的初始位置      
        _out.scrollLeft = _scrollOrigin;

        console.log("_stepWidth:"+_stepWidth);
    }

    //把imgConId2中的内容复制到imgConId1和imgConId3中
    function expandImg(imgConId1,imgConId2,imgConId3){
        var img1 = document.getElementById(imgConId1);
        var img2 = document.getElementById(imgConId2);
        var img3 = document.getElementById(imgConId3);

        img1.innerHTML = img2.innerHTML;
        img3.innerHTML = img1.innerHTML;
    }

    ImageSwitch.prototype.arrowRight =  function(){

        if(_out.scrollLeft + _stepWidth*2> _scrollOrigin*2){
            _out.scrollLeft = _scrollOrigin;
        }
        else{
            _out.scrollLeft += _stepWidth;
        }
    }

    ImageSwitch.prototype.arrowLeft = function () {
        if(_out.scrollLeft <= _stepWidth){
            _out.scrollLeft = _scrollOrigin;
        }else{
            _out.scrollLeft -=_stepWidth;
        }
    }

    module.exports = ImageSwitch;

});