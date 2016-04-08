/**
 * Created by xiaojuan on 2016/1/30.
 */
define(function (require,exports,moudle) {

    var $ = require("jquery");

    exports.rotateShowSpan=function(){
        //setTimeout()
        var courseArr=$(".course");
        var backArr=$(".back");
        courseArr.each(function(i){
            $(this).hover(function(){
                setTimeout(function(){
                    backArr.each(function (j) {
                        //console.log("tes1111t:"+j);
                        if(i-3==j){
                            console.log("test000000000");
                            $(this).css("display","block");
                        }
                        else{
                            $(this).css("display","none");
                        }
                    });
                },800);
            },function(){
                backArr.css("display","none");
            });
        });
    }
});