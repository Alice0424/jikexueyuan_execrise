$(document).ready(function(){

	var _newsNews = $(".news-news");
	var _newsBaijia = $(".news-baijia");
	var _imgOuter = $("#imgOuter");
	var _newsType = "recommend";
	var _continueLoad = $("#contiuneLoad");

	var _newElem = $(".news");
    var _newsWidth = _newElem.css("width");
	console.log("newsWidth:"+_newsWidth);

	var dataStart =-6;
	var dataNum = 6;//每次由数据库中应该获取到的数据的个数

	var newsTypeArr = ["recommend","baijia","entertainment","social"];
	// 切换推荐和百家两种新闻类型时显示的新闻
	$(".news-category ul li").each(function(i){

		$(this).click(function(){

			_continueLoad.html("继续加载");
			//每次选择不同的新闻类型时，设置从数据库中获取数据的初始值
			dataStart = -6;
			console.log("dataStart:"+dataStart);

			_newElem.each(function(j){
				if(i==j){
					$(this).css({"display":"block"});

					//得到新闻的类型
					var newsType = newsTypeArr[j];
					_newsType = newsTypeArr[j];
					ajaxNewsInfo(newsType);
				}
				else{
					$(this).css({"display":"none"});
				}
			});
		});
	});

	ajaxNewsInfo(_newsType);

	_continueLoad.on("click",function(){
		ajaxNewsInfo(_newsType)
	});

	//通过jquery ajax获取到数据
	function ajaxNewsInfo(nType){
		dataStart +=dataNum;

		$.ajax({
		url:"http://localhost:3000/mySql",
		async:"true",
		type:'post',
		dataType:'json',
		data:{
			newsType:nType,
			datastart:dataStart,
			datanum:dataNum
		},
		beforeSend:function(){
			console.log("beforeSend");

			var style={
				"background-image":"url('images/load.gif')",
				"height":"300px",
				"background-repeat":"no-repeat",
				"background-position":"center 100px"
			};
			_newElem.css(style);
		},
		success:function(data){
			_newsWidth = _newElem.css("width");
			console.log("Success newsWidth:"+_newsWidth+",nType:"+nType);

			data = JSON.parse(data);
			showNewsInfo(nType,data);

			if(data.length < dataNum){
				console.log("数据已全部加载");
				_continueLoad.html("数据已全部加载");
			}
		},
		error:function(XMLHttpRequest,textStatus,errorThrown){
			console.log("error:"+textStatus);
		},
		complete:function(){
			var style={
				"background-image":"none",
				"height":"100%"
				};
				_newElem.css(style);
			}
	});
	}

	//把获取的图片地址，转为img标签
	function showNewImg(img){
		console.log(img+","+typeof(img));
		if(img!=""){
			var index = img.indexOf(",");
			var src = "";
			if(index!=-1){
				src = img.substr(0,index)
			}
			else{
				src = img;
			}
			return "<img src='images/"+src+"''>";
		}
		else{
			console.log("没有图片信息");
			return null;
		}
	}

	var newTypeDic = {
		"recommend":".news-news",
		"baijia" : ".news-baijia",
		"entertainment" :".news-entertainment",
		"social" : ".news-socail"
	}

	function showNewsInfo(nType,data){
			var newsDiv = $(".news");

			console.log("showNewsInfo1111ss:"+nType);

			newsDiv = $(newTypeDic[nType]);

			$.each(data,function(i,newsInfo){
			//添加类名为row的div，这个是每一条新闻的最外层
			var rowDiv = $("<div></div>");
			rowDiv.addClass("row");
			rowDiv.addClass("clearFloat");
			newsDiv.append(rowDiv);

			
			var rowRight;
			var rowBottom;
			//新闻图片
			var img = showNewImg(newsInfo.newsimg);
			if(img == null){
				rowRight = $("<div></div>");
				rowRight.addClass("rowRightNoPadding");

				rowBottom = $("<div></div>");
				rowBottom.addClass("rowBottomNoPadding");
			}else{
				rowRight = $("<div></div>");
				rowRight.addClass("rowRight");

				rowBottom = $("<div></div>");
				rowBottom.addClass("rowBottom");
			}

			rowDiv.append(img);
			rowDiv.append(rowRight);
			rowDiv.append(rowBottom);

			var p = $("<p></p>");
			p.html(newsInfo.newstitle);
			rowRight.append(p);

			var spanContent = $("<p>"+newsInfo.newscontent+"</p>");
			spanContent.addClass("content");

			if(parseInt(_newsWidth) > 730){			 
			 	rowRight.append(spanContent);
			}

			var spanTime = $("<span>"+newsInfo.newstime.substr(0,newsInfo.newstime.indexOf('T'))+"</span>");
			spanTime.addClass("time");
			rowBottom.append(spanTime);

			var spanTime = $("<span>"+newsInfo.newsfrom+"</span>");
			spanTime.addClass("from");
			rowBottom.append(spanTime);

		});		
	}
});