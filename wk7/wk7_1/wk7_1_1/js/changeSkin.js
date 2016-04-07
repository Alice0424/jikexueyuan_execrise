/**
 * Created by Administrator on 2016/1/24.
 */
define(function(require,exports,module){
    var $ =require("jquery");

    var Cookie=require("./cookie");
    exports.changeskin=function(hoverELem,changeElem){
        $(hoverELem).hover(function(){
            var targetElem=$(this);
            changeSkin(targetElem,changeElem,false);
        });

        $(hoverELem).on("click",function(){
            var targetElem=$(this);
            changeSkin(targetElem,changeElem,true);
        });
    }

    exports.removeSkin=function(){
        var stylePre={
            "backgroundImage":"url(images/skin_preview_05c7c9e3.png)",
            "backgroundPosition":"-1095px -1078px",
            "backgroundSize":"cover"
        };

        var styleBody={
            "backgroundImage":"none",
            "backgroundPosition":"0 0",
            "backgroundSize":"cover"
        };

        $("#pre-overview-img").css(stylePre);

        $("body").css(styleBody);
    }

    function changeSkin(targetElem,changeElem,bChangeBody){
        var src=targetElem.find("a img").attr("src");

        var imgPre="url('"+src+"')";

        var imgBody=getBodyImg(imgPre);
        var stylePre={
            "backgroundImage":imgPre,
            "backgroundPosition":"0 0",
            "backgroundSize":"cover"
        };

        var styleBody={
            "backgroundImage":imgBody,
            "backgroundPosition":"0 0",
            "backgroundSize":"cover"
        };

        $(changeElem).css(stylePre);

        if(bChangeBody){
            $("body").css(styleBody);
            Cookie.setCookies("baiduBg",imgBody);
        }
    }

    exports.setBaiduBg=function(bgImg){
        var style={
            "backgroundImage":bgImg,
            "backgroundPosition":"0 0",
            "backgroundSize":"cover"
        };
        $("body").css(style);
    }

    function getBodyImg(preImg){
        if(preImg!=""){
            var index=preImg.indexOf(".");
            var before=preImg.substr(0,index);

            var after=preImg.substr(index,preImg.length-index);

            return before+"-body"+after;
        }
    }
});
