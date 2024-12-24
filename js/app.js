/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let deck = [];
let playerHand = [];
let dealerHand = [];
let winner;
let turn;
let message;
let tie;
/*------------------------ Cached Element References ------------------------*/
let hitmeBtn = document.querySelector(".hitme-button");
let standBtn = document.querySelector(".stand-button");
/*-------------------------------- Functions --------------------------------*/
function winMessage() {
  if ((winner = true)) {
    message = "Congratualtions player! You Win with ${playerSum}!";
  } else if (tie === true) {
    message = "It's a tie! With ${layerSum} points!";
  } else if (winner === false) {
    message = "Player you loose.";
  }
}

function checkWin(playerSum, dealerSum) {
  if (playerSum === 21) {
    winner = true;
  } else if (playerSum > 21) {
    winner = false;
  } else {
    return;
  }
  if (dealerSum === 21) {
    winner = false;
  } else if (dealerSum > 21) {
    winner = true;
  } else if (playerSum === dealerSum) {
    tie === true;
  } else {
    deal();
  }
}

function dealerTurn() {
  //changeName?
  //Element.classList.remove('back-blue');
  turn = false;
  deal();
}

function addHand(newCard) {
  let playerSum = playerHand.reduce(function (acc, newCard) {
    return acc + newCard;
  }, 0);
  let dealerSum = dealerHand.reduce(function (acc, newCard) {
    return acc + newCard;
  }, 0);
  checkWin(playerSum, dealerSum);
  console.log(playerSum);
  console.log(dealerSum);
}
function pushNewCard(newCard) {
  if (turn === true) {
    playerHand.push(newCard);
    console.log(playerHand, "<-player hand");
  } else if (turn === false) {
    dealerHand.push(newCard);
    console.log(dealerHand, "<-dealer hand");
  }
  addHand(newCard);
}

function deal() {
  let randomIdx = Math.floor(Math.random() * deck.length);
  let newCard = deck.splice(randomIdx, 1)[0];
  pushNewCard(newCard);
  return newCard;
}

function initiate() {
  deck = [
    "dA",
    "dQ",
    "dK",
    "dJ",
    "d10",
    "d09",
    "d08",
    "d07",
    "d06",
    "d05",
    "d04",
    "d03",
    "d02",
    "hA",
    "hQ",
    "hK",
    "hJ",
    "h10",
    "h09",
    "h08",
    "h07",
    "h06",
    "h05",
    "h04",
    "h03",
    "h02",
    "cA",
    "cQ",
    "cK",
    "cJ",
    "c10",
    "c09",
    "c08",
    "c07",
    "c06",
    "c05",
    "c04",
    "c03",
    "c02",
    "sA",
    "sQ",
    "sK",
    "sJ",
    "s10",
    "s09",
    "s08",
    "s07",
    "s06",
    "s05",
    "s04",
    "s03",
    "s02",
  ];
  playerHand = [];
  dealerHand = [];
  turn = true;
}
initiate();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
