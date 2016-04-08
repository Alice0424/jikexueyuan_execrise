var express = require('express');
var router = express.Router();

var mysql = require("mySql");

console.log("Hello router index.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express Alice' });
  console.log(__dirname);
  res.render('newsbaidu', { title: 'Express Alice' });
});

router.get('/tododata',function(req,res,next){
	res.render("tododata",{});
});

//Create a connection
var conn = mysql.createConnection({
	host : "localhost",
	user : "Alice0424",
	password : "alice",
	database : "phplession"
});

//读取数据表newinfo的信息
router.post("/mySql",function(req,res,next){
	console.log("req.body:"+req.body);

	var sql;
	var newsType = req.body.newsType;
	var datastart = req.body.datastart;
	var datanum = req.body.datanum;

	console.log("datastart:"+datastart+",datanum:"+datanum);
	
	if(typeof(newsType)=="undefined"){
		sql = "SELECT * FROM newsinfo limit "+datastart+","+datanum;
	}
	else{
		console.log("newsType:"+newsType);
		sql = "SELECT * FROM newsinfo where newstype='"+newsType+"' limit "+datastart+","+datanum;
	}
	
	// var sql = "SELECT * FROM newsinfo limit "+datastart+","+datanum;
	console.log("sql:"+sql);
	conn.query(sql,
	function selectCb(err,results,fields){
		if(err){
			console.log(err);
		}

		if(results){
			console.log("test sql...2");
			for(var i=0;i<results.length;i++){
				console.log("%s\t%s",results[i].newstitle,results[i].newscontent);
			}
		}

		res.json(JSON.stringify(results));
	});
});

//向newsinfo数据表中插入信息
router.post("/insertSql",function(req,res,next){
	var newstitle = req.body.newstitle;
	var newscontent = req.body.newscontent;
	var newsimg = req.body.newsimg;
	var newsfrom = req.body.newsfrom;
	var newstype = req.body.newstype;
	var newstime = req.body.newstime;
	console.log("newsInfo:\n"+newstitle+"\t"+newscontent+"\t"+newsimg+"\t"+newsfrom+"\t"+newstype+"\t"+newstime);
	
	var sql = 'INSERT INTO newsinfo VALUES(null,?,?,?,?,?,?)';
	var sql_params = [newstitle,newsimg,newscontent,newsfrom,newstime,newstype];
	conn.query(sql,sql_params,function(err,result){
				   	if(err){
				   		console.log("Failed to insert data to database : failed info:"+err);
				   	}

				   	console.log(result);
				   	res.json(JSON.stringify(result));
	});	
});

module.exports = router;
