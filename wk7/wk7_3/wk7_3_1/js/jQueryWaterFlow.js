/**
 * Created by xiaojuan on 2016/1/23.
 */
define(function(require,exports,module){
    var $ =require("jquery");
    console.log("$:"+$);

    function WaterFlow(outer,box) {
        this.boxsElem = $(outer).find(box);
        console.log(this.boxsElem);
        console.log(this.boxsElem.length);
        this.outerElem=$(outer);
    }

    WaterFlow.prototype.initImgPosition=function(){
        //console.log("initImgPosition...");
        //获取在#main-body中可以显示的列数
        var boxW=this.boxsElem[0].offsetWidth;
        var colsNum=Math.floor(document.documentElement.clientWidth/boxW);
        this.outerElem.css("width",colsNum*boxW+"px")

        //循环出所有的box并按照瀑布排列
        var everyH=[];
        for(var i=0;i<this.boxsElem.length;i++){
            if(i<colsNum){
                everyH[i]=this.boxsElem[i].offsetHeight;
                //console.log("boxHeight:"+everyH[i]);
            }
            else{
                var minH=Math.min.apply(null,everyH);
                //console.log("minH:"+minH);
                var minIndex=getIndex(minH,everyH);

                getStyle(this.boxsElem[i],minH,this.boxsElem[minIndex].offsetLeft,i);

                everyH[minIndex]+=this.boxsElem[i].offsetHeight;
            }
        }
    }

    WaterFlow.prototype.getCheck=function(){
        var documentH = document.documentElement.clientHeight;
        var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
        return documentH + scrollH >= getLastH() ? true : false;
    }

    /**
     * 获得最后一个box所在列的高度
     */
    function getLastH() {
        var wrap = document.getElementById('wrap');
        var boxs = getClass(wrap, 'box');
        return boxs[boxs.length - 1].offsetTop + boxs[boxs.length - 1].offsetHeight;
    }

    function getClass(wrap, className) {
        var obj = wrap.getElementsByTagName('*');
        var arr = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].className == className) {
                arr.push(obj[i]);
            }
        }
        return arr;
    }


    function getIndex(minH,everyH){
        for(index in everyH){
            if(everyH[index]==minH){
                return index;
            }
        }
    }

    var getStartNum = 0;//设置请求加载的条数的位置
    function getStyle(box,top,left,index){
        //if (getStartNum>=index) return;
        $(box).css({
            'position':'absolute',
            'top':top,
            "left":left,
            "opacity":"0.4"
        });
        $(box).stop().animate({
            "opacity":"1"
        },999);
        //getStartNum = index;//更新请求数据的条数位置
    }

    module.exports=WaterFlow;
});