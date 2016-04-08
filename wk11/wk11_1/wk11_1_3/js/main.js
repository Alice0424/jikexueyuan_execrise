/**
 * Created by xiaojuan on 2016/1/28.
 */
define(function (require,exports,moudle) {

    var $=require("jquery");

    //input框中在聚焦时，里面显示的”Andoid“,"IOS"等信息隐藏
    var focus=require("./focus");
    focus.focusDisplay("#searchTxt","#search-hot");

    //首页，职业课程，就业课程，极客社区，极客+ hover之后显示的下拉菜单
    var DisplaySubNav=require("./DisplaySubNav");
    DisplaySubNav.displayHeadSubNav("#head-nav .headNav","#head-sub-menu");

    //hover移动开发，前端开发，后端开发，基础知识，云计算&大数据，智能硬件&物联网，数据库，认证考试，企业IT,设计&产品&测试之后显示的子菜单
    DisplaySubNav.displayHeadVMenu(".header-content .head-vMenu ul li");

    //问答，Wiki,课程，社群hover之后显示的信息
    DisplaySubNav.displayRecommendSubMenu("#header-recommend .recommendMainMenu","#header-recommend-detail");

    /*热门推荐，最新课程，免费课程，项目实战，全球首发，企业合作*/
    DisplaySubNav.displayHotLessionSubMenu("#main-body-nav");

    //图片的左右切换
    var ImgSwitch=require("./ImgSwitch");
    var imgSwitch=new ImgSwitch("row2-container1","iconContain1","iconContain2","iconContain3",577,3462);

    //给左右的箭头绑定点击事件
    bindClickEventToArrow("#arrow-left","#arrow-right",imgSwitch);

    var autoRun=imgSwitch.autoRun();

    $("#row2-container1").hover(function(){
        clearInterval(autoRun);
    },function(){
        autoRun=imgSwitch.autoRun();
    });

    var ImgSwitchMore=require("./ImgSwitchMore");
    ///*Web工程师，Android开发工程师，Java开发工程师中图片的左右切换
    var imgSwitchMore=new ImgSwitchMore("main-course","course-outer1","course-outer2","course-outer3",192,582);
    bindClickEventToArrow("#course-arrow-right","#course-arrow-left",imgSwitchMore);
    //    #course-arrow-right,
    //#main-course:hover #course-arrow-left{

    function bindClickEventToArrow(arrowLeft,arrowRight,imgSwitch){
        $(arrowLeft).on("click",function(){
            imgSwitch.arrowRight();
        })

        $(arrowRight).on("click", function () {
            imgSwitch.arrowLeft();
        })
    }

    //知识体系统中hover某个课程之后，旋转图片，显示信息
    var RotateShowSpan=require("./rotateShowSpan");
    RotateShowSpan.rotateShowSpan();

    //返回顶部
    var BackToTop=require("./BackToTop");
    BackToTop.backToTop("#back-to-top");

    //var ImgSwitch2=require("./ImgSwitch");
    //var imgSwitch2=new ImgSwitch2("main-course","course-outer1","course-outer2","course-outer3",192,582);
});