	var win1 = "#dragwindow-1";
	var win2 = "#dragwindow-2";
	var win3 = "#dragwindow-3";
	var win4 = "#dragwindow-4";
	var winall = win1 +","+ win2 +","+ win3;
	var sound = {
		click: document.getElementById("clik"),
		noe: document.getElementById("noe"),
		bloop: document.getElementById("bloop")
	};	
	var shrt = {grid:[80,80],containment:"parent",cancel:".shortcut-desc"};
	var shrttitl = "#dragshortcut-";
var song1 = $('#sound-1');
var song2 = $('#sound-2');
var song3 = $('#sound-3');
var song4 = $('#sound-4');
var audioArray = [song1, song2, song3, song4];
var i=0;
var lastPlayedFile = null;
$(".broken").click(function(){
  if(lastPlayedFile !== null) {
     lastPlayedFile[0].currentTime = 0;
     lastPlayedFile.trigger('pause'); 
  }
  if (i< audioArray.length){
     lastPlayedFile = audioArray[i];
     audioArray[i].trigger('play');
     i++;
  } else if (i>=audioArray.length){
     i = 0;
     lastPlayedFile = audioArray[0];
     audioArray[i].trigger('play');
  };
});

function playClik(){sound.clik = clik.play();}
function playNoe(){sound.noe = noe.play();}
function playBloop(){sound.bloop = bloop.play();}

console.log(sound)

function winReq(){
	$(winall).draggable({stack:"div"});
	$(winall).draggable({containment:"parent",cancel:".window-info,.close",snapMode:"outer"});
	$(winall).resizable({maxHeight: 700,maxWidth: 1000,minHeight: 100,minWidth: 200});
	$(".close").on("click", function(){$(this).parent().parent().remove();});
}

$(".settingsbutton").on("click", function(){
	var winmain = win1;
	if($(winmain).length == 0) {
	$(".main-wrapper").append(
		"<div id='dragwindow-1' class='draggable'>" + 
		"<div class='window-handle'>" +
			"<span class='window-title'>Settings</span>" +
			"<div onclick='playClik()' id='settings' class='close'></div>" +
		"</div><div class='window-info'>" +
		"<div class='settin-general'></div>" + 
		"<div class='settin-style'></div>" + 
		"<div class='settin-audio'></div>" + 
		"<div class='settin-other'><span id='screenstats'>Work in Progress</span></div>" + 
		"</div></div>");
	winReq();
	}
});

$(".kihexibutton").on("click", function(){
	var winmain = win2;
	if($(winmain).length == 0) {
	$(".main-wrapper").append(
		"<div id='dragwindow-2' class='draggable'>" + 
		"<div class='window-handle'>" +
			"<span class='window-title'>KiHexi</span>" +
			"<div onclick='playClik()' id='settings' class='close'></div>" +
		"</div><div class='window-info'>" +
		"<div id='cont-theme'><div class='theme'><div class='side1'><img src='./required/img/kihexi/1.png'></img></div><div class='side2'><img src='./required/img/kihexi/2.png'></img></div><div class='side3'><img src='./required/img/kihexi/3.png'></img></div><div class='side4'><img src='./required/img/kihexi/4.png'></img></div><div class='side5'><img src='./required/img/kihexi/2.png'></img></div><div class='side6'><img src='./required/img/kihexi/3.png'></img></div></div></div>" +
		"<div class='bd-download'><a onclick='playClik()' href='https://rawgit.com/Kiwez/themes/master/KiHexi/KiHexi.theme.css' download=''>Download Theme</a></div></div></div>");
	winReq();
	}
});

$(".strawberrybutton").on("click", function(){
	var winmain = win3;
	if($(winmain).length == 0) {
	$(".main-wrapper").append(
		"<div id='dragwindow-3' class='draggable'>" + 
		"<div class='window-handle'>" +
			"<span class='window-title'>straWberry</span>" +
			"<div onclick='playClik()' id='settings' class='close'></div>" +
		"</div><div class='window-info'>" +
		"<div id='cont-theme'><div class='theme'><div class='side1'><img src='./required/img/strawberry/1.png'></img></div><div class='side2'><img src='./required/img/strawberry/2.png'></img></div><div class='side3'><img src='./required/img/strawberry/3.png'></img></div><div class='side4'><img src='./required/img/strawberry/4.png'></img></div><div class='side5'><img src='./required/img/strawberry/2.png'></img></div><div class='side6'><img src='./required/img/strawberry/3.png'></img></div></div></div>" +
		"<div class='bd-download'><a onclick='playClik()' href='https://raw.githubusercontent.com/Kiwez/themes/master/straWberry/straWberry.theme.css' download=''>Download Theme</a></div></div></div>");
	winReq();
	}
});

$(function(){
	$(shrttitl + "1").draggable(shrt);
	$(shrttitl + "2").draggable(shrt);
	
});

var span = document.getElementById('clock');
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = h + ":" + m;
}
setInterval(time, 0);
