let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let symbolIndexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let indexArray = shuffle(indexArr)
let symbolIndexArray = shuffle(symbolIndexArr)
let cardsymbolIndexArray =[];
const cardImg = document.querySelectorAll('.upcard')
const maincardImg = document.querySelectorAll('.shapes2')
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
let player1 = 0;
let player2 = 0;
let player3 = 0;
let player4 = 0;
let cuesscreen = 0;
let flipcount = 0;
let matchshape1 = 0;
let matchshape2 = 0;
let wincount = 0;
let reststaus = sessionStorage.getItem("reststatus")
let player1Array =[];
let player2Array =[];
let player3Array =[];
let player4Array =[];
let player1turn = 0;
let player2turn = 0;
let player3turn = 0;
let player4turn = 0;
let nextbutton = 1;
var cardid;

let cardlist = [sessionStorage.getItem("card1") ,sessionStorage.getItem("card2") , sessionStorage.getItem("card3"), sessionStorage.getItem("card4"), sessionStorage.getItem("card5"), sessionStorage.getItem("card6"), sessionStorage.getItem("card7"), sessionStorage.getItem("card8"), sessionStorage.getItem("card9"), sessionStorage.getItem("card10"), sessionStorage.getItem("card11"), sessionStorage.getItem("card12")]

let namelist = [sessionStorage.getItem("name1") ,sessionStorage.getItem("name2") , sessionStorage.getItem("name3"), sessionStorage.getItem("name4"), sessionStorage.getItem("name5"), sessionStorage.getItem("name6"), sessionStorage.getItem("name7"), sessionStorage.getItem("name8"), sessionStorage.getItem("name9"), sessionStorage.getItem("name10"), sessionStorage.getItem("name11"), sessionStorage.getItem("name12")]

let videolist = [sessionStorage.getItem("video1") ,sessionStorage.getItem("video2") , sessionStorage.getItem("video3"), sessionStorage.getItem("video4"), sessionStorage.getItem("video5"), sessionStorage.getItem("video6"), sessionStorage.getItem("video7"), sessionStorage.getItem("video8"), sessionStorage.getItem("video9"), sessionStorage.getItem("video10"), sessionStorage.getItem("video11"), sessionStorage.getItem("video12")]

let drawinglist = [sessionStorage.getItem("drawing1") ,sessionStorage.getItem("drawing2") , sessionStorage.getItem("drawing3"), sessionStorage.getItem("drawing4"), sessionStorage.getItem("drawing5"), sessionStorage.getItem("drawing6"), sessionStorage.getItem("drawing7"), sessionStorage.getItem("drawing8"), sessionStorage.getItem("drawing9"), sessionStorage.getItem("drawing10"), sessionStorage.getItem("drawing11"), sessionStorage.getItem("drawing12")]

let symbollist = ["images/bingo/box.png" ,"images/bingo/box_1.png" ,"images/bingo/cross.png", "images/bingo/cross_1.png", "images/bingo/heart.png", "images/bingo/heart_1.png", "images/bingo/round.png", "images/bingo/round_1.png", "images/bingo/star.png", "images/bingo/star_1.png", "images/bingo/triangle.png", "images/bingo/triangle_1.png"]

let cardsymbolllist = ["images/bingo/card_box.png" ,"images/bingo/card_box_1.png" ,"images/bingo/card_cross.png", "images/bingo/card_cross_1.png", "images/bingo/card_heart.png", "images/bingo/card_heart_1.png", "images/bingo/card_round.png", "images/bingo/card_round_1.png", "images/bingo/card_star.png", "images/bingo/card_star_1.png", "images/bingo/card_triangle.png", "images/bingo/card_triangle_1.png"]

function setImages() {
	
	if(reststaus == 1)
	{	player1 = sessionStorage.getItem("player1score");
		player2 = sessionStorage.getItem("player2score");
		player3 = sessionStorage.getItem("player3score");
		player4 = sessionStorage.getItem("player4score");
		document.getElementById("player1score").innerHTML = player1;
		document.getElementById("player2score").innerHTML = player2;
		document.getElementById("player3score").innerHTML = player3;
		document.getElementById("player4score").innerHTML = player4;
		sessionStorage.setItem("reststatus", 0);		
	}
	
	symbolIndexArray.splice(-6);
	
	for(let i = 0; i < symbolIndexArray.length; i++){
	player1Array.push(symbolIndexArray[i]);
	player2Array.push(symbolIndexArray[i]);
	player3Array.push(symbolIndexArray[i]);
	player4Array.push(symbolIndexArray[i]);
    }
	
	for(let i = 0; i < symbolIndexArray.length; i++){
	player1Array.push(symbolIndexArray[i]);
	player2Array.push(symbolIndexArray[i]);
	player3Array.push(symbolIndexArray[i]);
	player4Array.push(symbolIndexArray[i]);
    }
	
	shuffle(player1Array)
	shuffle(player2Array)
	shuffle(player3Array)
	shuffle(player4Array)


	for(let i = 0; i < cardlist.length; i++){
        cardImg[i].src = cardlist[indexArray[i]]
		cuescardImg[i].src = cardlist[indexArray[i]]
    }
	
	for(let i = 0; i < symbollist.length; i++){
        shapeImg[i].src = cardsymbolllist[cardsymbolIndexArray[i]]
		shapelist.push(cardsymbolIndexArray[i]);
    }
	

	document.getElementById("player1").innerHTML = sessionStorage.getItem("playername1")
	document.getElementById("player2").innerHTML = sessionStorage.getItem("playername2")
	document.getElementById("player3").innerHTML = sessionStorage.getItem("playername3")
	document.getElementById("player4").innerHTML = sessionStorage.getItem("playername4")
	
	if(playercount == 2){
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "none";
		document.getElementById("player4card").style.display = "none";
		document.getElementById("player1cardname").style.display = "block";
		document.getElementById("player2cardname").style.display = "block";
		document.getElementById("player3cardname").style.display = "none";
		document.getElementById("player4cardname").style.display = "none";
		document.getElementById("pack1").style.display = "block";
		document.getElementById("pack2").style.display = "block";
		document.getElementById("pack3").style.display = "none";
		document.getElementById("pack4").style.display = "none";
		
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
		document.getElementById("pack1").style.display = "block";
		document.getElementById("pack2").style.display = "block";
		document.getElementById("pack3").style.display = "block";
		document.getElementById("pack4").style.display = "none";
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
		document.getElementById("pack1").style.display = "block";
		document.getElementById("pack2").style.display = "block";
		document.getElementById("pack3").style.display = "block";
		document.getElementById("pack4").style.display = "block";
	}
	
}

function cardapper()
{
	
	document.getElementById("centercard").style.display = "block";
	document.getElementById("centercard").src = cardid
}

function setplayer(){
	

	if(currentplayer == 0){

		document.getElementById("cuesrid").style.display = "none"; 	
		maincardImg[0].src = cardlist[player1Array[player1turn]]
		document.getElementById("player1card").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "none"
		
		if(player1turn == 0)
		{
			
			document.getElementById("centercard").style.display = "none";
			document.getElementById("centerimage").style.display = "none";
		}
		
		else
		{
		if(playercount == 2)
		{
		  document.getElementById("animation").style.display = "block";
		  document.getElementById("centerimage").style.display = "block";
		  document.getElementById("centerimage").src = cardlist[player2Array[player2turn-1]]
		  cardid = cardlist[player2Array[player2turn-1]]
		  document.getElementById("animation").style.animationName = "toprightanim";		
		  document.getElementById("animation").style.animationPlayState = "initial";
		  setTimeout(cardapper, 1000);
		}
		
		if(playercount == 3)
		{
			document.getElementById("animation").style.display = "block";
		  document.getElementById("centerimage").style.display = "block";
		  document.getElementById("centerimage").src = cardlist[player3Array[player3turn-1]]
	      cardid = cardlist[player3Array[player3turn-1]]
		  document.getElementById("animation").style.animationName = "bottomleftanim";		
		  document.getElementById("animation").style.animationPlayState = "initial";
		  setTimeout(cardapper, 1000);
		}
		
		if(playercount == 4)
		{
		  document.getElementById("animation").style.display = "block";
		  document.getElementById("centerimage").style.display = "block";
		  document.getElementById("centerimage").src = cardlist[player4Array[player4turn-1]]	
		  cardid = cardlist[player4Array[player4turn-1]]
		  document.getElementById("animation").style.animationName = "bottomrightanim";		
		  document.getElementById("animation").style.animationPlayState = "initial";
		  setTimeout(cardapper, 1000);
		}			
		}
		

	}
	
	if(currentplayer == 1){
		document.getElementById("animation").style.display = "block";
		document.getElementById("centerimage").style.display = "block";
		document.getElementById("centerimage").src = cardlist[player1Array[player1turn-1]]		
		cardid = cardlist[player1Array[player1turn-1]]
		setTimeout(cardapper, 1000);
        document.getElementById("animation").style.animationName = "topleftanim";		
		document.getElementById("animation").style.animationPlayState = "initial";
		maincardImg[1].src = cardlist[player2Array[player2turn]]
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "none"
	}
	
	if(currentplayer == 2){
		document.getElementById("animation").style.display = "block";
		document.getElementById("centerimage").style.display = "block";		
		document.getElementById("centerimage").src = cardlist[player2Array[player2turn-1]]		
		cardid = cardlist[player2Array[player2turn-1]]
		setTimeout(cardapper, 1000);
		maincardImg[2].src = cardlist[player3Array[player3turn]]
		document.getElementById("animation").style.animationName = "toprightanim";		
		document.getElementById("animation").style.animationPlayState = "initial";
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player4card").style.border = "none"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player4cardname").style.border = "none"
	}
	
	if(currentplayer == 3){
		document.getElementById("animation").style.display = "block";
		document.getElementById("centerimage").style.display = "block";		
		document.getElementById("centerimage").src = cardlist[player3Array[player3turn-1]]
		cardid = cardlist[player3Array[player3turn-1]]
		setTimeout(cardapper, 1000);
		maincardImg[3].src = cardlist[player4Array[player4turn]]
		document.getElementById("animation").style.animationName = "bottomleftanim";		
		document.getElementById("animation").style.animationPlayState = "initial";
		document.getElementById("player1card").style.border = "none"
		document.getElementById("player2card").style.border = "none"
		document.getElementById("player3card").style.border = "none"
		document.getElementById("player4card").style.border = "0.3vw solid #e6ca82"
		document.getElementById("player1cardname").style.border = "none"
		document.getElementById("player2cardname").style.border = "none"
		document.getElementById("player3cardname").style.border = "none"
		document.getElementById("player4cardname").style.border = "0.3vw solid #e6ca82"
	}
	console. log(currentplayer)
}


function wincal(x) {
	
	if(x == 6 )
	{
		var array = [player1 , player2, player3, player4];
		var largest= 0;
		for (i=0; i<array.length; i++){
				if (array[i]>largest) {
					largest=array[i];
				}
		}
		
		
		
	if(player1 == largest){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername1")
		openwin()
	}
	if(player2 == largest){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername2")
		openwin()
	}
	if(player3 == largest){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername3")
		openwin()
	}
	if(player4 == largest){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername4")
		openwin()
	}
	
	}
}

function selecter(x) {
	console.log(flipcount);

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
	if(flipcount == 2 && isclickable == 1)
	{
	isclickable = 0;
	matchshape2 = shapelist[x]
	if(matchshape1 == matchshape2)
	{
	 symbolflip();
	}
	else
	{
	 document.getElementById("flipbtn").src = "images/flip.png"	
	}
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

function symbolflip() {
	
	if(nextbutton == 0)
{

document.getElementById("flipbtnnew").src = "images/next_disable.png"
nextbutton = 1

if(currentplayer == 0)
{
	
	player1turn++
	cardhoverout2(0)
}

if(currentplayer == 1)
{
	player2turn++
	cardhoverout2(1)
}

if(currentplayer == 2)
{
	player3turn++
	cardhoverout2(2)
}

if(currentplayer == 3)
{
	player4turn++
	cardhoverout2(3)
}

if(playercount == 2){
	if (currentplayer == 1)
	{
	currentplayer = 0
	}
	else
	{
	currentplayer++;
	}
}

if(playercount == 3){
	if (currentplayer == 2)
	{
	currentplayer = 0
	}
	else
	{
	currentplayer++;
	}
}
	
if(playercount == 4){
	if (currentplayer == 3)
	{
	currentplayer = 0
	}
	else
	{
	currentplayer++;
	}
}
	
	setplayer()
	
}
	}


	

		

window.onload = setImages(), setplayer()

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
  document.getElementById("maingrid").style.display = "none";
  document.getElementById("cuesrid").style.display = "grid";
}

function closecues() {
  cuesmodal.style.display = "none";
  document.getElementById("maingrid").style.display = "grid";
  document.getElementById("cuesrid").style.display = "none"; 
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

function resetcards() {
   sessionStorage.setItem("reststatus", 1);
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
     // cardImg[i].style.width = "9vw";
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
	document.getElementById("resetcardbutton").src = "images/reset_cards_over.png";
	}

function resetcardout(x) {
	document.getElementById("resetcardbutton").src = "images/reset_cards.png";
	}	
	
function cardhoverin(x) {
	x.style.transform = "scale(1.05)"
	}

function cardhoverout(x) {
	x.style.transform = "scale(1)"
	}

function cardhoverin2(x) {
	

	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(180deg)";
	if(nextbutton == 1)
{
document.getElementById("flipbtnnew").src = "images/next.png"
nextbutton = 0
}
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(180deg)";
	if(nextbutton == 1)
{
document.getElementById("flipbtnnew").src = "images/next.png"
nextbutton = 0
}
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(180deg)";
	if(nextbutton == 1)
{
document.getElementById("flipbtnnew").src = "images/next.png"
nextbutton = 0
}
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(180deg)";
	if(nextbutton == 1)
{
document.getElementById("flipbtnnew").src = "images/next.png"
nextbutton = 0
}
	}
	
	}

function cardhoverout2(x) {
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(0deg)";
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(0deg)";
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(0deg)";
	}
	
	if(currentplayer == x)
	{
	let flip = document.querySelectorAll('.flip-box-inner');
	flip[x].style.transform = "rotateY(0deg)";
	}
	
	}
	
function plusscore(x){
	
	if(x == 1)
	{
		player1++
		document.getElementById("player1score").innerHTML = player1;
		wincal(player1)
	}
	
	if(x == 2)
	{
		player2++
		wincal(player2)
		document.getElementById("player2score").innerHTML = player2;
	}
	
	if(x == 3)
	{
		player3++
		wincal(player3)
		document.getElementById("player3score").innerHTML = player3;
	}
	
	if(x == 4)
	{
		player4++
		wincal(player4)
		document.getElementById("player4score").innerHTML = player4;
	}
	
	}
	
function minusscore(x){
	
	if(x == 1)
	{
		if(player1 > 0){
		player1--
		document.getElementById("player1score").innerHTML = player1;
	}
	}
	
	if(x == 2)
	{
		if(player2 > 0){
		player2--
		document.getElementById("player2score").innerHTML = player2;
		}
	}
	
	if(x == 3)
	{
		if(player3 > 0){
		player3--
		document.getElementById("player3score").innerHTML = player3;
		}
	}
	
	if(x == 4)
	{
		if(player4 > 0){
		player4--
		document.getElementById("player4score").innerHTML = player4;
		}
	}
	
	}	