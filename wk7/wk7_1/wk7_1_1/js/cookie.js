/**
 * Created by xiaojuan on 2016/1/27.
 */
define(function(require,exports,module) {

     exports.getCookies=function(name) {
        var cookies = document.cookie.split(";");
         console.log("cookies:"+cookies);
        var len = cookies.length;
        for (var i = 0; i < len; i++) {
            var details = cookies[i].split("=");
            if (details[0].trim() === name) {
                return details[1];
            }
        }
    }

    exports.setCookies=function(name,value){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name+"=" + value+";expires="+exp.toString
    }
});