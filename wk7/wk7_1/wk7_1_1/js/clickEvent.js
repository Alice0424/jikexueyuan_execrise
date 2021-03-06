/**
 * Created by xiaojuan on 2016/1/26.
 */
define(function(require,exports,module) {
    var $ = require("jquery");

    //标记“我的导航是展开的还是收缩的”
    var myNavUnfold=false;

    exports.clickMyNav=function(myNav,showElem){
        $(myNav).click(function(){
            if(!myNavUnfold)
            {
                myNavUnfold=true;

                var style={
                    borderTop:"6px solid #666",
                    borderRight:"6px solid transparent",
                    borderLeft:"6px solid transparent",
                    borderBottom:"6px solid transparent"
                };

                $(this).find(".arrow").css(style);

                $("#myNav-unfold").show();
                console.log("myNav click unfold");
            }
            else{
                myNavUnfold=false;

                var style={
                    borderTop:"6px solid transparent",
                    borderRight:"6px solid transparent",
                    borderLeft:"6px solid #666",
                    borderBottom:"6px solid transparent"
                };

                $(this).find(".arrow").css(style);

                $("#myNav-unfold").hide();
                console.log("myNav click fold");
            }
        });
    }

    //点击“我的关注”、“推荐”、“导航”、“视频”、“购物”的事件
    //clickMainNav("#mainNav li",".mainNavDetail")
    exports.clickMainNav=function(mainNav,mainNavDetail){
        console.log("clickMainNav");
        var mainNavs=$(mainNav);
        var mainNavDetails=$(mainNavDetail);

        //mainNavs为导航栏，mainNavDetails为每个导航栏中对应的信息
        mainNavs.each(function(i){
            $(this).click(function(){
                console.log("i:"+i);

                //被click的导航栏的背景颜色和未被click的导航栏的背景颜色的设置
                mainNavs.each(function(k){
                    console.log("设置背景颜色:"+k+","+i);
                    if(k==i){
                        console.log("k==i:"+k+","+i);
                        var style={
                            backgroundColor:"#9a9da2"
                        };
                        $(this).css(style);
                    }
                    else{
                        var style={
                            backgroundColor:"#ffffff",
                            color:"#000"
                        };
                        $(this).css(style);
                    }
                });

                //显示每个导航栏对应的详细信息
                $(mainNavDetails).each(function(j){
                    if(i!=j)
                    {
                        $(this).hide();
                    }
                    else{
                        $(this).show();
                    }
                });
            });
        });
    }
});