let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let symbolIndexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let indexArray = shuffle(indexArr)
let symbolIndexArray = shuffle(symbolIndexArr)
let cardsymbolIndexArray =[];
const cardImg = document.querySelectorAll('.upcard')
const cuescardImg = document.querySelectorAll('.cusescard')
const shapeImg = document.querySelectorAll('.shapes')
const shapelist = [];
const flipcards = [];
var modal = document.getElementById("myModal")
var sentencemodal = document.getElementById("sentence")
var cuesmodal = document.getElementById("cues")
var cuesmodalwindow = document.getElementById("cueswindow")
var span = document.getElementsByClassName("close")[0]
var btn = document.getElementById("myBtn")
let playershape
let isclickable = 1;
let selectshape = 0;
let currentplayer = 0;
let playercount = sessionStorage.getItem("playercount")
let sentence = sessionStorage.getItem("sentence")
let reststaus = sessionStorage.getItem("reststatus")
let player1 = 0;
let player2 = 0;
let player3 = 0;
let player4 = 0;
let cuesscreen = 0;
let flipcount = 0;
let matchshape1 = 0;
let matchshape2 = 0;
let wincount = 0;
let selectedcard = 0;
let randomnumber = 0;
let player1gold = 0;
let player2gold = 0;
let player3gold = 0;
let player4gold = 0;
let player1silver = 0;
let player2silver = 0;
let player3silver = 0;
let player4silver = 0;

let cardlist = [sessionStorage.getItem("card1") ,sessionStorage.getItem("card2") , sessionStorage.getItem("card3"), sessionStorage.getItem("card4"), sessionStorage.getItem("card5"), sessionStorage.getItem("card6"), sessionStorage.getItem("card7"), sessionStorage.getItem("card8"), sessionStorage.getItem("card9"), sessionStorage.getItem("card10"), sessionStorage.getItem("card11"), sessionStorage.getItem("card12")]

let namelist = [sessionStorage.getItem("name1") ,sessionStorage.getItem("name2") , sessionStorage.getItem("name3"), sessionStorage.getItem("name4"), sessionStorage.getItem("name5"), sessionStorage.getItem("name6"), sessionStorage.getItem("name7"), sessionStorage.getItem("name8"), sessionStorage.getItem("name9"), sessionStorage.getItem("name10"), sessionStorage.getItem("name11"), sessionStorage.getItem("name12")]

let videolist = [sessionStorage.getItem("video1") ,sessionStorage.getItem("video2") , sessionStorage.getItem("video3"), sessionStorage.getItem("video4"), sessionStorage.getItem("video5"), sessionStorage.getItem("video6"), sessionStorage.getItem("video7"), sessionStorage.getItem("video8"), sessionStorage.getItem("video9"), sessionStorage.getItem("video10"), sessionStorage.getItem("video11"), sessionStorage.getItem("video12")]

let drawinglist = [sessionStorage.getItem("drawing1") ,sessionStorage.getItem("drawing2") , sessionStorage.getItem("drawing3"), sessionStorage.getItem("drawing4"), sessionStorage.getItem("drawing5"), sessionStorage.getItem("drawing6"), sessionStorage.getItem("drawing7"), sessionStorage.getItem("drawing8"), sessionStorage.getItem("drawing9"), sessionStorage.getItem("drawing10"), sessionStorage.getItem("drawing11"), sessionStorage.getItem("drawing12")]

let symbollist = ["images/bingo/box.png" ,"images/bingo/box_1.png" ,"images/bingo/cross.png", "images/bingo/cross_1.png", "images/bingo/heart.png", "images/bingo/heart_1.png", "images/bingo/round.png", "images/bingo/round_1.png", "images/bingo/star.png", "images/bingo/star_1.png", "images/bingo/triangle.png", "images/bingo/triangle_1.png"]

let cardsymbolllist = ["images/bingo/card_box.png" ,"images/bingo/card_box_1.png" ,"images/bingo/card_cross.png", "images/bingo/card_cross_1.png", "images/bingo/card_heart.png", "images/bingo/card_heart_1.png", "images/bingo/card_round.png", "images/bingo/card_round_1.png", "images/bingo/card_star.png", "images/bingo/card_star_1.png", "images/bingo/card_triangle.png", "images/bingo/card_triangle_1.png"]


function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;

function setImages() {
	
	if(reststaus == 1)
	{
		indexArray = JSON.parse(sessionStorage.getItem("indexArray"));
		cardlist = JSON.parse(sessionStorage.getItem("cardlist"));
		namelist = JSON.parse(sessionStorage.getItem("namelist"));
		videolist = JSON.parse(sessionStorage.getItem("videolist"));
		drawinglist = JSON.parse(sessionStorage.getItem("drawinglist"));
		indexArray = JSON.parse(sessionStorage.getItem("indexArray"));
		player1 = parseInt(sessionStorage.getItem("player1score"),10);
		player2 = parseInt(sessionStorage.getItem("player2score"),10);
		player3 = parseInt(sessionStorage.getItem("player3score"),10);
		player4 = parseInt(sessionStorage.getItem("player4score"),10);
		
		document.getElementById("player1score").innerHTML = player1;
		document.getElementById("player2score").innerHTML = player2;
		document.getElementById("player3score").innerHTML = player3;
		document.getElementById("player4score").innerHTML = player4;
		sessionStorage.setItem("reststatus", 0);
		
	}
	


		for(let i = 0; i < cardlist.length; i++){
		cardImg[i].src = cardlist[indexArray[i]]
		//cardImg[i].style.display = "none";
		cuescardImg[i].src = cardlist[indexArray[i]]
    }	

	document.getElementById("player1").innerHTML = sessionStorage.getItem("playername1")
	document.getElementById("object1").innerHTML = sessionStorage.getItem("playername1")
	document.getElementById("object2").innerHTML = sessionStorage.getItem("playername1")
	
	document.getElementById("player2").innerHTML = sessionStorage.getItem("playername2")
	document.getElementById("object3").innerHTML = sessionStorage.getItem("playername2")
	document.getElementById("object4").innerHTML = sessionStorage.getItem("playername2")
	
	document.getElementById("player3").innerHTML = sessionStorage.getItem("playername3")
	document.getElementById("object5").innerHTML = sessionStorage.getItem("playername3")
	document.getElementById("object6").innerHTML = sessionStorage.getItem("playername3")
	
	document.getElementById("player4").innerHTML = sessionStorage.getItem("playername4")
	document.getElementById("object7").innerHTML = sessionStorage.getItem("playername4")
	document.getElementById("object8").innerHTML = sessionStorage.getItem("playername4")
	
	
	if(playercount == 2){
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "none";
		document.getElementById("player4card").style.display = "none";
		document.getElementById("player1cardname").style.display = "block";
		document.getElementById("player2cardname").style.display = "block";
		document.getElementById("player3cardname").style.display = "none";
		document.getElementById("player4cardname").style.display = "none";
		
		document.getElementById("object1").style.display = "block";
		document.getElementById("object2").style.display = "block";
		document.getElementById("object3").style.display = "block";
		document.getElementById("object4").style.display = "block";
		document.getElementById("object5").style.display = "none";
		document.getElementById("object6").style.display = "none";
		document.getElementById("object7").style.display = "none";
		document.getElementById("object8").style.display = "none";
	}
	
	if(playercount == 3){
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "block";
		document.getElementById("player4card").style.display = "none";
		document.getElementById("player1cardname").style.display = "block";
		document.getElementById("player2cardname").style.display = "block";
		document.getElementById("player3cardname").style.display = "block";
		document.getElementById("player4cardname").style.display = "none";
		
		document.getElementById("object1").style.display = "block";
		document.getElementById("object2").style.display = "block";
		document.getElementById("object3").style.display = "block";
		document.getElementById("object4").style.display = "block";
		document.getElementById("object5").style.display = "block";
		document.getElementById("object6").style.display = "block";
		document.getElementById("object7").style.display = "none";
		document.getElementById("object8").style.display = "none";
	}
	
	if(playercount == 4){
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "block";
		document.getElementById("player4card").style.display = "block";
		document.getElementById("player1cardname").style.display = "block";
		document.getElementById("player2cardname").style.display = "block";
		document.getElementById("player3cardname").style.display = "block";
		document.getElementById("player4cardname").style.display = "block";
		
		document.getElementById("object1").style.display = "block";
		document.getElementById("object2").style.display = "block";
		document.getElementById("object3").style.display = "block";
		document.getElementById("object4").style.display = "block";
		document.getElementById("object5").style.display = "block";
		document.getElementById("object6").style.display = "block";
		document.getElementById("object7").style.display = "block";
		document.getElementById("object8").style.display = "block";
	}
	
}



function setplayer(){
	if(currentplayer == 0){
		document.getElementById("player1card").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "none"
	}
	
	if(currentplayer == 1){
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "none"
	}
	
	if(currentplayer == 2){
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player4cardname").style.border = "none"
	}
	
	if(currentplayer == 3){
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "0.3vw solid #0f1d9c"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "0.3vw solid #0f1d9c"
	}
	
}


function wincal() {
		
	if(player1 >= 10){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername1")
		openwin()
	}
	if(player2 >= 10){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername2")
		openwin()
	}
	if(player3 >= 10){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername3")
		openwin()
	}
	if(player4 >= 10){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername4")
		openwin()
	}
	
	
}

function selecter(x) {
	if(flipcount == 0)
	{
	matchshape1 = shapelist[x]
	}
	if(flipcount < 2)
	{	
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(180deg)";
	flipcards.push(x);
	flipcount++
	}
	if(flipcount == 2)
	{
	matchshape2 = shapelist[x]
	document.getElementById("flipbtn").src = "images/flip.png"
	}
	
}

function cuescardselect(x){
	
	cuesmodalwindow.style.display = "block";
	{
		document.getElementById("cueseimageselect").src = cardlist[indexArray[x]]
		document.getElementById("cuesetext").innerHTML = namelist[indexArray[x]]
		document.getElementById("cuesevideo").src = videolist[indexArray[x]]
		document.getElementById("cueseimage").src = drawinglist[indexArray[x]]
	}

}

function nextcues(){
	cuesscreen++
if(cuesscreen == 0)
{
	document.getElementById("cuesetext").style.display = "none";
	document.getElementById("cuesevideo").style.display = "block";
	document.getElementById("cueseimage").style.display = "none";
	document.getElementById("nextids").src = "images/next_btn_on.png";
	document.getElementById("previusids").src = "images/previous_btn_off.png";
}
if(cuesscreen == 1)
{
	document.getElementById("cuesetext").style.display = "none";
	document.getElementById("cuesevideo").style.display = "none";
	document.getElementById("cueseimage").style.display = "block";
	document.getElementById("nextids").src = "images/next_btn_on.png";
	document.getElementById("previusids").src = "images/previous_btn_on.png";
}
if(cuesscreen == 2)
{
	document.getElementById("cuesetext").style.display = "block";
	document.getElementById("cuesevideo").style.display = "none";
	document.getElementById("cueseimage").style.display = "none";
	document.getElementById("nextids").src = "images/next_btn_off.png";
	document.getElementById("previusids").src = "images/previous_btn_on.png";
}

if(cuesscreen > 2)
{
   cuesscreen = 2
}

}

function previuscues(){
	cuesscreen--
if(cuesscreen == 0)
{
	document.getElementById("cuesetext").style.display = "none";
	document.getElementById("cuesevideo").style.display = "block";
	document.getElementById("cueseimage").style.display = "none";
	document.getElementById("nextids").src = "images/next_btn_on.png";
	document.getElementById("previusids").src = "images/previous_btn_off.png";
}
if(cuesscreen == 1)
{
	document.getElementById("cuesetext").style.display = "none";
	document.getElementById("cuesevideo").style.display = "none";
	document.getElementById("cueseimage").style.display = "block";
	document.getElementById("nextids").src = "images/next_btn_on.png";
	document.getElementById("previusids").src = "images/previous_btn_on.png";
}
if(cuesscreen == 2)
{
	document.getElementById("cuesetext").style.display = "block";
	document.getElementById("cuesevideo").style.display = "none";
	document.getElementById("cueseimage").style.display = "none";
	document.getElementById("nextids").src = "images/next_btn_off.png";
	document.getElementById("previusids").src = "images/previous_btn_on.png";
}

if(cuesscreen < 0)
{
   cuesscreen = 0
}
}

function show()
{
	selectedcard++
	cardImg[randomnumber].style.border = "0.3vw solid #dd6252";
	if(selectedcard == 9)
	{
		isclickable = 1;
		cardImg[randomnumber].style.border = "0.5vw solid #0f1d9c";
		document.getElementById("flipbtn").src = "images/go.png"
		let currentcard = "drop_zone" + (randomnumber+1)
				if(player1gold == currentcard){
					player1 = player1+2
					document.getElementById("player1score").innerHTML = player1
					}
				if(player1silver == currentcard){
					player1 = player1+1
					document.getElementById("player1score").innerHTML = player1
					}
				if(player2gold == currentcard){
					player2 = player2+2
					document.getElementById("player2score").innerHTML = player2
					}
				if(player2silver == currentcard){
					player2 = player2+1
					document.getElementById("player2score").innerHTML = player2
					}
				if(player3gold == currentcard){
					player3 = player3+2
					document.getElementById("player3score").innerHTML = player3
					}
				if(player3silver == currentcard){
					player3 = player3+1
					document.getElementById("player3score").innerHTML = player3
					}
				if(player4gold == currentcard){
					player4 = player4+2
					document.getElementById("player4score").innerHTML = player4
					}
				if(player4silver == currentcard){
					player4 = player4+1
					document.getElementById("player4score").innerHTML = player4
					}	
		wincal()
			
	}
}

function hide()
{	
    randomnumber = Math.floor(Math.random() * 12);
	cardImg[randomnumber].style.border = "0.5vw solid #0f1d9c";
}



function symbolflip() {
	if(isclickable == 1)
	{
selectedcard = 0		
isclickable = 0
cardImg[randomnumber].style.border = "0.3vw solid #dd6252";
document.getElementById("flipbtn").src = "images/go_over.png"	

for(var i=900; i < 9000; i=i+900){
	setTimeout("hide()" ,i);
	setTimeout("show()",i+450);
}
	}
}

	

		

window.onload = function (){
	
    var dropZone0 = _('drop_zone1');
	var dropZone1 = _('drop_zone2');
	var dropZone2 = _('drop_zone3');
	var dropZone3 = _('drop_zone4');
	var dropZone4 = _('drop_zone5');
	var dropZone5 = _('drop_zone6');
	var dropZone6 = _('drop_zone7');
	var dropZone7 = _('drop_zone8');
	var dropZone8 = _('drop_zone9');
	var dropZone9 = _('drop_zone10');
	var dropZone10 = _('drop_zone11');
	var dropZone11 = _('drop_zone12');
	var dropZone = dropZone0;

    dropZone0.addEventListener('dragenter', handleDragEnter, false);
    dropZone0.addEventListener('dragleave', handleDragLeave, false);
    dropZone0.addEventListener('drop', handleDragDrop, false);

	dropZone1.addEventListener('dragenter', handleDragEnter, false);
    dropZone1.addEventListener('dragleave', handleDragLeave, false);
    dropZone1.addEventListener('drop', handleDragDrop, false);
	
	dropZone2.addEventListener('dragenter', handleDragEnter, false);
    dropZone2.addEventListener('dragleave', handleDragLeave, false);
    dropZone2.addEventListener('drop', handleDragDrop, false);
	
    dropZone3.addEventListener('dragenter', handleDragEnter, false);
    dropZone3.addEventListener('dragleave', handleDragLeave, false);
    dropZone3.addEventListener('drop', handleDragDrop, false);
	
    dropZone4.addEventListener('dragenter', handleDragEnter, false);
    dropZone4.addEventListener('dragleave', handleDragLeave, false);
    dropZone4.addEventListener('drop', handleDragDrop, false);
	
    dropZone5.addEventListener('dragenter', handleDragEnter, false);
    dropZone5.addEventListener('dragleave', handleDragLeave, false);
    dropZone5.addEventListener('drop', handleDragDrop, false);

    dropZone6.addEventListener('dragenter', handleDragEnter, false);
    dropZone6.addEventListener('dragleave', handleDragLeave, false);
    dropZone6.addEventListener('drop', handleDragDrop, false);

    dropZone7.addEventListener('dragenter', handleDragEnter, false);
    dropZone7.addEventListener('dragleave', handleDragLeave, false);
    dropZone7.addEventListener('drop', handleDragDrop, false);

    dropZone8.addEventListener('dragenter', handleDragEnter, false);
    dropZone8.addEventListener('dragleave', handleDragLeave, false);
    dropZone8.addEventListener('drop', handleDragDrop, false);

    dropZone9.addEventListener('dragenter', handleDragEnter, false);
    dropZone9.addEventListener('dragleave', handleDragLeave, false);
    dropZone9.addEventListener('drop', handleDragDrop, false);

    dropZone10.addEventListener('dragenter', handleDragEnter, false);
    dropZone10.addEventListener('dragleave', handleDragLeave, false);
    dropZone10.addEventListener('drop', handleDragDrop, false);

    dropZone11.addEventListener('dragenter', handleDragEnter, false);
    dropZone11.addEventListener('dragleave', handleDragLeave, false);
    dropZone11.addEventListener('drop', handleDragDrop, false);


    function handleDragEnter(e) {
		dropZone = e.target.getAttribute('id');
        _('app_status').innerHTML = "You are dragging over the " + e
            .target
            .getAttribute('id');
    }

    function handleDragLeave(e) {
        _('app_status').innerHTML = "You left the " + e
            .target
            .getAttribute('id');
    }

    function handleDragDrop(e) {
        e.preventDefault();
        var element_id = e
		
            .dataTransfer
            .getData("text");
        e
            .target
            .appendChild(_(element_id));
        droppedIn = true;
        _('app_status').innerHTML = "You droped " + element_id + " into drop zone";
		
		if(element_id == "object1")
		{
			player1gold = dropZone;

			if(dropZone == "object1")
			{
				player1gold = player1gold;
			}
			if(dropZone == "object2")
			{
				player1gold = player1silver;
			}
			if(dropZone == "object3")
			{
				player1gold = player2gold;
			}
			if(dropZone == "object4")
			{
				player1gold = player2silver;
			}
			if(dropZone == "object5")
			{
				player1gold = player3gold;
			}
			if(dropZone == "object6")
			{
				player1gold = player3silver;
			}
			if(dropZone == "object7")
			{
				player1gold = player4gold;
			}
			if(dropZone == "object8")
			{
				player1gold = player4silver;
			}
		}
		if(element_id == "object2")
		{
			player1silver = dropZone;

			if(dropZone == "object1")
			{
				player1silver = player1gold;
			}
			if(dropZone == "object2")
			{
				player1silver = player1silver;
			}
			if(dropZone == "object3")
			{
				player1silver = player2gold;
			}
			if(dropZone == "object4")
			{
				player1silver = player2silver;
			}
			if(dropZone == "object5")
			{
				player1silver = player3gold;
			}
			if(dropZone == "object6")
			{
				player1silver = player3silver;
			}
			if(dropZone == "object7")
			{
				player1silver = player4gold;
			}
			if(dropZone == "object8")
			{
				player1silver = player4silver;
			}
		}
		if(element_id == "object3")
		{
			player2gold = dropZone;
			
			if(dropZone == "object1")
			{
				player2gold = player1gold;
			}
			if(dropZone == "object2")
			{
				player2gold = player1silver;
			}
			if(dropZone == "object3")
			{
				player2gold = player2gold;
			}
			if(dropZone == "object4")
			{
				player2gold = player2silver;
			}
			if(dropZone == "object5")
			{
				player2gold = player3gold;
			}
			if(dropZone == "object6")
			{
				player2gold = player3silver;
			}
			if(dropZone == "object7")
			{
				player2gold = player4gold;
			}
			if(dropZone == "object8")
			{
				player2gold = player4silver;
			}
		}
		if(element_id == "object4")
		{
			player2silver = dropZone;
			
			if(dropZone == "object1")
			{
				player2silver = player1gold;
			}
			if(dropZone == "object2")
			{
				player2silver = player1silver;
			}
			if(dropZone == "object3")
			{
				player2silver = player2gold;
			}
			if(dropZone == "object4")
			{
				player2silver = player2silver;
			}
			if(dropZone == "object5")
			{
				player2silver = player3gold;
			}
			if(dropZone == "object6")
			{
				player2silver = player3silver;
			}
			if(dropZone == "object7")
			{
				player2silver = player4gold;
			}
			if(dropZone == "object8")
			{
				player2silver = player4silver;
			}
		}
		if(element_id == "object5")
		{
			player3gold = dropZone;
			
			if(dropZone == "object1")
			{
				player3gold = player1gold;
			}
			if(dropZone == "object2")
			{
				player3gold = player1silver;
			}
			if(dropZone == "object3")
			{
				player3gold = player2gold;
			}
			if(dropZone == "object4")
			{
				player3gold = player2silver;
			}
			if(dropZone == "object5")
			{
				player3gold = player3gold;
			}
			if(dropZone == "object6")
			{
				player3gold = player3silver;
			}
			if(dropZone == "object7")
			{
				player3gold = player4gold;
			}
			if(dropZone == "object8")
			{
				player3gold = player4silver;
			}
		}
		if(element_id == "object6")
		{
			player3silver = dropZone;
			
			if(dropZone == "object1")
			{
				player3silver = player1gold;
			}
			if(dropZone == "object2")
			{
				player3silver = player1silver;
			}
			if(dropZone == "object3")
			{
				player3silver = player2gold;
			}
			if(dropZone == "object4")
			{
				player3silver = player2silver;
			}
			if(dropZone == "object5")
			{
				player3silver = player3gold;
			}
			if(dropZone == "object6")
			{
				player3silver = player3silver;
			}
			if(dropZone == "object7")
			{
				player3silver = player4gold;
			}
			if(dropZone == "object8")
			{
				player3silver = player4silver;
			}
		}
		if(element_id == "object7")
		{
			player4gold = dropZone;
			
			if(dropZone == "object1")
			{
				player4gold = player1gold;
			}
			if(dropZone == "object2")
			{
				player4gold = player1silver;
			}
			if(dropZone == "object3")
			{
				player4gold = player2gold;
			}
			if(dropZone == "object4")
			{
				player4gold = player2silver;
			}
			if(dropZone == "object5")
			{
				player4gold = player3gold;
			}
			if(dropZone == "object6")
			{
				player4gold = player3silver;
			}
			if(dropZone == "object7")
			{
				player4gold = player4gold;
			}
			if(dropZone == "object8")
			{
				player4gold = player4silver;
			}
		}
		if(element_id == "object8")
		{
			player4silver = dropZone;
			
			if(dropZone == "object1")
			{
				player4silver = player1gold;
			}
			if(dropZone == "object2")
			{
				player4silver = player1silver;
			}
			if(dropZone == "object3")
			{
				player4silver = player2gold;
			}
			if(dropZone == "object4")
			{
				player4silver = player2silver;
			}
			if(dropZone == "object5")
			{
				player4silver = player3gold;
			}
			if(dropZone == "object6")
			{
				player4silver = player3silver;
			}
			if(dropZone == "object7")
			{
				player4silver = player4gold;
			}
			if(dropZone == "object8")
			{
				player4silver = player4silver;
			}
		}
    }

    // Draggable element functionality
    var object1 = _('object1');
    var object2 = _('object2');
    var object3 = _('object3');
	var object4 = _('object4');
    var object5 = _('object5');
	var object6 = _('object6');
    var object7 = _('object7');
	var object8 = _('object8');

    var activeEvent = '';
    var originalX = '';
    var originalY = '';

    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('dragend', handleDragEnd, false);
    object1.addEventListener('touchstart', handleTouchStart, false);
    object1.addEventListener('touchmove', handleTouchMove, false);
    object1.addEventListener('touchend', handleTouchEnd, false);

    object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('dragend', handleDragEnd, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);
    object2.addEventListener('touchend', handleTouchEnd, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('dragend', handleDragEnd, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);
    object3.addEventListener('touchend', handleTouchEnd, false);
	
	object4.addEventListener('dragstart', handleDragStart, false);
    object4.addEventListener('dragend', handleDragEnd, false);
    object4.addEventListener('touchstart', handleTouchStart, false);
    object4.addEventListener('touchmove', handleTouchMove, false);
    object4.addEventListener('touchend', handleTouchEnd, false);
	
	object5.addEventListener('dragstart', handleDragStart, false);
    object5.addEventListener('dragend', handleDragEnd, false);
    object5.addEventListener('touchstart', handleTouchStart, false);
    object5.addEventListener('touchmove', handleTouchMove, false);
    object5.addEventListener('touchend', handleTouchEnd, false);
	
	object6.addEventListener('dragstart', handleDragStart, false);
    object6.addEventListener('dragend', handleDragEnd, false);
    object6.addEventListener('touchstart', handleTouchStart, false);
    object6.addEventListener('touchmove', handleTouchMove, false);
    object6.addEventListener('touchend', handleTouchEnd, false);
	
	object7.addEventListener('dragstart', handleDragStart, false);
    object7.addEventListener('dragend', handleDragEnd, false);
    object7.addEventListener('touchstart', handleTouchStart, false);
    object7.addEventListener('touchmove', handleTouchMove, false);
    object7.addEventListener('touchend', handleTouchEnd, false);
	
	object8.addEventListener('dragstart', handleDragStart, false);
    object8.addEventListener('dragend', handleDragEnd, false);
    object8.addEventListener('touchstart', handleTouchStart, false);
    object8.addEventListener('touchmove', handleTouchMove, false);
    object8.addEventListener('touchend', handleTouchEnd, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e
            .target
            .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e
            .dataTransfer
            .setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {
        if (droppedIn == false) {
            _('app_status').innerHTML = "You let the " + e
                .target
                .getAttribute('id') + " go.";
        }
        droppedIn = false;
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e
            .target
            .getAttribute('id');
        originalX = (e.target.offsetLeft - 10) + "px";
        originalY = (e.target.offsetTop - 10) + "px";
        activeEvent = 'start';
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        var pageX = (touchLocation.pageX - 50) + "px";
        var pageY = (touchLocation.pageY - 50) + "px";
        _('app_status').innerHTML = "Touch x " + pageX + " Touch y " + pageY;
        e.target.style.position = "absolute";
        e.target.style.left = pageX;
        e.target.style.top = pageY;
        activeEvent = 'move';
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        if (activeEvent === 'move') {
            var pageX = (parseInt(e.target.style.left) - 50);
            var pageY = (parseInt(e.target.style.top) - 50);
			

            if (detectTouchEnd(dropZone.offsetLeft, dropZone.offsetTop, pageX, pageY, dropZone.offsetWidth, dropZone.offsetHeight)) {
                dropZone.appendChild(e.target);
                e.target.style.position = "initial";
                droppedIn = true;
                _('app_status').innerHTML = "You droped " + e
                    .target
                    .getAttribute('id') + " into drop zone";
            } else {
                e.target.style.left = originalX;
                e.target.style.top = originalY;
                _('app_status').innerHTML = "You let the " + e
                    .target
                    .getAttribute('id') + " go.";
            }
        }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
        //Very simple detection here
        if (x2 - x1 > w) 
            return false;
        if (y2 - y1 > h) 
            return false;
        return true;
}
}
setImages()
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}


function openwin() {
  modal.style.display = "block";
}

function closecontent() {
  sentencemodal.style.display = "none";
}

function opencues() {
  cuesmodal.style.display = "block";
}

function closecues() {
  cuesmodal.style.display = "none";
}

function closecueswindow() {
  cuesmodalwindow.style.display = "none";
  cuesscreen = 0;
  document.getElementById("cuesetext").style.display = "none";
  document.getElementById("cuesevideo").style.display = "block";
  document.getElementById("cueseimage").style.display = "none";
  document.getElementById("nextids").src = "images/next_btn_on.png";
  document.getElementById("previusids").src = "images/previous_btn_off.png";
}

function opencontent(x) {
  sentencemodal.style.display = "block";
  if(x == 1)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun1.png";  
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb1.png";
	}
  }
  if(x == 2)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun2.png";  
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb2.png";
	}
  }
  if(x == 3)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun3.png";  
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb3.png";
	}
  }
  if(x == 4)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun4.png";  
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb4.png";
	}
  }
  if(x == 5)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun5.png";
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb5.png";
	} 
  }
  if(x == 6)
  {
	if(sentence == "noun")
	{
	document.getElementById("sentenceimg").src = "images/Noun/noun6.png";  
	}
	else
	{
	document.getElementById("sentenceimg").src = "images/verb/verb6.png";
	} 
  }
}
  



span.onclick = function() {
  location.reload();
}

window.onclick = function(event) {
  if (event.target == modal) {
    location.reload();
  }
}

function reset() {
  location.reload();
}

function resettoken() {
 sessionStorage.setItem("reststatus", 1);
 sessionStorage.setItem("cardlist", JSON.stringify(cardlist));
 sessionStorage.setItem("namelist", JSON.stringify(namelist));
 sessionStorage.setItem("videolist", JSON.stringify(videolist));
 sessionStorage.setItem("drawinglist", JSON.stringify(drawinglist));
 sessionStorage.setItem("indexArray", JSON.stringify(indexArray));
 sessionStorage.setItem("player1score", player1);
 sessionStorage.setItem("player2score", player2);
 sessionStorage.setItem("player3score", player3);
 sessionStorage.setItem("player4score", player4);
 
  location.reload();
}

function windowsize() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var screencal = w/h;
  
  if(screencal > 1.88)
  {
	 for(let i = 0; i < cardImg.length; i++){
     // cardImg[i].style.width = "10vw";
	 }
  }
  else
  {
	for(let i = 0; i < cardImg.length; i++){
     // cardImg[i].style.width = "13vw";
	 }
  }
}

function settingOver(x) {
	document.getElementById("setting").src = "images/settings_icon_over.png";
	}

function settingOut(x) {
	document.getElementById("setting").src = "images/settings_icon.png";
	}
	
function gameOver(x) {
	document.getElementById("Game").src = "images/Games_icon_over.png";
	}

function gameOut(x) {
	document.getElementById("Game").src = "images/Games_icon.png";
	}
	
function resetOver(x) {
	document.getElementById("resetbutton").src = "images/reset_over.png";
	}

function resetOut(x) {
	document.getElementById("resetbutton").src = "images/reset.png";
	}
	
function resetcardover(x) {
	document.getElementById("resetcardbutton").src = "images/reset_tokens_over.png";
	}

function resetcardout(x) {
	document.getElementById("resetcardbutton").src = "images/reset_tokens.png";
	}	
	
function cardhoverin(x) {
	x.style.transform = "scale(1.05)"
	}

function cardhoverout(x) {
	x.style.transform = "scale(1)"
	}		
	
