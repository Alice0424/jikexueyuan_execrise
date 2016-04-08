(function(){
	window.onload=function(){
       $("#input-text").focus();

        var baiduBg=getCookies("baiduBg");
        setBaiduBg(baiduBg);
    }

	changeskin("#changeSkin .hot-skin ul li","#pre-overview-img");

	$("#removeChange").on("click",function(){
        removeSkin();
    });

    function changeskin(hoverELem,changeElem){
        $(hoverELem).hover(function(){
            var targetElem=$(this);
            changeSkin(targetElem,changeElem,false);
        });

        $(hoverELem).on("click",function(){
            var targetElem=$(this);
            changeSkin(targetElem,changeElem,true);
        });
    }

    function removeSkin(){
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
            setCookies("baiduBg",imgBody);
        }
    }

    function setBaiduBg(bgImg){
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

    function getCookies(name) {
        var cookies = document.cookie.split(";");
         console.log("cookies:"+cookies);
        var len = cookies.length;
        for (var i = 0; i < len; i++) {
            var details = cookies[i].split("=");
            if (details[0].trim() === name) {
                return details[1];
            }
        }
    }

    function setCookies(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name+"=" + value+";expires="+exp.toString
    }
})();