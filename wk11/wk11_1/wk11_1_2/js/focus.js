/**
 * Created by xiaojuan on 2016/1/28.
 */
define(function (require,exports,moudle) {

    var $=require("jquery");
    //input框中在聚焦时，里面显示的”Andoid“,"IOS"等信息隐藏
    exports.focusDisplay=function(focusId,ctrlId){
        $(focusId).focus(function(){
            $(ctrlId).css("display","none");
        }).blur(function(){
            $(ctrlId).css("display","block");
        });
    }
});