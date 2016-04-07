/**
 * Created by xiaojuan on 2015/12/26.
 */
(function(){
    var firstNumber = 0;//输入的第一个数字
    var firstNumberTmp = 0;
    var operation = "";//输入的操作数如，+ - * /
    var bEqual = true;
    var targets=document.getElementsByTagName("button");
    var len=targets.length;
    console.log(len);
    for(var i=0;i<len;i++)
    {
        if((i>=0&&i<=2)||(i>=5&&i<=7)||(i>=9&&i<=11)||(i>=14&&i<=15))
        {
            console.log(i);
            //为其中的数字和“.”号按钮绑定事件，在input框中显示点击之后相应的数字
            targets[i].onclick= function () {
                var target = document.getElementById("showData");
                //起始时bEqual为true清空输入框中的内容，之后设置为false
                if (bEqual) {
                    target.value = "";
                    bEqual = false;
                }
                //var data = e.value;
                var data=this.value;
                target.value += data;//连续显示输入的数据
                console.log(target.value);
                firstNumber = parseFloat(target.value);
            }
        }
        if(i==3||i==8||i==12||i==16||i==17)
        {
            //为加减乘除操作符绑定事件
            targets[i].onclick=function(){
                console.log("inputOperation...");
                operation = this.value;//记录输入的计算符号+ - * /
                var target = document.getElementById("showData");
                firstNumberTmp = parseFloat(target.value);
                target.value = "";
            }
        }

        if(i==13)
        {
            //为“=”号绑定事件，点击之后计算相应的结果
            targets[i].onclick=function(){
                bEqual = true;
                var res = 0;
                switch (operation) {
                    case "+":
                        res = firstNumberTmp + firstNumber;
                        break;
                    case "-":
                        res = firstNumberTmp - firstNumber;
                        break;
                    case "*":
                        res = firstNumberTmp * 10000 * firstNumber * 10000 / 10000 / 10000;
                        break;
                    case "/":
                        res = firstNumberTmp / firstNumber;
                        break;
                    case "%":
                        res = firstNumberTmp % firstNumber;
                        break;
                }
                //判定结果是否为小数，如果是，保留四位小数
                if(res.toString().indexOf('.')>=0)
                {
                    res = parseFloat(res.toFixed(4));
                    console.log("res:" + res);
                }
                //在input中显示最后结果
                var target = document.getElementById("showData");
                target.value = res;
                clearData()
            }
        }
    }

    //为“清楚按钮”绑定事件
    targets[4].onclick= function() {
        console.log("test");
        var target = document.getElementById("showData");
        target.value = "";
        clearData();
    }

    function clearData() {
        firstNumber = 0;
        firstNumberTmp = 0;
        operation = "";
    }
})();





