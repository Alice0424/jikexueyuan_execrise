(function(){
	console.log("dropDownList.js");

    //hover在百度页面右边的“显示更多”，之后显示的信息
	showMoreDropdownList("#more-product","#more-dropdownList",true);

    //hover西安和温度之后显示的界面
    showMoreDropdownList("#a-temp","#temp-dropDownList",false);

	//换肤
	showChangeSkin("#li-changeskine","#changeSkin-outer");

    hideChangeSkine("#changeSkin-outer .packUp","#changeSkin-outer");

    //hover在hoverElem元素上之后，显示showElem的内容
    //isHideHoverElem是否隐藏被hover的元素
	function showMoreDropdownList(hoverElem,showElem,isHideHoverElem){
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
    function showChangeSkin(clickElem,showElem){
        $(clickElem).on("click", function () {
            $(showElem).slideDown();
        })
    }

    //点击“收起”之后，收起换肤界面
    function hideChangeSkine(clickElem,hideElem) {
        $(clickElem).on("click", function () {
            $(hideElem).slideUp();
        })
    }
})();