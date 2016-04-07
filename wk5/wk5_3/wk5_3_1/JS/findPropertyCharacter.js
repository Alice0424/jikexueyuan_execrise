/**
 * Created by xiaojuan on 2015/12/26.
 */
function findProperChaInArray()
{
    var array=["a","x","b","d","m","a","k","m","p","j","a"];
    var arrLength=array.length;//计算数组的长度
    var result={};//保存统计结果，其中包括字母和字母出现的次数
    var maxTime=0;//字母出现最多的次数
    var chara=array[0];//出现最多次数的字母
    //循环计算出现次数最多的字母，并且记录次数
    for(var i=0;i<arrLength;i++)
    {
        //isNaN检测其中的值是否为非数字
        if(isNaN(result[array[i]]))
        {
            result[array[i]]=1;
        }
        else
        {
            result[array[i]]++;
        }
        if(maxTime<result[array[i]])
        {
            maxTime=result[array[i]];
            chara=array[i];
        }
    }

    //把数组转化为字符串，用字符串中函数indexOf得到出现次数最多字符的位置
    var arrayStr=array.join("");
    var positons=[];//chara字母出现的位置
    var pos=0;
    var j=0;
    positons[j]=arrayStr.indexOf(chara,pos);
    while(positons[j]>=0&&positons[j]<arrLength-1)
    {
        pos=positons[j]+1;
        j++;
        positons[j]=arrayStr.indexOf(chara,pos);
    }

    //document.getElementById("showResult").innerHTML="出现次数最多的字母为："+chara+",出现的次数为："+result[chara]+"出现的位置分别为："+positons.toString();
    var target=document.getElementById("resultOuter");
    var spanArray=target.getElementsByTagName("span");
    spanArray[1].innerText=chara;
    spanArray[2].innerText=result[chara];
    spanArray[3].innerText=positons.toString();
}