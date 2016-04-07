/**
 * Created by Administrator on 2016/1/24.
 */
define(function(require,exports,module){

    var $ =require("jquery");

    var showDropdwonList=require("./showDropdwonList");

    showDropdwonList.showMoreDropdownList("#more-product","#more-dropdownList",true);

    var test=$("#more-dropdownList");

    showDropdwonList.showChangeSkin("#li-changeskine","#changeSkin-outer");

    showDropdwonList.hideChangeSkine("#changeSkin-outer .packUp","#changeSkin-outer");

    //hover西安和温度之后显示的界面
    showDropdwonList.showMoreDropdownList("#a-temp","#temp-dropDownList",false);

    //换肤
    var changeSkin=require("./changeSkin");
    changeSkin.changeskin("#changeSkin .hot-skin ul li","#pre-overview-img");

    $("#removeChange").on("click",function(){
        changeSkin.removeSkin();
    });

    var Cookie=require("./cookie");
    window.onload=function(){
       $("#input-text").focus();

        var baiduBg=Cookie.getCookies("baiduBg");
        changeSkin.setBaiduBg(baiduBg);
    }

    var InputFocus=require("./inputFocus");
    var inputFocus=new InputFocus("#input-text");
    inputFocus.focusInput();
    inputFocus.unFocus();

    //在"我的关注中"点击“我的导航”
    var ClickEvent=require("./clickEvent");
    ClickEvent.clickMyNav("#myNav");
    //在"我的关注中"点击“我的导航”

    //点击“我的关注”，“推荐”，等
    ClickEvent.clickMainNav("#mainNav li",".mainNavDetail");
    //点击“我的关注”，“推荐”，等

    //返回到顶部
    var BackToTop=require("./BackToTop");

    BackToTop.backToTop("#backToTop");
    //返回到顶部

    //在推荐中无线的加载
    var InfiteLoad=require("./InfiniteLoad");
    InfiteLoad.infiniteLoad("#recommendLeft");
});