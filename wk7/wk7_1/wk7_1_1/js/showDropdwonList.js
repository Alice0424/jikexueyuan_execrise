/**
 * Created by Administrator on 2016/1/24.
 */
define(function (require,exports,module) {
    var $ = require("jquery");

    //hover在hoverElem元素上之后，显示showElem的内容
    //isHideHoverElem是否隐藏被hover的元素
    exports.showMoreDropdownList=function(hoverElem,showElem,isHideHoverElem){
        $(hoverElem).mousemove(function(){
            $(showElem).show();
            if(isHideHoverElem)
                $(hoverElem).hide();
        });

        $(showElem).mousemove(function () {
            $(showElem).show();
            if(isHideHoverElem)
                $(hoverElem).hide();
        });

        $(showElem).mouseout(function () {
            $(showElem).hide();
            if(isHideHoverElem)
                $(hoverElem).show();
        });
    }

    //点击“换肤”之后，显示“换肤”界面
    exports.showChangeSkin=function(clickElem,showElem){
        $(clickElem).on("click", function () {
            $(showElem).slideDown();
        })
    }

    //点击“收起”之后，收起换肤界面
    exports.hideChangeSkine= function (clickElem,hideElem) {
        $(clickElem).on("click", function () {
            $(hideElem).slideUp();
        })
    }

    //hover西安和温度之后显示的界面
    //exports.showTempDownlist=function(){

    //}
    //exports.showMoreDropdownList=function(){
    //    $("#more-product").mousemove(function(){
    //        $("#more-dropdownList").show();
    //        $("#more-product").hide();
    //    });
    //
    //    $("#more-dropdownList").mousemove(function () {
    //        console.log("in");
    //        $("#more-dropdownList").show();
    //    });
    //
    //    $("#more-dropdownList").mouseout(function () {
    //        $("#more-dropdownList").hide();
    //        $("#more-product").show();
    //    });
    //}

});