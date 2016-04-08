(function(){

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

    var inputFocus = new InputFocus("#input-text");
    inputFocus.focusInput();
    inputFocus.unFocus();
})();