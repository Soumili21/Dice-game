var randomNumber1=Math.floor((Math.random ()*6)+1);
console.log(randomNumber1);

var randomDiceImage1= "dice" + randomNumber1 + ".png";

var randomImageSource1= "images/" + randomDiceImage1;

var image1= document.querySelector(".img1")
image1.setAttribute("src",randomImageSource1);
/.............................................................................../ 

var randomNumber2=Math.floor((Math.random()*6)+1);

var randomDiceImage2="dice" + randomNumber2 +".png";

var randomImageSource2="images/" + randomDiceImage2;

var image2=document.querySelector(".img2");
image2.setAttribute("src",randomImageSource2);

var heading= document.querySelector("h1");
if (randomNumber1>randomNumber2){
    heading.textContent="🚩 Player 1 Wins !";
}
else if(randomNumber1<randomNumber2){
    heading.textContent="Player 2 Wins! 🚩";
}
else{
    heading.textContent="Draw!"
}