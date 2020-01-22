

<!-- require "simple_html_dom.php";
$html = file_get_html('https://www.sendo.vn/nhip-song/');

$tin = $html->find(".td-big-grid-post div");

foreach ($tin as $t) {
	echo $tin -> innertext;
	echo "<hr />";

	$img = $t->find("div.td-big-grid-post",0);
	if( isset($img -> innertext) ){
		$hinh = $img -> find("div.td-module-thumb a",0);
		echo $hinh -> href. '<br>';
	}
} 52min
 -->





<?php

require "simple_html_dom.php";
$html = file_get_html('https://www.sendo.vn/nhip-song/');

$tins = $html->find('div.td-big-grid-post div.td-module-thumb a ');


$mangTinTuc = array();
foreach ($tins as $tin) {
	
	$img = $tin->find('img',0)-> src;
	$tieude = $tin -> title;
	$link = $tin-> href;
	
	array_push ($mangTinTuc, new Tinn(
		$img, $tieude, $link
	));
	//echo $link . '<br>';
	//echo $img . '<br>';
	//echo $tieude;
	//echo "<hr />";
}

echo json_encode($mangTinTuc);

class Tinn{
	public $IMG;
	public $TIEUDE;
	public $LINK;
	function Tinn($i,$t,$l){
		$this-> IMG = $i;
		$this-> TIEUDE = $t;
		$this-> LINK = $l;
	}
}


?>


