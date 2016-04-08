<?php 
header("Content-type:application/json;charset=utf8");

//connect to Mysql
require("connectMySql.php");

// $db = new mysqli("localhost","root","","phplession");

if ($db->connect_errno) {
	echo "faile to connect mysql server";
}else{
	$db->set_charset("utf8");

	$newsType = array();
	if(isset($_POST["newsType"])){
		$newsType[0] = $_POST['newsType'];
	}
	else{
		$newsType[0] = "new2";
		$newsType[1] = "baijia";
	}

	$arr = array();
	for($i=0;$i<count($newsType);$i++){
			$sql = "SELECT * FROM ".$newsType[$i];

			$result = $db->query($sql);
			while ($row = $result->fetch_assoc()) {

			array_push($arr,array("newstitle" => $row['newstitle'],
							  "newsimg" => $row['newsimg'],
							  "newscontent" => $row['newscontent'],
							   "newsfrom" => $row['newsfrom'],
							   "newstime" => $row['newstime'])
					  );
			}
	}
	echo json_encode($arr);
	$db->close();
 }

?>
