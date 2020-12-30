// Create const for every element that will change
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const name0 = document.getElementById("name--0");
const name1 = document.getElementById("name--1");
const curr_score0 = document.getElementById("current--0");
const curr_score1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
