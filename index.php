<!doctype html>
<html>
<head>
	<title>SCIENCE!</title>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
	<!--<script src="https://cdn.jsdelivr.net/npm/mathjs@3.17.0/core.js"></script>-->


	<script src="/git/website-scripts/thousep2.js"></script>
<?php if($_GET["dev"]==1){ ?>
	<script src="js/animateRotate.js"></script>
	<script src="js/data.js"></script>
	<script src="js/dropmenu.js"></script>
	<script src="js/hiring.js"></script>
	<script src="js/stat.js"></script>
	<script src="js/upgrades.js"></script>
	<script src="js/science.js"></script>
<?php } else { ?>
	<script src="min.js"></script>
<!-- add ``?dev=1'' to use these easier-to-read scripts:
	<script src="js/animateRotate.js"></script>
	<script src="js/data.js"></script>
	<script src="js/dropmenu.js"></script>
	<script src="js/hiring.js"></script>
	<script src="js/stat.js"></script>
	<script src="js/upgrades.js"></script>
	<script src="js/science.js"></script>
-->
<?php } ?>
	
		
	<link rel="stylesheet" type="text/css" href="/master.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/dropdown.css">
	
	<link rel="stylesheet" type="text/css" href="css/hiring.css">
	<link rel="stylesheet" type="text/css" href="css/stat.css">
	<link rel="stylesheet" type="text/css" href="css/upgrades.css">
	
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</head>
<body>
<!--
<p style="color:red; font-weight: bold">
Everything is broken :/
</p>
-->
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
		<td></td>
	</tr>
</table>




<div id="main">



	<div class="box" id="sellRR">
		<button onclick="sellRR()">Sell research rights</button>
		<button onclick="sellRR(1)">+</button>
		<button onclick="sellRR(-1)">-</button>
		(x<span class="amt">1</span>)
		<span class="notenough">Not enough &#9883;...</span>
		<p class="thing-desc">
			Convert SCIENCE! to money.
		</p>
	</div>





	<div class="box">
		<button class="dropbutton" onclick="toggleDropMenu('#hiring');">Hiring <p class="droparrow">&#128898;</p></button>
		<div id="hiring" class="dropdown">
			<ul>
				<li class="hire-entry" id="hire-intern">
					<p class="hire-type">Intern</p>
					<p class="hire-amt">0</p>
					<p class="hire-cost">---</p>
					<div class="hire-buttons">
						<button class="hire" onclick="hire.hire('intern')">+</button>
						<button class="fire" onclick="hire.fire('intern')">-</button>
					</div>
					<p class="thing-desc">
						Gets you coffee, so you can spend more time doing SCIENCE!.
						<br>
						<b>+1 &#9883;/click</b>
					</p>
				</li>
				
				<li class="hire-entry" id="hire-accountant">
					<p class="hire-type">SpreadBot</p>
					<p class="hire-amt">0</p>
					<p class="hire-cost">---</p>
					<div class="hire-buttons">
						<button class="hire" onclick="hire.hire('accountant')">+</button>
						<button class="fire" onclick="hire.fire('accountant')">-</button>
					</div>
					<p class="thing-desc">
						Spreadsheet whiz.
						<br>
						<b>1&#9883; &rarr; 1$/sec</b>
					</p>
				</li>
				
				<li class="hire-entry" id="hire-assist">
					<p class="hire-type">Assistant</p>
					<p class="hire-amt">0</p>
					<p class="hire-cost-ignore">$1/sec</p>
					<div class="hire-buttons">
						<button class="hire" onclick="hire.hire('assist')">+</button>
						<button class="fire" onclick="hire.fire('assist')">-</button>
					</div>
					<p class="thing-desc">
						Qualified enough to be left alone in the lab.<br>
						<b>1$ &rarr; 2&#9883;/sec</b>
					</p>
				</li>
			</ul>
		</div>
	</div>





	<div class="box">
		<button class="dropbutton" onclick="toggleDropMenu('#stats');">Stats<p class="droparrow">&#128898;</p></button>
		<div id="stats" class="dropdown">
			<table>
				<tr>
					<th>Stat</th>
					<th>Diff</th>
					<th>Total</th>
				</tr>
				<tr>
					<td>&#9883;</td>
					<td class="sci"></td>
					<td class="sci-total"></td>
				</tr>
				<tr>
					<td>$</td>
					<td class="money"></td>
					<td class="money-total"></td>
				</tr>
			</table>
		</div>
	</div>

</div>

<div class="box" id="upgrades">
	<ul>
		<li>
		</li>
	</ul>
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
