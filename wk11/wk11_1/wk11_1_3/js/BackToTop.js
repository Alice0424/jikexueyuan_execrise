/**
 * Created by xiaojuan on 2016/1/26.
 */
define(function(require,exports,module) {

    var $ =require("jquery");

    exports.backToTop=function(backElem){
        console.log("scroll");
        $(window).scroll(function(){
            if($(window).scrollTop()>150){
                $(backElem).fadeIn(1000);
            }
            else{
                $(backElem).fadeOut(1000);
            }
        });


        $(backElem).click(function(){
            $("body,html").animate({scrollTop:0},2000);
            return false;
        });
    }
});