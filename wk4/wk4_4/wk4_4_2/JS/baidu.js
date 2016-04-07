/**
 * Created by xiaojuan on 2015/12/12.
 */
//当鼠标滑过submit时按钮颜色变为#3338ff
function onMouseOverSubmit(id)
{
    document.getElementById(id).style.backgroundColor= "#3338ff";
}
//当鼠标移除submit按钮时按钮颜色为#3385ff
function onMouseOutSubmit(id)
{
    document.getElementById(id).style.backgroundColor= "#3385ff";
}

function onFocuse(id)
{
    //alert("Test");
    //document.getElementById(id).style.border="1px solid #3385ff";
    document.getElementById(id).style.border="1px solid red";
}

function onLoad(id){
    document.getElementById(id).focus();
}

function onMouseOverInput(id)
{
    document.getElementById(id).style.border= "1px solid #747474";
}

function onMouseOutInput(id)
{
    document.getElementById(id).style.border= "1px solid #c6c5b4";
}

function onMouseMoveSetting(id)
{
    document.getElementById(id).style.display="block";
}

function onMouseOutSetting(id)
{
    document.getElementById(id).style.display="none";
}

//function onMouseMoveLi(id)
//{
//    document.getElementsByTagName(id).style.backgroundColor="#3338ff";
//}
//
//function onMouseoutLi(id)
//{
//    document.getElementsByTagName(id).style.backgroundColor="#000000";
//}