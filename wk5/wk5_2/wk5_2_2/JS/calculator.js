/**
 * Created by xiaojuan on 2015/12/26.
 */
function loadVar()
{
    firstNumber=0;//输入的第一个数字
    firstNumberTmp=0;
    operation="";//输入的操作数如，+ - * /
    bEqual=true;
}

//输入计算的数字
function inputData(e)
{
    var target=document.getElementById("showData");
    //起始时bEqual为true清空输入框中的内容，之后设置为false
    if(bEqual)
    {
        target.value="";
        bEqual=false;
    }
    var data= e.value;
    target.value+=data;//连续显示输入的数据
    console.log(target.value);
    firstNumber=parseFloat(target.value);
}

function inputOperation(e)
{
    console.log("inputOperation...");
    operation= e.value;//记录输入的计算符号+ - * /
    var target=document.getElementById("showData");
    firstNumberTmp=parseFloat(target.value);
    target.value="";
}

//用于计算输入的数据
function inputCalucate()
{
    bEqual=true;
    var res=0;
    switch (operation)
    {
        case "+":
            res=firstNumberTmp+firstNumber;
            break;
        case "-":
            res=firstNumberTmp-firstNumber;
            break;
        case "*":
            res=firstNumberTmp*10000*firstNumber*10000/10000/10000;
            break;
        case "/":
            res=firstNumberTmp/firstNumber;
            res=parseFloat(res.toFixed(4));
            console.log("res:"+res);
            break;
        case "%":
            res=firstNumberTmp%firstNumber;
            break;
    }
    var target=document.getElementById("showData");
    target.value=res;
    clearData()
}

//清零
function inputClear()
{
    console.log("test");
    var target=document.getElementById("showData");
    target.value="";
    clearData();
}

function clearData()
{
    firstNumber=0;
    firstNumberTmp=0;
    operation="";
}