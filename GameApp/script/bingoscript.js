let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let symbolIndexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let cardindexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let indexArray = shuffle(indexArr)
let symbolIndexArray = shuffle(symbolIndexArr)
let cardsymbolIndexArray = shuffle(cardindexArr)
const cardImg = document.querySelectorAll('.upcard')
const cuescardImg = document.querySelectorAll('.cusescard')
const shapeImg = document.querySelectorAll('.shapes')
const shapelist = [];
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

let cardlist = [sessionStorage.getItem("card1") ,sessionStorage.getItem("card2") , sessionStorage.getItem("card3"), sessionStorage.getItem("card4"), sessionStorage.getItem("card5"), sessionStorage.getItem("card6"), sessionStorage.getItem("card7"), sessionStorage.getItem("card8"), sessionStorage.getItem("card9"), sessionStorage.getItem("card10"), sessionStorage.getItem("card11"), sessionStorage.getItem("card12")]

let namelist = [sessionStorage.getItem("name1") ,sessionStorage.getItem("name2") , sessionStorage.getItem("name3"), sessionStorage.getItem("name4"), sessionStorage.getItem("name5"), sessionStorage.getItem("name6"), sessionStorage.getItem("name7"), sessionStorage.getItem("name8"), sessionStorage.getItem("name9"), sessionStorage.getItem("name10"), sessionStorage.getItem("name11"), sessionStorage.getItem("name12")]

let videolist = [sessionStorage.getItem("video1") ,sessionStorage.getItem("video2") , sessionStorage.getItem("video3"), sessionStorage.getItem("video4"), sessionStorage.getItem("video5"), sessionStorage.getItem("video6"), sessionStorage.getItem("video7"), sessionStorage.getItem("video8"), sessionStorage.getItem("video9"), sessionStorage.getItem("video10"), sessionStorage.getItem("video11"), sessionStorage.getItem("video12")]

let drawinglist = [sessionStorage.getItem("drawing1") ,sessionStorage.getItem("drawing2") , sessionStorage.getItem("drawing3"), sessionStorage.getItem("drawing4"), sessionStorage.getItem("drawing5"), sessionStorage.getItem("drawing6"), sessionStorage.getItem("drawing7"), sessionStorage.getItem("drawing8"), sessionStorage.getItem("drawing9"), sessionStorage.getItem("drawing10"), sessionStorage.getItem("drawing11"), sessionStorage.getItem("drawing12")]

let symbollist = ["images/bingo/box.png" ,"images/bingo/box_1.png" ,"images/bingo/cross.png", "images/bingo/cross_1.png", "images/bingo/heart.png", "images/bingo/heart_1.png", "images/bingo/round.png", "images/bingo/round_1.png", "images/bingo/star.png", "images/bingo/star_1.png", "images/bingo/triangle.png", "images/bingo/triangle_1.png"]

let cardsymbolllist = ["images/bingo/card_box.png" ,"images/bingo/card_box_1.png" ,"images/bingo/card_cross.png", "images/bingo/card_cross_1.png", "images/bingo/card_heart.png", "images/bingo/card_heart_1.png", "images/bingo/card_round.png", "images/bingo/card_round_1.png", "images/bingo/card_star.png", "images/bingo/card_star_1.png", "images/bingo/card_triangle.png", "images/bingo/card_triangle_1.png"]

function setImages() {
	for(let i = 0; i < cardlist.length; i++){
        cardImg[i].src = cardlist[indexArray[i]]
		cuescardImg[i].src = cardlist[indexArray[i]]
    }
	
	for(let i = 0; i < symbollist.length; i++){
        shapeImg[i].src = symbollist[symbolIndexArr[i]]
		shapelist.push(symbolIndexArr[i]);
    }
	document.getElementById("player1").innerHTML = sessionStorage.getItem("playername1")
	document.getElementById("player2").innerHTML = sessionStorage.getItem("playername2")
	document.getElementById("player3").innerHTML = sessionStorage.getItem("playername3")
	document.getElementById("player4").innerHTML = sessionStorage.getItem("playername4")
	
	if(playercount == 2){
		shapelist.splice(-6);
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "none";
		document.getElementById("player4card").style.display = "none";
	}
	
	if(playercount == 3){
		shapelist.splice(-3);
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "block";		
		document.getElementById("player4card").style.display = "none";
		
		var d = document.getElementById("player3card");
		d.style.position = "fixed";
		d.style.left = "21.5%";
		d.style.top = "80%";
	}
	
	if(playercount == 4){
		document.getElementById("player1card").style.display = "block";
		document.getElementById("player2card").style.display = "block";
		document.getElementById("player3card").style.display = "block";
		document.getElementById("player4card").style.display = "block";
	}
	
}



function setplayer(){
	if(currentplayer == 0){
		const P1 = document.querySelectorAll('.parentleftside')
		P1[0].style.border = "0.3vw solid #0f1d9c"
		const P2 = document.querySelectorAll('.parentrightside')
		P2[0].style.border = "none"
		const P3 = document.querySelectorAll('.parentbottom')
		P3[0].style.border = "none"
		const P4 = document.querySelectorAll('.parentbottomleft')
		P4[0].style.border = "none"
	}
	
	if(currentplayer == 1){
		const P1 = document.querySelectorAll('.parentleftside')
		P1[0].style.border = "none"
		const P2 = document.querySelectorAll('.parentrightside')
		P2[0].style.border = "0.3vw solid #0f1d9c"
		const P3 = document.querySelectorAll('.parentbottom')
		P3[0].style.border = "none"
		const P4 = document.querySelectorAll('.parentbottomleft')
		P4[0].style.border = "none"
	}
	
	if(currentplayer == 2){
		const P1 = document.querySelectorAll('.parentleftside')
		P1[0].style.border = "none"
		const P2 = document.querySelectorAll('.parentrightside')
		P2[0].style.border = "none"
		const P3 = document.querySelectorAll('.parentbottom')
		P3[0].style.border = "0.3vw solid #0f1d9c"
		const P4 = document.querySelectorAll('.parentbottomleft')
		P4[0].style.border = "none"
	}
	
	if(currentplayer == 3){
		const P1 = document.querySelectorAll('.parentleftside')
		P1[0].style.border = "none"
		const P2 = document.querySelectorAll('.parentrightside')
		P2[0].style.border = "none"
		const P3 = document.querySelectorAll('.parentbottom')
		P3[0].style.border = "none"
		const P4 = document.querySelectorAll('.parentbottomleft')
		P4[0].style.border = "0.3vw solid #0f1d9c"
	}
	
}


function wincal() {
	if(player1 == 3){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername1")
		openwin()
	}
	if(player2 == 3){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername2")
		openwin()
	}
	if(player3 == 3){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername3")
		openwin()
	}
	if(player4 == 3){
		document.getElementById("playername").innerHTML = sessionStorage.getItem("playername4")
		openwin()
	}
	}

function selecter(x) {
	if(isclickable == 1)
	{
	isclickable = 1	
	for(let i = 0; i < symbollist.length; i++){	
        if(x == i)
	{
		cardImg[i].src = cardsymbolllist[cardsymbolIndexArray[i]]
		cardImg[i].parentElement.classList.add('imgselected') 
		selectshape = cardsymbolIndexArray[i]
	}
	
    }		
		for(let i = 0; i < shapelist.length; i++){
        if(shapelist[i] == selectshape)
		{
			isclickable = 0
		}
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

function symbolselecter(x,y,z) {
	playershape = document.querySelectorAll(y)
	if(isclickable == 0)
	{
		if(selectshape == symbolIndexArr[x]){
	isclickable = 1
	playershape[0].style.backgroundColor = "#68ac3a"
	playershape[0].style.border = "0.2vw solid #48881c"
	
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
	
	if(z == 0){
		player1++
		}
	if(z == 1){
		player2++
		}
	if(z == 2){
		player3++
		}
	if(z == 3){
		player4++
		}
	
	setplayer()
	wincal()
	}

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

function windowsize() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var screencal = w/h;
  
  if(screencal > 1.88)
  {
	 for(let i = 0; i < cardImg.length; i++){
     // cardImg[i].style.width = "12vw";
	 }
	 
	 for(let i = 0; i < shapeImg.length; i++){
     shapeImg[i].style.width = "2vw";
	 shapeImg[i].style.height = "2vw";
	 }
  }
  else
  {
	for(let i = 0; i < cardImg.length; i++){
     // cardImg[i].style.width = "13vw";
	 }
	 
	 for(let i = 0; i < shapeImg.length; i++){
     shapeImg[i].style.width = "3.5vw";
	 shapeImg[i].style.height = "3.5vw";
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
	
function cardhoverin(x) {
	console.log(x)
	x.style.transform = "scale(1.05)"
	}

function cardhoverout(x) {
	x.style.transform = "scale(1)"
	}		