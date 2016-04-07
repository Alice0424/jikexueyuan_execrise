
function findProperChaInArray()
{
    //var array=["a","x","a","b","m","d","a","b","x","a","d","x","d","b","k","m","x","d","p","d","x","j","a"];
    var array=["a","x","b","d","m","a","k","m","p","j","a"];
    var result=[];//保存统计结果，其中包括字母和字母出现的次数

    //result数组中存放每个字母出现的次数，数组的索引为字母，返回出现出现次数最多字母的次数
    var maxTime=collectArray(array,result);
    console.log(result);
    console.log(maxTime);

    //freqChara数组中存放出现maxTime次的字母
    var freqChara=[];
    freqCharas(result,maxTime,freqChara);
    console.log(freqChara);

    //获取freqChara字母的位置
    var poses={};
    getPoses(array.join(""),freqChara,poses);
    console.log(poses);

    //把字母出现的次数，位置，出现最多次数的字母信息显示出来
    var target=document.getElementById("resultOuter");
    var spanArray=target.getElementsByTagName("span");
    spanArray[1].innerText=freqChara.toString();
    spanArray[2].innerText=maxTime;
    var spanArrayReuslt="";
    for(var i=0;i<freqChara.length;i++)
    {
        spanArrayReuslt+=freqChara[i]+":（"+poses[freqChara[i]]+"）;"+"\n";
    }
    spanArray[3].innerText=spanArrayReuslt;
}

//循环获得数组得到数组中各个字母出现的次数，存放到数组result中
function collectArray(array,result)
{
    var maxTime=0;
    console.log("function collectArray(array,result)");
    var arrLength=array.length;//计算数组的长度
    console.log(arrLength);
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
        }
    }
    console.log(result);
    return maxTime;
}

//找出出现次数最多的字母
function freqCharas(result,maxTime,freqChara)
{
    var j=0;
    for(var key in result)
    {
        console.log("key:"+key+",value:"+result[key]);
        if(maxTime==result[key])
        {
            freqChara[j]=key;
            j++;
        }
    }
}

//获取出现次数最多字母的位置
function getPoses(arrayStr,freqChara,poses)
{
    console.log("function getPoses(arrayStr,freqChara,poses)");
    for(var i=0;i<freqChara.length;i++)
    {
        var j=0;
        var pos=0;
        poses[freqChara[i]]="";
        while((posIndex=arrayStr.indexOf(freqChara[i],pos))>=0)
        {
            poses[freqChara[i]]+=posIndex+",";
            j++;
            pos=posIndex+1;
        }
        poses[freqChara[i]]=poses[freqChara[i]].substr(0,poses[freqChara[i]].length-1);
        console.log(poses);
    }
}
