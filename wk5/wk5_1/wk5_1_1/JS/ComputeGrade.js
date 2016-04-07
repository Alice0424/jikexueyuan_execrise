/**
 * Created by xiaojuan on 2015/12/25.
 */
function calculateGrade(idInput, idResult) {
    var score = document.getElementById(idInput).value;

    //判断输入框中获得的分数信息是否合法--必须为数字且必须大于等于0，小于等于100
    document.getElementById(idResult).style.color="#ff0000";
    document.getElementById(idResult).style.fontSize="12px";
    if (isNaN(score)||(score=="")) {
        document.getElementById(idInput).value=null;
        document.getElementById(idResult).innerText="请输入数字";
    }
    else {
        if (score < 0 || score > 100) {
            document.getElementById(idInput).value=null;
            document.getElementById(idResult).innerText="请输入大于等于0，小于等于100的数字";
            //document.getElementById(idResult).style.color="#ff0000";
            //document.getElementById(idResult).style.fontSize="12px";
        }
        else {
            document.getElementById(idResult).innerText = calculate(score)+"等生";
            document.getElementById(idResult).style.fontSize="20px";
            document.getElementById(idResult).style.color="#008000";
        }
    }
}

//分别判断分数处于1到10哪个等级
function calculate(score) {
    if(score.length==1)
    {
        return 10;
    }
    else if(score==100)
    {
        return 1;
    }
    else
    {
        return (10-parseInt(score.substr(0,1)));
    }
}
//function calculate(score) {
//    if (score >= 0 && score < 10)
//        return 10;
//    else if (score >= 10 && score < 20)
//        return 9;
//    else if (score >= 20 && score < 30)
//        return 8;
//    else if (score >= 30 && score < 40)
//        return 7;
//    else if (score >= 40 && score < 50)
//        return 6;
//    else if (score >= 50 && score < 60)
//        return 5;
//    else if (score >= 60 && score < 70)
//        return 4;
//    else if (score >= 70 && score < 80)
//        return 3;
//    else if (score >= 80 && score < 90)
//        return 2;
//    else if (score >= 90 && score <= 100)
//        return 1;
//}