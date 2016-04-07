/**
 * Created by xiaojuan on 2015/12/26.
 */
(function () {
    var firstNumber = 0;//输入的第一个数字
    var firstNumberTmp = 0;
    var operation = "";//输入的操作数如，+ - * /
    var bEqual = true;
    var bOperation = false;

    function addEventFun(targets, fun) {
        var len = targets.length;
        for (var i = 0; i < len; i++) {
            if (window.addEventListener) {
                targets[i].addEventListener("click", fun, false);
            }
            else if (window.attachEvent) {
                targets[i].attachEvent("click", fun);
            }
        }
    }

    //input元素
    var target = document.getElementById("showData");
    //为其中的数字和“.”号按钮绑定事件，在input框中显示点击之后相应的数字
    addEventFun(document.getElementsByName("number"), inputData);
    //绑定操作符事件：+ - * /
    addEventFun(document.getElementsByName("operation"), inputOperation);
    //绑定=号事件
    addEventFun(document.getElementsByName("equal"), calculateResult);
    //绑定阶乘（！）
    addEventFun(document.getElementsByName('factorial'), factorialFun);
    //绑定"清除"事件
    addEventFun(document.getElementsByName('clear'), clearFun);
    addEventFun(document.getElementsByName("cancelInputData"), cancelInputData);


    //对cos、sin、tan的数学函数进行处理
    function calculatorSpecailFun(inData) {
        var indexCos = inData.toString().indexOf("cos");
        if (indexCos >= 0) {
            var tmpIndex = inData.indexOf(")");
            var data = parseFloat(inData.substr(4, tmpIndex - 4));
            return Math.cos(data * Math.PI / 180);
        }
        var indexSin = inData.toString().indexOf("sin");
        if (indexSin >= 0) {
            var tmpIndex = inData.indexOf(")");
            var data = parseFloat(inData.substr(4, tmpIndex - 4));
            return Math.cos(data * Math.PI / 180);
        }
        var indexTan = inData.toString().indexOf("tan");
        if (indexTan >= 0) {
            var tmpIndex = inData.indexOf(")");
            var data = parseFloat(inData.substr(4, tmpIndex - 4));
            return Math.cos(data * Math.PI / 180);
        }

        return parseFloat(inData);
    }

    //点击“=”后显示最终的结果
    function calculateResult() {
        bOperation = false;
        bEqual = true;
        var res = 0;
        switch (operation) {
            case "+":
                res = calculatorSpecailFun(firstNumberTmp) + calculatorSpecailFun(firstNumber);
                break;
            case "-":
                res = calculatorSpecailFun(firstNumberTmp) - calculatorSpecailFun(firstNumber);
                break;
            case "*":
                res = calculatorSpecailFun(firstNumberTmp) * 10000 * calculatorSpecailFun(firstNumber) * 10000 / 10000 / 10000;
                break;
            case "/":

                if (calculatorSpecailFun(firstNumber) == 0) {
                    res = "分母不能为0";
                }
                else {
                    res = calculatorSpecailFun(firstNumberTmp) / calculatorSpecailFun(firstNumber);
                }
                break;
            case "%":
                if (calculatorSpecailFun(firstNumber) == 0) {
                    res = "分母不能为0";
                }
                else {
                    res = calculatorSpecailFun(firstNumberTmp) % calculatorSpecailFun(firstNumber);
                }
                break;
            default :
                console.log("default");
                res = calculatorSpecailFun(firstNumber);
                break;
        }
        //判定结果是否为小数，如果是，保留四位小数
        if (res.toString().indexOf('.') >= 0) {
            res = parseFloat(res.toFixed(4));
            console.log("res:" + res);
        }
        console.log(res);
        //在input中显示最后结果
        var target = document.getElementById("showData");
        target.value = res;
        clearData()
    }

    //计算阶乘函数
    function factorialFun() {
        var res = 1;
        var data = target.value;
        for (var i = 1; i <= data; i++) {
            res *= i;
        }
        target.value = res;
    }

    function clearFun() {
        console.log("clear");
        bEqual = true;
        bOperation = false;
        var target = document.getElementById("showData");
        target.value = "0";
        clearData();
    }


    function clearData() {
        firstNumber = 0;
        firstNumberTmp = 0;
        operation = "";
    }

    function inputData() {
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
        firstNumber = target.value;
        //firstNumber = parseFloat(target.value);
    }

    function inputOperation() {
        console.log("inputOperation...");
        operation = this.value;//记录输入的计算符号+ - * /
        if (!bOperation) {
            var target = document.getElementById("showData");
            firstNumberTmp = target.value;
            target.value = "";
            bOperation = true;
        }
    }

    //删除输入的方法，点击一次删除最后一个字符
    function cancelInputData() {
        var target = document.getElementById("showData");
        var value = target.value;
        if (value.length > 0) {
            target.value = value.substr(0, value.length - 1);
        }
    }
})();





