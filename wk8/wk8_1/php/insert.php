<?php 
if (isset($_POST['newstitle'])&&isset($_POST['newsimg'])&&isset($_POST['newsfrom'])&&isset($_POST['newstime'])) {

	require 'connectMysql.php';
	
	if ($db->connect_errno) {
		echo "fail to connect mysql";
	}else{

		$db->set_charset("utf8");

		$dataTable = $_POST['newstype'];
		$newsTitle = $_POST['newstitle'];
		$newsImg = $_POST['newsimg'];
		$newsContent = $_POST['newscontent'];
		$newsFrom = $_POST['newsfrom'];
		$newsTime = $_POST['newstime'];

		// $sql="INSERT INTO new2 VALUES (NULL,'".$newsTitle."','".$newsImg."','".$newsContent."','".$newsFrom."','".$newsTime."')";
		$sql="INSERT INTO ".$dataTable." VALUES (NULL,'".$newsTitle."','".$newsImg."','".$newsContent."','".$newsFrom."','".$newsTime."')";

		$result=$db->query($sql);
		if(!$result){
			echo "failed to insert to mysql";
		}else{
			echo "success to insert to mysql";
		}

		$db->close();
	}
}
 ?>