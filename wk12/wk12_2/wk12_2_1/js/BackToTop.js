//应用单体模式和构造函数模式
var backToTopScope = {};
backToTopScope.backToTopSingleStyle = (function() {
    var instance;

    function BackToTop(elem) {
        var maxTop = 150;
        var fadeTime = 1000;
        var animateTime = 2000;

        var backElem = elem;
        return {
            initScrollWindow: function() {
                $(window).scroll(function() {
                    if ($(window).scrollTop() > maxTop) {
                        $(backElem).fadeIn(fadeTime);
                    } else {
                        $(backElem).fadeOut(fadeTime);
                    }
                });
            },
            clickBackElem: function() {
                $(backElem).click(function() {
                    $("body,html").animate({ scrollTop: 0 }, animateTime);
                    return false
                });
            }
        }
    }

    return {
        getInstance: function(backElem) {
            //如果实例未被创建
            if (!instance) {
                instance = new BackToTop(backElem)
            }
            return instance;
        }

    }
})();

var _instance = backToTopScope.backToTopSingleStyle.getInstance("#backToTop");
_instance.initScrollWindow();
_instance.clickBackElem();
