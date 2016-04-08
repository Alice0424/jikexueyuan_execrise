(function(){
	console.log("test");

	var _resultStatus= $("#status");
	var _submitData = $("#submit-data");
	var _dateInput = $("#date");
	var _continueLoad = $("#contiuneLoad");

	var dataStart =-6;
	var dataNum = 6;//每次由数据库中应该获取到的数据的个数

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

			$.ajax({
				url:'http://localhost:3000/insertSql',
				async:true,
				data:$("#insert-data").serialize(),
				type:'POST',
				beforeSend:function(){
					_submitData.attr({disabled:"disabled"});					
				},
				success:function(data){
					data = JSON.parse(data);
					console.log(data);

					var result = "";
					if(data.affectedRows>=1){
						result = "Success to insert data to database";
					}else{
						result + "Failed to insert data to database";
					}
					_resultStatus.html(result);
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
			$(this).css("background","#999");

			$(".container").each(function(j){
				if(i==j){
					$(this).css({"display":"block"});
				}else{
					$(this).css({"display":"none"});
				}
			
				if(j==1){
					getNewsData();
				}
			});
		});
	});

	_continueLoad.on("click",function(){
		getNewsData();
	});

	function getNewsData(){
		dataStart +=dataNum;
		console.log(dataStart+"\t"+dataNum);
		$.ajax({
				url:'http://localhost:3000/mySql',
				async:true,
				type:'POST',
				dataType:'json',
				data:{
					datastart:dataStart,
					datanum:dataNum
				},
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
					
					data = JSON.parse(data);
					
					console.log("data.length:"+data.length);
					// 显示新闻信息到table中
					showNewsInfo(data);

					if(data.length < dataNum){
						console.log("数据已全部加载");
						_continueLoad.html("数据已全部加载");
					}
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

	function showNewImg(img){
		var bHasImg = true;
		if(img == ''){
			console.log("failed to get img");
			return {
				bHasImg : false
			}
		}
		var index = img.indexOf(",");
		var src = "";
		if(index!=-1){
			src = img.substr(0,index);
		}
		else{
			src = img;
		}

		return {
			bHasImg : true,
			imgInfo : "<img src='images/"+src+"''>"
		}
	}

	function showNewsInfo(newInfo){
		$.each(newInfo,function(i,field){

			var img = showNewImg(field.newsimg);

			if(field.newscontent == ""){
				field.newscontent = "无";
			}

			var newRow ;
			if(img.bHasImg){
				newRow = "<tr><td>"+ field.newstitle+"</td>"
								   + "<td>"+ img.imgInfo +"</td>"
								   + "<td>"+ field.newscontent+"</td>"
								   + "<td>"+ field.newsfrom+"</td>"
								   + "<td>"+ field.newstime.substr(0,field.newstime.indexOf('T'))+"</td>"+"</tr>";
			}
			else{
				newRow = "<tr><td>"+ field.newstitle+"</td>"
								   + "<td>无图片信息"+ "</td>"
								   + "<td>"+ field.newscontent+"</td>"
								   + "<td>"+ field.newsfrom+"</td>"
								   + "<td>"+ field.newstime.substr(0,field.newstime.indexOf('T'))+"</td>"+"</tr>";
			}
			
			$("table").append(newRow)
		});

        var p = $("<p></p>");
	}	
})();

	