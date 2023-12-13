// document.getElementsByClassName("dice").setAttribute("img", "dice2.png")

var randomNumber1 = 2;

var Dice1 = Math.floor((Math.random() * 6) + 1);
var Dice2 = Math.floor((Math.random() * 6) + 1);

if (Dice1 > Dice2) {
    document.querySelector("#winner").innerText = "Player 1 wins!";
} else if (Dice2 > Dice1) {
    document.querySelector("#winner").innerText = "Player 2 wins!";
} else {
    document.querySelector("#winner").innerText = "It's a tie!";
}


document.querySelector("#dice1").innerText = "Dice1 result: " + Dice1;

document.querySelector("#dice2").innerText = "Dice2 result: " + Dice2;
// var dice = document.querySelector(".img1").setAttribute("src", "/images/dice2.png");

//My solution :)
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.src = "./images/dice" + Dice1 + ".png";
dice2.src = "./images/dice" + Dice2 + ".png";


//Angela's solution



// document.querySelector(".img1").innerHTML = "/images/" + Dice1 + ".png";

console.log(Dice1);
console.log(Dice2);
// if (Dice1 || Dice2 === 1) {
//     dice1.src = "/images/dice1.png";
//     dice2.src = "/images/dice1.png";
// } else if (Dice1 || Dice2 === 2) {
//     dice1.src = "/images/dice2.png";
//     dice2.src = "/images/dice2.png";
// } else if (Dice1 || Dice2 === 3) {
//     dice1.src = "/images/dice3.png";
//     dice2.src = "/images/dice3.png";
// } else if (Dice1 || Dice2 === 4) {
//     dice1.src = "/images/dice4.png";
//     dice2.src = "/images/dice4.png";
// } else if (Dice1 || Dice2 === 5) {
//     dice1.src = "/images/dice5.png";
//     dice2.src = "/images/dice5.png";
// } else {
//     dice1.src = "/images/dice6.png";
//     dice2.src = "/images/dice6.png";
// };