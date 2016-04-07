/**
 * Created by xiaojuan on 2016/1/25.
 */
define(function(require,exports,module){
    var $ = require("jquery");

    function InputFocus(inputElem){
        this.inputElem=inputElem;
        console.log("11"+this.inputElem);
    }

    InputFocus.prototype.focusInput=function(){
        $(this.inputElem).focus(function(){
            var style={
                border:"1px solid #38f",
                borderRight:"none",
                outline:"none"
            };
            console.log("test"+","+$(this));
            $(this).css(style);
        });
    }

    InputFocus.prototype.unFocus=function(){
        $(this.inputElem).blur(function(){
            var style={
                border:"1px solid #b8b8b8",
                borderRight:"none",
                outline:"none"
            };
            $(this).css(style);
        });
    }

    module.exports=InputFocus;
});