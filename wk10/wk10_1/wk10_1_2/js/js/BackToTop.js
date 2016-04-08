(function(){

	//返回到顶部
	backToTop("#backToTop");
    //返回到顶部

	function backToTop(backElem){

        console.log("scroll");

        $(window).scroll(function(){
            if($(window).scrollTop()>150){
                $(backElem).fadeIn(1000);
            }
            else{
                $(backElem).fadeOut(1000);
            }
        });


        $(backElem).click(function(){
            $("body,html").animate({scrollTop:0},2000);
            return false;
        });
    }
})();