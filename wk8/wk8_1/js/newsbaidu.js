$(document).ready(function(){

	var _newsNews = $(".news-news");
	var _newsBaijia = $(".news-baijia");
	var _imgOuter = $("#imgOuter");
	var _newsType_news = "new2";

	var _newElem = $(".news");
    var _newsWidth = _newElem.css("width");
	console.log("newsWidth:"+_newsWidth);

	// 切换推荐和百家两种新闻类型时显示的新闻
	$(".news-category ul li").each(function(i){

		$(this).click(function(){

			_newElem.each(function(j){
				if(i==j){
					$(this).css({"display":"block"});

					var newsType="";
					if(j==0){
						newsType = "new2";

						_imgOuter.css({"display":"block"});
					}
					else{
						newsType = "baijia";

						_imgOuter.css({"display":"none"});
					}

					ajaxNewsInfo(newsType);
				}
				else{
					$(this).css({"display":"none"});
				}
			});
		});
	});

	ajaxNewsInfo(_newsType_news);

	//通过jquery ajax获取到数据
	function ajaxNewsInfo(nType){
		$.ajax({
		url:"./php/show-data.php",
		async:"true",
		type:'post',
		dataType:'json',
		data:{newsType:nType},
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
			showNewsInfo(nType,data);
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

	function showNewImg(img){
		console.log(img+","+typeof(img));
		if(img!=undefined){
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
		
		return "<img src='' alt='图片丢失'>";	
	}

	function showNewsInfo(nType,data){
			var newsDiv = $(".news");

			console.log("showNewsInfo:"+nType);
			if(nType == "new2"){

				newsDiv = $(".news-news");

			}else if(nType == "baijia"){

				newsDiv=$(".news-baijia");
			}

				$.each(data,function(i,newsInfo){
				//添加类名为row的div，这个是每一条新闻的最外层
				var rowDiv = $("<div></div>");
				rowDiv.addClass("row");

				newsDiv.append(rowDiv);

				//新闻图片
				var img = showNewImg(newsInfo.newsimg);
				
				var rowRight = $("<div></div>");
				rowRight.addClass("rowRight");

				rowDiv.append(img);
				rowDiv.append(rowRight);

				var p = $("<p></p>");
				p.html(newsInfo.newstitle);
				rowRight.append(p);

				if(parseInt(_newsWidth) > 730){
				 	var spanContent = $("<span>"+newsInfo.newscontent+"</span>");
				 	spanContent.addClass("content");
				 	rowRight.append(spanContent);
				}

				var spanTime = $("<span>"+newsInfo.newstime+"</span>");
				spanTime.addClass("time");
				rowRight.append(spanTime);

				var spanTime = $("<span>"+newsInfo.newsfrom+"</span>");
				spanTime.addClass("from");
				rowRight.append(spanTime);

			});		
	}
});