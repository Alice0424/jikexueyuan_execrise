(function() {
    var inputFocusSingleStyle = (function() {
        var instance;

        function InputFocus() {
            return {
                focusInput: function(inputElem) {
                    $(inputElem).focus(function() {
                        var style = {
                            border: "1px solid #38f",
                            borderRight: "none",
                            outline: "none"
                        };
                        $(this).css(style);
                    });
                },
                unFocus: function(inputElem) {
                    $(inputElem).blur(function() {
                        var style = {
                            border: "1px solid #b8b8b8",
                            borderRight: "none",
                            outline: "none"
                        };
                        $(this).css(style);
                    });
                }
            }
        }

        return {
            getInstance: function() {
                if (!instance) {
                    instance = new InputFocus();
                }
                return instance;
            }
        }
    })();

    var _instance = inputFocusSingleStyle.getInstance();
    _instance.focusInput("#input-text");
    _instance.unFocus("#input-text");
})();