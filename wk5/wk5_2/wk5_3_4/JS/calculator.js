/**
 * Created by xiaojuan on 2015/12/26.
 */
(function () {
    var firstNumber = 0;//输入的第一个数字
    var firstNumberTmp = 0;
    var operation = "";//输入的操作数如，+ - * /
    var bEqual = true;
    var bOperation=false;

    var numberTags = document.getElementsByName("number");
    var numberTagsLen = numberTags.length;

    for (var i = 0; i < numberTagsLen; i++) {
        //为其中的数字和“.”号按钮绑定事件，在input框中显示点击之后相应的数字
        numberTags[i].onclick = function () {
            var target = document.getElementById("showData");
            //起始时bEqual为true清空输入框中的内容，之后设置为false
            if (bEqual) {
                target.value = "";
                bEqual = false;
            }
            //var data = e.value;
            var data = this.value;
            //"."在一个数字中只能够出现一次
            if (data == ".") {
                if (target.value.indexOf('.') < 0) {
                    if (target.value == "") {
                        target.value = target.value + "0" + data;//连续显示输入的数据
                    }
                    else {
                        target.value += data;//连续显示输入的数据
                    }
                }
            }
            else {
                target.value += data;//连续显示输入的数据
            }
            console.log(target.value);
            firstNumber = parseFloat(target.value);
        }
    }

    //绑定操作符事件：+ - * /
    var operTags = document.getElementsByName("operation");
    var operTagsLen = operTags.length;
    for (var i = 0; i < operTagsLen; i++) {
        operTags[i].onclick = function () {
            console.log("inputOperation...");
            operation = this.value;//记录输入的计算符号+ - * /
            if(!bOperation)
            {
                var target = document.getElementById("showData");
                firstNumberTmp = parseFloat(target.value);
                target.value = "";
                bOperation=true;
            }
        }
    }

    //绑定=号事件
    var operEqual = document.getElementById("equal");
    operEqual.onclick= function () {
        bOperation=false;
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
        if (res.toString().indexOf('.') >= 0) {
            res = parseFloat(res.toFixed(4));
            console.log("res:" + res);
        }
        //在input中显示最后结果
        var target = document.getElementById("showData");
        target.value = res;
        clearData()
    }

    //绑定"清除"事件
    var clearEle = document.getElementById("clear");
    clearEle.onclick=function(){
        console.log("clear");
        var target = document.getElementById("showData");
        target.value = "0";
        clearData();
    }

    function clearData() {
        firstNumber = 0;
        firstNumberTmp = 0;
        operation = "";
    }
})();





