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
  let newCard = deck.splice(randomIdx, 1)[0].card;
  pushNewCard(newCard);
  return newCard;
}

function initiate() {
  deck = [
    { card: "dA", value: 1 },
    { card: "dQ", value: 10 },
    { card: "dk", value: 10 },
    { card: "dj", value: 10 },
    { card: "d10", value: 10 },
    { card: "d09", value: 9 },
    { card: "d08", value: 8 },
    { card: "d07", value: 7 },
    { card: "d06", value: 6 },
    { card: "d05", value: 5 },
    { card: "d04", value: 4 },
    { card: "d03", value: 3 },
    { card: "d02", value: 2 },
    { card: "hA", value: 1 },
    { card: "hQ", value: 10 },
    { card: "hk", value: 10 },
    { card: "hj", value: 10 },
    { card: "h10", value: 10 },
    { card: "h09", value: 9 },
    { card: "h08", value: 8 },
    { card: "h07", value: 7 },
    { card: "h06", value: 6 },
    { card: "h05", value: 5 },
    { card: "h04", value: 4 },
    { card: "h03", value: 3 },
    { card: "h02", value: 2 },
    { card: "cA", value: 1 },
    { card: "cQ", value: 10 },
    { card: "ck", value: 10 },
    { card: "cj", value: 10 },
    { card: "c10", value: 10 },
    { card: "c09", value: 9 },
    { card: "c08", value: 8 },
    { card: "c07", value: 7 },
    { card: "c06", value: 6 },
    { card: "c05", value: 5 },
    { card: "c04", value: 4 },
    { card: "c03", value: 3 },
    { card: "c02", value: 2 },
    { card: "dA", value: 1 },
    { card: "sQ", value: 10 },
    { card: "sk", value: 10 },
    { card: "sj", value: 10 },
    { card: "s10", value: 10 },
    { card: "s09", value: 9 },
    { card: "s08", value: 8 },
    { card: "s07", value: 7 },
    { card: "s06", value: 6 },
    { card: "s05", value: 5 },
    { card: "s04", value: 4 },
    { card: "s03", value: 3 },
    { card: "s02", value: 2 },
  ];
  playerHand = [];
  dealerHand = [];
  turn = true;
  console.log(deal.length);
}
initiate();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
