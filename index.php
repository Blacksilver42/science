<!doctype html>
<html>
<head>
	<title>SCIENCE!</title>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
	<!--<script src="https://cdn.jsdelivr.net/npm/mathjs@3.17.0/core.js"></script>-->


	<script src="/git/website-scripts/thousep2.js"></script>
	<script src="js/animateRotate.js"></script>
	<script src="js/data.js"></script>
	<script src="js/dropmenu.js"></script>
	<script src="js/hiring.js"></script>
	<script src="js/stat.js"></script>
	<script src="js/upgrades.js"></script>
	<script src="js/science.js"></script>
	
		
	<link rel="stylesheet" type="text/css" href="/master.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/dropdown.css">
	<link rel="stylesheet" type="text/css" href="css/nav.css">
	<link rel="stylesheet" type="text/css" href="css/hiring.css">
	<link rel="stylesheet" type="text/css" href="css/stat.css">
	<link rel="stylesheet" type="text/css" href="css/upgrades.css">
	
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</head>
<body>
<?php
// check if the git branch is 'bleeding'.
if(shell_exec("git rev-parse --abbrev-ref HEAD") == "bleeding\n") { ?>
<p id="scaryredwarning">
Bleeding edge branch. Use at your own risk!
</p>
<?php } ?>
<table id="header">
	<tr>
		<td id="button" rowspan=2>
			<button onclick="clickbutton()"><h1>SCIENCE!</h1></button>
			<p id="sciPerClick" class="thing-desc">1</p>
		</td>
		<td class="r">&#9883;</td>
		<td id="sci"></td>
	</tr>
	<tr>
		<td class="r">$</td>
		<td id="money">JS error</td>
	</tr>
</table>


<table id="nav">
	<tr>
		<td onclick="$('#content').load('main.html'); recalc();">Main</td>
		<td onclick="$('#content').load('upgrades.html'); recalc();">Upgrades</td>
		<td>Achivements</td>
	</tr>
</table>

<div id="content">
	<!-- xyzzy! -->
</div>

<div id="cogmenu">
	<img id="cog" alt="Menu" onclick="cogmenu();"
		title="<3 the noun project"
		src="/science/cog.png">
	<a href="http://github.com/Blacksilver42/science" target="_blank">github</a> &bull; <a href="/futura">Futura</a>
	<h2 style="width: 100%; clear:both">DISCLAIMER: WIP. Things will be broken sometimes.</h2>
	<button onclick="save()">Save</button>
	<button onclick="load(); ">Load</button>
	<span id="saved" style="display:none color:grey">Saved &check;</span>
	<br>
	<p id="UserAgent" class="thing-desc"></p>
</div>

</body>
