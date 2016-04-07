/**
 * Created by xiaojuan on 2015/12/18.
 */
function clickMore() {
    if (document.getElementById("navs-more").style.display == "block") {
        document.getElementById("navs-more").style.display = "none";
        document.getElementById("more-img").src = "images/more.png";
    }
    else {
        document.getElementById("navs-more").style.display = "block"
        document.getElementById("more-img").src = "images/moreup.png";
    }
}

function clickNavMore(){
    document.getElementById("up-nav-ul").style.display="block";
}

function startAnimation()
{
    document.getElementById("rotateAnimate").style.animationPlayState = "running";
    document.getElementById("rotateAnimate").style.WebkitAnimationPlayState = "running";
//    document.getElementById("rotateAnimate").style.animationDirection="2000";
//    document.getElementById("rotateAnimate").style.webkitAnimationDirection="2000";
//    document.getElementById("rotateAnimate").style.animationPlayState = "paused";
//    document.getElementById("rotateAnimate").style.WebkitAnimationPlayState = "paused"
}

function displayApps()
{
    document.getElementById("apps-row4").style.display="block";
    document.getElementById("apps-small").style.display="block";
    document.getElementById("apps-extend").style.display="none";
}

function smallApps(){
    document.getElementById("apps-row4").style.display="none";
    document.getElementById("apps-small").style.display="none";
    document.getElementById("apps-extend").style.display="block";
}

function displayMore()
{
    //alert("test");
    document.getElementById("moreSetting-dropdown").style.display="block";
}

function noDisplayMore()
{
    document.getElementById("moreSetting-dropdown").style.display="none";
}