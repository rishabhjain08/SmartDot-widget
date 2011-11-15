var file="";
var dataType="";

var musicDropped="<image src=\"images/textback.png\" width=\"110\"  height=\"50\"></image><text  id=\"A\" vOffset=\"29\" hOffset=\"55\" hAlign=\"center\"  style=\"font-size:12px; font-weight: bold\" onClick=\"imageClicked()\" >Get Track Info</text><image src=\"images/textback.png\"  hOffset=\"121\" width=\"110\"  height=\"50\"></image><text  id=\"B\" vOffset=\"29\" hOffset=\"176\"  hAlign=\"center\" style=\"font-size:12px; font-weight: bold\" onClick=\"imageClicked()\" >Fetch Lyrics</text><image src=\"images/textback.png\"  vOffset=\"60\" width=\"231\"  height=\"50\"></image><text  id=\"C\" vOffset=\"89\" hOffset=\"118\" hAlign=\"center\" style=\"font-size:13px; font-weight: bold\" onClick=\"imageClicked()\" >Songs from the same Album</text><image src=\"images/textback.png\" width=\"110\"  vOffset=\"120\" height=\"50\"></image><text  id=\"D\" vOffset=\"149\" hOffset=\"55\" hAlign=\"center\"  style=\"font-size:12px; font-weight: bold\" onClick=\"imageClicked()\" >I like the Artist</text><image src=\"images/textback.png\"  hOffset=\"121\" vOffset=\"120\" width=\"110\"  height=\"50\"></image><text  id=\"E\" vOffset=\"'+'149\" hOffset=\"176\"  hAlign=\"center\" style=\"font-size:12px; font-weight: bold\" onClick=\"imageClicked()\" >People\'s Like</text><web url=\"\" name=\"webObj\" id=\"webObj\" width=\"231\" height=\"200\" vOffset=\"180\" onClick=\"reSize()\" opacity=\"100%\"/>"

var video=new Array("avi","mpeg","mp4","mkv");

function isVideo(e){
	var format=e.substring(e.lastIndexOf('.')+1,e.length);
	var i=0;
	while(i<video.length){
		if(video[i++]==format)
			return true;
	}
	return false;
}

var music=new Array("mp3","wma","wav","bux","tta","raw","ram","ra","rm","ogg","mpc","m4p","ibs","iklax","gsm","flac","dbf","dss","dct","awv","au","atrac","smr");

function isMusic(e){
	var format=e.substring(e.lastIndexOf('.')+1,e.length);
	var i=0;
	while(i<music.length){
		if(music[i++]==format)
			return true;
	}
	return false;
}

var text=new Array("txt");

function isText(e){
	var format=e.substring(e.lastIndexOf('.')+1,e.length);
	if(e.lastIndexOf('.')==-1)
		return true;
	return false;
	var i=0;
	while(i<text.length){
		if(text[i++]==format)
			return true;
	}
	return false;
}

function hideAll(){
		widget.getElementById("videolist").opacity="0%";
		widget.getElementById("textlist").opacity="0%";
		widget.getElementById("musiclist").opacity="0%";
		widget.getElementById("backitup").opacity="0%";
}
function extractName(Title){
	var num1=Title.lastIndexOf(".");
	var num2=Title.lastIndexOf("/");
	var name=Title.substring(num2+1,num1);
	return name;
}
function itemDropped(e){
	//widget.getElementById("list").removeChild();
	file=system.event.items[0];
	dataType=system.event.dataType;
	if(isMusic(system.event.items[0])==true){
		widget.getElementById("videolist").opacity="0%";
		widget.getElementById("textlist").opacity="0%";
		widget.getElementById("musiclist").opacity="100%";
		widget.getElementById("backitup").opacity="0%";
		//alert("file : "+file+" " +ID3.getTag(file, "title") + " by artist: " + ID3.getTag(file, "artist"));
		filename=extractName(file);
		//alert(filename);
	}
	else if(isVideo(system.event.items[0])==true){
		widget.getElementById("videolist").opacity="100%";
		widget.getElementById("textlist").opacity="0%";
		widget.getElementById("musiclist").opacity="0%";
		widget.getElementById("backitup").opacity="0%";
		
	}
	else if(isText(system.event.items[0])==true){
		widget.getElementById("videolist").opacity="0%";
		widget.getElementById("textlist").opacity="100%";
		widget.getElementById("musiclist").opacity="0%";
		widget.getElementById("backitup").opacity="0%";
	}
	else{
		widget.getElementById("videolist").opacity="0%";
		widget.getElementById("textlist").opacity="0%";
		widget.getElementById("musiclist").opacity="0%";
		widget.getElementById("backitup").opacity="100%";
	}
	
		//var imtag=system.createElement("image");
		//image.src="images/box.png";
		//var list=widget.getElementById("list").appendChild(imtag);
		//alert(list.);
		//.innerHTML("<image src=\"images/box.png\"/>");
		//var xparse=XMLDOM.parse( filesystem.readFile( "DOT.kon" ) );
		//alert(musicDropped2+widget.getElementById("list"));
		//updateNow();
	//}
	//alert("HI");
	//alert("HI "+system.event.items[0]);
	//widget.getElementById("text1").setAttribute("data",e.dataType);
}


function createFrame(json,masterid){
	var i=0;
	var newFrame="";
	var y=0;
	for(i=0;i<json.length;i++){
		newFrame+='<image src="images/textback.png" vOffset=\"'+
		y+
		'\" href=\"'+
		json[i][1]+
		'\"></image>'+
		'<text  vOffset=\"'+
		(35+y)+
		'\" hAlign="center" style="font-size:20px; font-weight: bold id='+
		(masterid+"")+
		(i+"")+
		'>'+
		json[i][0]+
		'</text></span>';
		y+=70;
	}
	return newFrame;
}



function changeOpacity(e){
	//alert("HI");
	e.opacity=e.opacity*0.9;
}

function itemEntered(e){
	var dropbox=widget.getElementById("dropbox");
	dropbox.src="images/bcircle.png";
}

function itemExited(e){
var dropbox=widget.getElementById("dropbox");
	dropbox.src="images/bcircle.png";
}
/*
function PropertyAnimation(object, property, startValue, endValue, duration, style, callback)
{
    var x = new CustomAnimation(1, PropertyAnimationUpdate);
    x.object      = object;
    x.property    = property   instanceof Array ? property   : [property];
    x.startValue  = startValue instanceof Array ? startValue : [startValue];
    x.endValue    = endValue   instanceof Array ? endValue   : [endValue];
    x.duration    = duration;
    x.style       = style;
    x.callback    = callback;
    return x;
}

function PropertyAnimationUpdate()
{
	alert("HERE");
    var percent = (animator.milliseconds - this.startTime) / this.duration;
    var stopanimation = animator.milliseconds >= (this.startTime + this.duration);
    for (var i in this.property)
    {
        this.object[this.property[i]] = (
            stopanimation ? this.endValue[i] :
            animator.ease(this.startValue[i], this.endValue[i], percent, this.style)            
        );
    }

    if (stopanimation)
    {
        if (this.callback instanceof Array)
        {
            this.callback[0][this.callback[1]]();
        }
        else if (this.callback != undefined)
        {
            this.callback();
        }
        
        return false;
    }
    return true;
}   */

function reSize(e){
	//widget.open('http://www.google.com','','scrollbars=no,menubar=no,height=600,width=800,resizable=yes,toolbar=no,location=no,status=no');
	//alert("HI");
	//this.width=600;
	//this.height=600;
	//alert(this.width+","+this.height);
	//alert(widget.getElementById("twebObj").html);
}


function imageClicked(e){
}

function onlineSearch(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/search.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="$(document).ready(function(){";
code+="var ht=locate(\"";
code+=file;
code+="\");});"
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	var htpage=widget.getElementById("twebObj");
	widget.getElementById("mwebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function semanticSearch(){
var code="";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/search1.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="var ht=semanticSearch(\"";
code+=file;
code+="\");"
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
//alert(code);
var htpage=widget.getElementById("twebObj");
	widget.getElementById("mwebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function trackInfo(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/tinfo.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="$(document).ready(function(){";
code+="var ht=locate(\"";
code+=filename;
code+="\");});"
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	var htpage=widget.getElementById("mwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function lyricsFetch(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/lyrics.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="$(document).ready(function(){";
code+="var ht=lyrics(\"";
code+=filename;
code+="\");});"
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	var htpage=widget.getElementById("mwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
	

}

function peoplelike(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/similar_songs.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="$(document).ready(function(){";
code+="var ht=locate(\"";
code+=filename;
code+="\");});"
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	//alert(code);
	var htpage=widget.getElementById("mwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
	
}

function moviereview(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/movie_review1.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="var ht=locate(\"";
code+=extractName(file);
code+="\")";
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	//alert(code);
	var htpage=widget.getElementById("vwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("mwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function similarMovies(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/similar_movies.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="var ht=locate(\"";
code+=extractName(file);
code+="\")";
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	//alert(code);
	var htpage=widget.getElementById("vwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("mwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function likeArtist(){
var code="<html>";
code+="<head>";
code+="<script type=\"text/javascript\" src=\"js/yui.js\"></script>";
code+="<script type=\"text/javascript\" src=\"hack/singersongs.js\"></script>";
code+="<script type=\"text/javascript\" src=\"js/jquery.js\"></script>";
code+="<script>";
code+="var ht=locate(\"";
code+=filename;
code+="\");";
code+="</script>"
code+="</head>";
code+="<body>";
code+="<div id=\"whole\"></div>";
code+="</body>";
code+="</html>";
	//alert(code);
	var htpage=widget.getElementById("mwebObj");
	widget.getElementById("twebObj").opacity="0%";
	widget.getElementById("vwebObj").opacity="0%";
	htpage.opacity="100%";
	htpage.html=code;
	//alert(code);
}

function backdata(){
	  var myObject, f;
	  
      myObject = new ActiveXObject("Scripting.FileSystemObject");
      f = myObject.file.copy("C:\\test.txt", "C:\\myText.txt");
}

/*
<image src="images/textback.png" vOffset="60"></image>
<text  vOffset="95" hAlign="center" style="font-size:20px; font-weight: bold" id="B">Fetch Lyrics</text>

<image src="images/textback.png" vOffset="60"></image>
<text  vOffset="95" hAlign="center" style="font-size:20px; font-weight: bold" id="C">I want the whole Album</text>

<image src="images/textback.png" vOffset="60"></image>
<text  vOffset="95" hAlign="center" style="font-size:20px; font-weight: bold" id="D">I like the Artist</text>

<image src="images/textback.png" vOffset="60"></image>
<text  vOffset="95" hAlign="center" style="font-size:20px; font-weight: bold" id="E">What do people like ?</text>
*/

/*<widget minimumVersion="4.0" debug="on">

<script src="js/drag-drop.js"></script>

<window id="main_window" name="title"
title="Sample Yahoo! Widget"
width="500" height="800">


<text id="text1"
style="font-size:36px; font-weight: bold"
hOffset="250" vOffset="200"
hAlign="center"
onClick="changeOpacity();">Drop Here</text>

<image id="dropbox" name="dropbox"
src="images/box.png"
hOffset="250" vOffset="250"
hAlign="center" onClick="imageClicked()" opacity="50%" onDragDrop="itemDropped()" onDragEnter="itemEntered()" onDragExit="itemExited()">
</image>

<frame name="options" id="list" hOffset="98" vOffset="400">
<image src="images/textback.png" ></image>
<text  id="A" vOffset="35" hAlign="center" style="font-size:20px; font-weight: bold" onClick="imageClicked()" >Get Track Info</text>
<span> </span>
</frame>

</window>


</widget>

<text id="text1"
style="font-size:36px; font-weight: bold"
hOffset="250" vOffset="200"
hAlign="center"
onClick="changeOpacity();">Drop Here</text>
*/
/*
<image src="images/textback.png" width="110"  height="50"></image>
<text  id="A" vOffset="29" hOffset="55" hAlign="center"  style="font-size:12px; font-weight: bold" onClick="imageClicked()" >Get Track Info</text>

<image src="images/textback.png"  hOffset="121" width="110"  height="50"></image>
<text  id="B" vOffset="29" hOffset="176"  hAlign="center" style="font-size:12px; font-weight: bold" onClick="imageClicked()" >Fetch Lyrics</text>

<image src="images/textback.png"  vOffset="60" width="231"  height="50"></image>
<text  id="C" vOffset="89" hOffset="118" hAlign="center" style="font-size:13px; font-weight: bold" onClick="imageClicked()" >Songs from the same Album</text>

<image src="images/textback.png" width="110"  vOffset="120" height="50"></image>
<text  id="D" vOffset="149" hOffset="55" hAlign="center"  style="font-size:12px; font-weight: bold" onClick="imageClicked()" >I like the Artist</text>

<image src="images/textback.png"  hOffset="121" vOffset="120" width="110"  height="50"></image>
<text  id="E" vOffset="149" hOffset="176"  hAlign="center" style="font-size:12px; font-weight: bold" onClick="imageClicked()" >People's Like</text>

<web url="" name="webObj" id="webObj" width="231" height="200" vOffset="180" onClick="reSize()" opacity="100%"/>
*/