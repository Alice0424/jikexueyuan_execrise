/**
 * Created by xiaojuan on 2015/12/16.
 */
function clickGerneral(){
    //var rig1=document.getElementById("contentGeneralInfo").style.zIndex="4";
    //var rig2=document.getElementById("contentOfficeInfo").style.zIndex="3";

    document.getElementById("contentGeneralInfo").style.display="block";
    document.getElementById("contentOfficeInfo").style.display="none";
    document.getElementById("contentOfficeExpert").style.display="none";
    document.getElementById("contentTime").style.display="none";
}

function clickOffice()
{
    document.getElementById("contentGeneralInfo").style.display="none";
    document.getElementById("contentOfficeInfo").style.display="block";
    document.getElementById("contentOfficeExpert").style.display="none";
    document.getElementById("contentTime").style.display="none";
}

function clickExport()
{
    document.getElementById("contentGeneralInfo").style.display="none";
    document.getElementById("contentOfficeInfo").style.display="none";
    document.getElementById("contentOfficeExpert").style.display="block";
    document.getElementById("contentTime").style.display="none";
}

function clickTime()
{
    document.getElementById("contentGeneralInfo").style.display="none";
    document.getElementById("contentOfficeInfo").style.display="none";
    document.getElementById("contentOfficeExpert").style.display="none";
    document.getElementById("contentTime").style.display="block";
}