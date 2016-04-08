(function(){
	console.log("test");

	var _resultStatus= $("#status");
	var _submitData = $("#submit-data");
	var _dateInput = $("#date");

	$("input").focus(function(){
		$("#status").html("");
	});

	function verifyInputData(){
		var result = true;
		$("#insert-data input").each(function(i){
			//index为2开始的$("#insert-data input")中的数据为需要插入数据库中的内容
			if(i>1 && $(this).attr("type")!="submit"){
				console.log($(this).attr("type")+"----$(this).val():i:"+$(this).val());
				if($(this).val()==""){
					result = false;
					console.log($(this).attr("value")+",empty");
				}
			}
		});
		return result;
	}

	//Submit data to DB
	$("#submit-data").on("click",function(){

		// 验证输入是否输入完全
		if(!verifyInputData()){
			_resultStatus.html("Please enter complete information");
			return false;
		}
		else{
			console.log("insert to mysql");

			//获取上传的新闻类型，从而决定数据上传到哪个数据库
			$newsArr = $(".newsType");

			var newsType="";
			if($newsArr.get(0).checked){
				newsType = "new2";
			}else{
				newsType = "baijia";
			}

			$.ajax({
				url:'./php/insert.php',
				async:true,
				data:$("#insert-data").serialize(),
				type:'POST',
				beforeSend:function(){
					_submitData.attr({disabled:"disabled"});					
				},
				success:function(data){
					_resultStatus.html(data);
				
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log(textStatus);
					console.log(errorThrown);
				},
				complete:function(){
					_submitData.removeAttr("disabled");
				}
			});
		}
			return false;
	});

	//Click the nav to show the corresponding content
	$(".nav ul li").each(function(i){
		$(this).click(function(){

			$(".container").each(function(j){
				if(i==j){
					$(this).css({"display":"block"});
				}else{
					$(this).css({"display":"none"});
				}

				if(j==1){
					$.ajax({
						url:'./php/show-data.php',
						async:true,
						type:'POST',
						dataType:'json',
						beforeSend:function(){
							var style={
								"background-image":"url('images/load.gif')",
								"height":"300px",
								"background-repeat":"no-repeat",
								"background-position":"center 100px"
							};
							$(".container").css(style);
						},
						success:function(data){
							// console.log(data);
							// 显示新闻信息到table中
							showNewsInfo(data);
						},
						complete:function(){
							var style={
								"background-image":"none",
								"height":"100%"
							};
							$(".container").css(style);
						},
						error:function(XMLHttpRequest,textStaus,errorThrown){
							console.log("error:"+textStaus)
						}
					});
				}
			});
		});
	});

	function showNewImg(img){
		var index = img.indexOf(",");
		var src = "";
		if(index!=-1){
			src = img.substr(0,index);
		}
		else{
			src = img;
		}
		//<img src="" alt="">
		return "<img src='images/"+src+"''>";
	}

	function showNewsInfo(newInfo){
		$.each(newInfo,function(i,field){

			var img = showNewImg(field.newsimg);

			if(field.newscontent == ""){
				field.newscontent = "无";
			}

			var newRow = "<tr><td>"+ field.newstitle+"</td>"
								   + "<td>"+ img +"</td>"
								   + "<td>"+ field.newscontent+"</td>"
								   + "<td>"+ field.newsfrom+"</td>"
								   + "<td>"+ field.newstime+"</td>"+"</tr>";
			$("table").append(newRow)
		});

        var p = $("<p></p>");
	}	
})();

	