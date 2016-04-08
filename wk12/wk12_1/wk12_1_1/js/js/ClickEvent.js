(function() {

    var clickNavSingleStyle = (function() {
        //标记“我的导航是展开的还是收缩的”
        var myNavUnfold = false;
        var instance;

        function ClickNav() {
            var _myNav_unfold = "#myNav-unfold";

            return {
                clickMyNav: function(myNav, showElem) {
                    $(myNav).click(function() {
                        if (!myNavUnfold) {
                            myNavUnfold = true;

                            var style = {
                                borderTop: "6px solid #666",
                                borderRight: "6px solid transparent",
                                borderLeft: "6px solid transparent",
                                borderBottom: "6px solid transparent"
                            };

                            $(this).find(".arrow").css(style);

                            $(_myNav_unfold).show();
                        } else {
                            myNavUnfold = false;

                            var style = {
                                borderTop: "6px solid transparent",
                                borderRight: "6px solid transparent",
                                borderLeft: "6px solid #666",
                                borderBottom: "6px solid transparent"
                            };

                            $(this).find(".arrow").css(style);

                            $(_myNav_unfold).hide();
                        }
                    });
                },
                //点击“我的关注”、“推荐”、“导航”、“视频”、“购物”的事件
                //clickMainNav("#mainNav li",".mainNavDetail")
                clickMainNav: function(mainNav, mainNavDetail) {
                    var mainNavs = $(mainNav);
                    var mainNavDetails = $(mainNavDetail);

                    //mainNavs为导航栏，mainNavDetails为每个导航栏中对应的信息
                    mainNavs.each(function(i) {
                        $(this).click(function() {

                            //被click的导航栏的背景颜色和未被click的导航栏的背景颜色的设置
                            mainNavs.each(function(k) {
                                if (k == i) {
                                    var style = {
                                        backgroundColor: "#9a9da2"
                                    };
                                    $(this).css(style);
                                } else {
                                    var style = {
                                        backgroundColor: "#ffffff",
                                        color: "#000"
                                    };
                                    $(this).css(style);
                                }
                            });

                            //显示每个导航栏对应的详细信息
                            $(mainNavDetails).each(function(j) {
                                if (i != j) {
                                    $(this).hide();
                                } else {
                                    $(this).show();
                                }
                            });
                        });
                    });
                }
            }
        }
        return {
            getInstance: function() {
                if (!instance) {
                    instance = new ClickNav();
                }
                return instance;
            }
        }
    })();

    var _instance = clickNavSingleStyle.getInstance();

    _instance.clickMyNav("#myNav");
    _instance.clickMainNav("#mainNav li", ".mainNavDetail");
})();