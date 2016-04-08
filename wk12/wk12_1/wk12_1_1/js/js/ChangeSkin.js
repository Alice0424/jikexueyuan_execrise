(function() {
    var _cookiesBaiduBg = "baiduBg";

    var changeSkinSingleStyle = (function() {
        var instance;

        function ChangeSkin() {

            function changeSkin(targetElem, changeElem, bChangeBody) {
                var src = targetElem.find("a img").attr("src");

                var imgPre = "url('" + src + "')";

                var stylePre = {
                    "backgroundImage": imgPre,
                    "backgroundPosition": "0 0",
                    "backgroundSize": "cover"
                };

                var styleBody = {
                    "backgroundImage": imgPre,
                    "backgroundPosition": "0 0",
                    "backgroundSize": "cover",
                    "background-repeat": "no-repeat",
                    "background-attachment": "fixed"
                };

                $(changeElem).css(stylePre);

                if (bChangeBody) {
                    $("body").css(styleBody);
                    setCookie(_cookiesBaiduBg, imgPre);

                    //利用localStorage进行本地存储
                    localStorage.baiduBg = imgPre;
                    console.log(localStorage.baiduBg);
                }
            }
            //获取合适的图片
            function getBodyImg(preImg) {
                if (preImg != "") {
                    var index = preImg.indexOf(".");
                    var before = preImg.substr(0, index);

                    var after = preImg.substr(index, preImg.length - index);

                    return before + "-body" + after;
                }
            }
            //设置cookie
            function setCookie(name, value) {
                var argv = setCookie.arguments;
                var argc = setCookie.arguments.length;
                var expires = (argc > 2) ? argv[2] : null;
                var path = (argc > 3) ? argv[3] : null;
                var domain = (argc > 4) ? argv[4] : null;
                var secure = (argc > 5) ? argv[5] : false;
                document.cookie = name + "=" + escape(value) +
                    ((expires == null) ? "" : ("; expires=" + expires.toUTCString())) +
                    ((path == null) ? "" : ("; path=" + path)) +
                    ((domain == null) ? "" : ("; domain=" + domain)) +
                    ((secure == true) ? "; secure" : "");
            }

            return {
                //换肤
                changeskin: function(hoverELem, changeElem) {
                    $(hoverELem).hover(function() {
                        var targetElem = $(this);
                        changeSkin(targetElem, changeElem, false);
                    });

                    $(hoverELem).on("click", function() {
                        var targetElem = $(this);
                        changeSkin(targetElem, changeElem, true);
                    });
                },
                //取消换肤
                removeSkin: function(preOverviewImgElem) {
                    var stylePre = {
                        "backgroundImage": "url(images/skin_preview_05c7c9e3.png)",
                        "backgroundPosition": "-1095px -1078px",
                        "backgroundSize": "cover"
                    };

                    var styleBody = {
                        "backgroundImage": "none",
                        "backgroundPosition": "0 0",
                        "backgroundSize": "cover"
                    };

                    $(preOverviewImgElem).css(stylePre);

                    $("body").css(styleBody);
                },
                setBaiduBg: function(bgImg) {
                    var style = {
                        "backgroundImage": bgImg,
                        "backgroundPosition": "0 0",
                        "backgroundSize": "cover"
                    };
                    $("body").css(style);
                },
                getCookies: function(name) {
                    var cookies = document.cookie.split(";");
                    var len = cookies.length;
                    for (var i = 0; i < len; i++) {
                        var details = cookies[i].split("=");
                        if (details[0].trim() === name) {
                            return details[1];
                        }
                    }
                }
            }
        }

        return {
            getInstance: function() {
                if (!instance) {
                    instance = new ChangeSkin();
                }
                return instance;
            }
        }
    })();

    var _instance = changeSkinSingleStyle.getInstance();

    window.onload = function() {
        $("#input-text").focus();

        var baiduBg = _instance.getCookies(_cookiesBaiduBg);
        _instance.setBaiduBg(_cookiesBaiduBg);

        //利用localStorage
        _instance.setBaiduBg(localStorage.baiduBg);
    }

    _instance.changeskin("#changeSkin .hot-skin ul li", "#pre-overview-img");

    $("#removeChange").on("click", function() {
       _instance.removeSkin("#pre-overview-img");
    });
})();
