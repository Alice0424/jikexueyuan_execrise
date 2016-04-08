/**
 * Created by xiaojuan on 2016/1/29.
 */
define(function(require,exports,module) {

    var $=require("jquery");
    //每一次滚动，应该滚动的宽度
    var _stepWidth=0;
    //滚动条应在的初始位置
    var _scrollOrigin=0;
    var _out=null;
    var _imgIndex=0;
    var containerId=null;
    function ImgSwitchMore(container,imgContain1,imgContain2,imgContain3,stepWidth,scrollOrigin,isAutoRun){
        _out=document.getElementById(container);
        var img1=document.getElementById(imgContain1);
        var img2=document.getElementById(imgContain2);
        var img3=document.getElementById(imgContain3);
        img1.innerHTML=img2.innerHTML;
        img3.innerHTML=img2.innerHTML;
        _stepWidth=stepWidth;
        _scrollOrigin=scrollOrigin;

        _out.scrollLeft=scrollOrigin;
        //_out.scrollLeft=scrollOrigin;
        containerId=container;
    }

    ImgSwitchMore.prototype.arrowLeft=function(){
        console.log("arrowLeft");
        if(_out.scrollLeft+_stepWidth*2>_scrollOrigin*2){
            _out.scrollLeft=_scrollOrigin;
        }
        else{
            var distance=_out.scrollLeft+=_stepWidth;
            console.log(distance);
        }
    }

    ImgSwitchMore.prototype.arrowRight=function(){
        arrowRightLocal();
    }

    function arrowRightLocal(){
        console.log("arrowRight:"+_out.scrollLeft);
        if(_out.scrollLeft<=_stepWidth){
            _out.scrollLeft=_scrollOrigin;
        }
        else{
            var distance=_out.scrollLeft-=_stepWidth;
        }
    }

    module.exports=ImgSwitchMore;
});