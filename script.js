"use strict";
// document.querySelector(".message").textContent = "Fuck you";
// document.querySelector(".message1").textContent = "Fuck you";
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "Enter a number";
  } else if (guess > number && score > 0) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You lose!";
    }
  } else if (guess < number && score > 0) {
    document.querySelector(".message").textContent = "Too low!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You lose!";
    }
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Congrats!";
    document.querySelector(".rightbox").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".rightbox").style.backgroundColor = "red";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
});

let number1 = Math.trunc(Math.random() * 20) + 1;
let score1 = 20;
let highscore1 = 0;

document.querySelector(".check1").addEventListener("click", function () {
  const guess1 = Number(document.querySelector(".guess1").value);
  console.log(guess1);
  if (!guess1) {
    document.querySelector(".message").textContent = "Enter a number";
  } else if (guess1 > number1 && score1 > 0) {
    document.querySelector(".message1").textContent = "Too high!";
    score1--;
    document.querySelector(".score1").textContent = score1;
    if (score1 === 0) {
      document.querySelector(".message1").textContent = "You lose!";
    }
  } else if (guess1 < number1 && score1 > 0) {
    document.querySelector(".message1").textContent = "Too low!";
    score1--;
    document.querySelector(".score1").textContent = score1;
    if (score1 === 0) {
      document.querySelector(".message1").textContent = "You lose!";
    }
  } else if (guess1 === number1) {
    document.querySelector(".message1").textContent = "Congrats!";
    document.querySelector(".leftbox").style.backgroundColor = "#60b347";
    document.querySelector(".number1").textContent = number1;
    if (score1 > highscore1) {
      highscore1 = score1;
      document.querySelector(".highscore1").textContent = highscore1;
    }
  }
});

document.querySelector(".again1").addEventListener("click", function () {
  number1 = Math.trunc(Math.random() * 20) + 1;
  score1 = 20;
  document.querySelector(".score1").textContent = score1;
  document.querySelector(".guess1").value = "";
  document.querySelector(".leftbox").style.backgroundColor = "blue";
  document.querySelector(".message1").textContent = "Start guessing...";
  document.querySelector(".number1").textContent = "?";
});

if (highscore > highscore1 && highscore > 0 && highscore1 > 0) {
  alert("Player one beats player two");
} else if (highscore < highscore1 && highscore > 0 && highscore1 > 0) {
  alert("Player two beats player one");
} else if (highscore === highscore1 && highscore > 0 && highscore1 > 0) {
  alert("Its a draw!");
}
