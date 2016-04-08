/**
 * Created by xiaojuan on 2016/1/28.
 */
define(function (require,exports,moudle) {

    var $=require("jquery");

    //displayHeadSubNav("#head-nav .headNav","#head-sub-menu")
    exports.displayHeadSubNav=function(headNav,headSubNav){
        //hover主菜单时显示子菜单
        $(headNav).mousemove(function(){
            $(headSubNav).show();
        });

        $(headSubNav).hover(function(){
            $(this).show();
        }, function () {
            $(this).hide();
        });

        var headNavArr=$(headNav);
        var headSubNavArr=$(headSubNav).find(".headSubPage");
        //hover每个主菜单的每个单元时，子菜单的对应单元背景改变
        headNavArr.each(function(i){
            //console.log("headNavArr:"+i);
            $(this).hover(function(){

                headSubNavArr.each(function(j){
                    if(i-1==j)
                    {
                        $(this).css("backgroundColor","#eee");
                    }

                });
            },function(){
                headSubNavArr.each(function(j){
                    if(i-1==j)
                    {
                        $(this).css("backgroundColor","#ffffff");
                    }

                });
            });
        });
    }

    //hover移动开发，前端开发，后端开发，基础知识，云计算&大数据，智能硬件&物联网，数据库，认证考试，企业IT,设计&产品&测试之后显示其子菜单
    exports.displayHeadVMenu=function(hoverElem){
        $(hoverElem).hover(function () {
            var style = {
                backgroundImage: 'none',
                borderRight: 'none'
            };
            $(this).find(".sub-contain").show();
            $(this).css(style);
            $(this).find(".changeColor").css("color", "#35B558");

        }, function () {
            var style = {
                backgroundImage: "url('images/arrow-right.png')",
                borderRight: '1px solid #eeeeee'
            };
            $(this).find(".sub-contain").hide();
            $(this).find(".changeColor").css("color", "#333");
            $(this).css(style);
        });
    }
    //hover移动开发，前端开发，后端开发，基础知识，云计算&大数据，智能硬件&物联网，数据库，认证考试，企业IT,设计&产品&测试之后显示其子菜单

    //问答，Wiki,课程，社群hover之后显示的信息
    exports.displayRecommendSubMenu=function(hoverElem,displayElem){
        var hoverElems=$(hoverElem);
        var displayMainElem=$(displayElem);
        var displaySubMenu=$(displayElem).find(".recommendSubMenu");
        var displaySubMenuDetail=$(displayElem).find(".recommendSubMenuDetail");

        //问答，Wiki,课程，社群，hover每个菜单之后，菜单的下边框取消
        displaySubMenu.each(function(){
            $(this).hover(function(){
                console.log("hover.....");
                $(this).css("borderBottom","none");
            },function(){
                $(this).css("borderBottom","1px solid #e4e4e4");
            });
        });

        hoverElems.hover(function(i){
            displayMainElem.show();
        });

        displayMainElem.hover(function(){
            $(this).show();

            displaySubMenu.each(function(i){
                $(this).mousemove(function(){
                    displaySubMenuDetail.each(function(j){
                        if(i==j){
                            $(this).show();
                        }
                        else{
                            $(this).hide();
                        }
                    });
                });
            });
        },function(){
            $(this).hide();
        });
    }
    //问答，Wiki,课程，社群hover之后显示的信息

    /*热门推荐，最新课程，免费课程，项目实战，全球首发，企业合作*/
    //displayHotLessionSubMenu("#main-body-nav .hotLessionMainMenu")
    exports.displayHotLessionSubMenu=function(mainId,lessonBox,infoDetail){
        var lessonBoxArr=$(".lession-box");
        var infoDetailArr=$(".info-detail");
        var hotRecommendLessionArr=$(".hot-recommend-lession");

        var hotLessionMainMenuArr=$(mainId).find(".hotLessionMainMenu");
        //hotLessionMainMenuArr.each(function(i){
        //    $(this).hover(function(){
        //        $(this).css("backgroundImage","url('images/arrow-up.png')")
        //    }, function () {
        //        $(this).css("backgroundImage","none")
        //    });
        //});

        hotLessionMainMenuArr.each(function(i){
            $(this).mousemove(function(){
                $(this).css("backgroundImage","url('images/arrow-up.png')")
                var arrowTemp=$(this);
                hotRecommendLessionArr.each(function(j){
                    if(i==j){
                        $(this).css("display","block");
                        hotLessionMainMenuArr.eq(j).css("backgroundImage","url('images/arrow-up.png')");
                    }
                    else{
                        $(this).css("display","none");
                        hotLessionMainMenuArr.eq(j).css("backgroundImage","none");
                    }
                });
            });
        });

        lessonBoxArr.each(function(i){

            $(this).hover(function(){
                console.log("hover3333:"+i);
                $(this).find(".lession-play").show();

                infoDetailArr.each(function(j){
                    if(i==j){
                        $(this).slideDown();
                    }
                });
            },function(){
                $(this).find(".lession-play").hide();
                infoDetailArr.each(function(j){
                    if(i==j){
                        console.log("hover5555:");
                        $(this).slideUp();
                    }
                });
            });
        });

        //$(".lession-box").hover(function(){
        //    console.log("hover3333");
        //    $(".lession-play").show();
        //});
    }
    /*热门推荐，最新课程，免费课程，项目实战，全球首发，企业合作*/

});