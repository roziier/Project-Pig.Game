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
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let currentScore = 0;

// Roll the dice
rollDice.addEventListener("click", function () {
  // 1 - Generate a random number (1-6)
  let randomDiceNum = Math.floor(Math.random() * 6 + 1);
  console.log(randomDiceNum);
  //   2 - Display the number
  dice.classList.remove("hidden");
  dice.src = `img/dice-${randomDiceNum}.png`;
  //   3 - Conditions
  if (randomDiceNum != 1) {
    currentScore = randomDiceNum;
    curr_score0.textContent = currentScore;
  } else {
    //  Switch player
    currentScore = 0;
    curr_score0.textContent = currentScore;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  }
});
