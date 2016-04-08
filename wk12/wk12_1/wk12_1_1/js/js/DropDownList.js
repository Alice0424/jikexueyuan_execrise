(function() {
    var dropDownSingleStyle = (function() {
        var instance;

        function DropDown() {
            return {
                //hover在hoverElem元素上之后，显示showElem的内容
                //isHideHoverElem是否隐藏被hover的元素
                showMoreDropdownList: function(hoverElem, showElem, isHideHoverElem) {
                    $(hoverElem).mousemove(function() {
                        $(showElem).show();
                        if (isHideHoverElem)
                            $(hoverElem).hide();
                    });

                    $(showElem).mousemove(function() {
                        $(showElem).show();
                        if (isHideHoverElem)
                            $(hoverElem).hide();
                    });

                    $(showElem).mouseout(function() {
                        $(showElem).hide();
                        if (isHideHoverElem)
                            $(hoverElem).show();
                    });
                },
                //点击“换肤”之后，显示“换肤”界面
                showChangeSkin: function(clickElem, showElem) {
                    $(clickElem).on("click", function() {
                        $(showElem).slideDown();
                    })
                },
                //点击“收起”之后，收起换肤界面
                hideChangeSkine: function(clickElem, hideElem) {
                    $(clickElem).on("click", function() {
                        $(hideElem).slideUp();
                    })
                }
            }
        }

        return {
            getInstance: function() {
                if (!instance) {
                    instance = new DropDown();
                }
                return instance;
            }
        }
    })();

    var _instance = dropDownSingleStyle.getInstance();
    //hover在百度页面右边的“显示更多”，之后显示的信息
    _instance.showMoreDropdownList("#more-product", "#more-dropdownList", true);

    //hover西安和温度之后显示的界面
    _instance.showMoreDropdownList("#a-temp", "#temp-dropDownList", false);

    //换肤
    _instance.showChangeSkin("#li-changeskine", "#changeSkin-outer");

    _instance.hideChangeSkine("#changeSkin-outer .packUp", "#changeSkin-outer");
})();
