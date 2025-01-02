/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let deck = [
  { card: "dA", value: 11 },
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
  { card: "hA", value: 11 },
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
  { card: "cA", value: 11 },
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
  { card: "sA", value: 11 },
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
let playerHand = [];
let dealerHand = [];
let winner;
let turn;
let message;
let tie;
let playerHandValue = [];
let dealerHandValue = [];
/*------------------------ Cached Element References ------------------------*/
let hitmeBtn = document.querySelector(".hitme-button");
let standBtn = document.querySelector(".stand-button");
let playerHandEl = document.querySelector("#player-hand");
let dealerHandEl = document.querySelector("#dealer-hand");
let newHandBtn = document.querySelector(".newhand-button");
let newGameBtn = document.querySelector(".newgame-button");
let winMessage = document.getElementById("win-message");
/*-------------------------------- Functions --------------------------------*/
function renderMessage(winner, tie, playerSum) {
  if (winner === true) {
    winMessage.innterText = `Congratualtions player! You Win with ${playerSum} points!`;
  } else if (tie === true) {
    winMessage.innerText = `It's a tie! With ${playerSum} points!`;
  } else if (winner === false) {
    winMessage.innerText = `Player you loose.`;
  }
}

function gameStop(winner) {
  if (winner !== undefined || tie === true) {
    hitmeBtn.disabled = true;
    standBtn.disabled = true;
  }
}

function newDeck() {
  console.log("new deeeck");
  deck.push(
    { card: "dA", value: 11 },
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
    { card: "hA", value: 11 },
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
    { card: "cA", value: 11 },
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
    { card: "sA", value: 11 },
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
    { card: "s02", value: 2 }
  );
}

function aceRule(winner) {
  if (winner === false) {
    let aceCard = playerHandValue.indexOf(11);
    if (aceCard !== -1) {
      playerHandValue[aceCard] = 1;
      winner = undefined;
      addHand(playerHandValue, dealerHandValue);
    }
    // else {
    //  winner = false;
    // renderMessage(winner)
    // }
    return;
  }
  console.log(playerHandValue);
}

function checkWin(playerSum, dealerSum) {
  if (turn === true) {
    if (playerSum > 21) {
      winner = false; // this might be an issue
      aceRule(winner);
    } else if (playerSum < 22 && playerSum === 21) {
      return (winner = true);
    } else {
      return;
    }
    console.log(winner, "<- winner stat1");
  }
  if (turn === false) {
    if (dealerSum === 21) {
      return (winner = false);
    } else if (dealerSum > 21) {
      return (winner = true);
    } else if (dealerSum > 17 && dealerSum < playerSum) {
      return (winner = true);
    } else if (dealerSum > playerSum) {
      return (winner = false);
    } else if (playerSum === dealerSum) {
      return tie === true;
    }
  }
  gameStop(winMessage, tie);
  renderMessage(winner, tie, playerSum);
  //gameStop(winner);
  console.log(winner, "<- winner stat2");
}
function dealer17Logic(dealerSum) {
  if (turn === false && dealerSum <= 17) {
    deal();
  } else {
    checkWin(dealerSum);
  }
  return dealerSum;
}
function renderHiddenCard(newCard) {
  let divEl = document.createElement("div");
  dealerHandEl.appendChild(divEl);
  divEl.classList.add("card");
  divEl.classList.add(newCard);
  divEl.classList.add("back-red");
  divEl.classList.add("cardtag");
  divEl.id = "hidden-card";
}

function renderDealerCard(newCard) {
  let divEl = document.createElement("div");
  dealerHandEl.appendChild(divEl);
  divEl.classList.add("card");
  divEl.classList.add(newCard);
  divEl.classList.add("cardtag");
}

function flipCard() {
  let dealerHiddenCard = document.getElementById("hidden-card");
  dealerHiddenCard.classList.remove("back-red");
}

function dealerTurn() {
  turn = false;
  deal();
  flipCard();
}

function updateCard(newCard) {
  let divEl = document.createElement("div");
  divEl.classList.add("card");
  divEl.classList.add("cardtag");
  divEl.classList.add(newCard);
  if (turn === true) {
    playerHandEl.appendChild(divEl);
  } else if (turn === false) {
    dealerHandEl.appendChild(divEl);
  }
  return divEl;
}

function addHand(playerHandValue, dealerHandValue) {
  let playerSum = playerHandValue.reduce(function (acc, newValue) {
    return acc + newValue;
  }, 0);
  let dealerSum = dealerHandValue.reduce(function (acc, newValue) {
    return acc + newValue;
  }, 0);
  checkWin(playerSum, dealerSum);
  dealer17Logic(dealerSum);
  console.log(playerSum, "<- player sum");
  console.log(dealerSum, "<- dealer sum");
  console.log(winner, "winner check");
  return playerSum, dealerSum;
}

function pushTwoCards(newCard, newCardValue) {
  dealerHand.push(newCard);
  dealerHandValue.push(newCardValue);
  if (dealerHand.length === 1) {
    renderDealerCard(newCard);
  }
  if (dealerHand.length === 2) {
    renderHiddenCard(newCard);
  }
  console.log(dealerHand, "<- dealerHand");
  return newCard, newCardValue;
}

function pushNewCardValaue(newCardValue) {
  if (turn === true) {
    playerHandValue.push(newCardValue);
    console.log(playerHandValue, "<-player hand value");
  } else if (turn === false) {
    dealerHandValue.push(newCardValue);
    console.log(dealerHandValue, "<-dealer hand value");
  }
  addHand(playerHandValue, dealerHandValue);
  return playerHandValue, dealerHandValue;
}

function pushNewCard(newCard) {
  if (turn === true) {
    playerHand.push(newCard);
    console.log(playerHand, "<-player hand");
  } else if (turn === false) {
    dealerHand.push(newCard);
    console.log(dealerHand, "<-dealer hand");
  }
}

function deal() {
  if (winner === true) {
    return;
  }
  if (deck.length === 0) {
    newDeck();
  }
  let randomIdx = Math.floor(Math.random() * deck.length);
  let newCardObj = deck.splice(randomIdx, 1)[0];
  let newCard = newCardObj.card;
  let newCardValue = newCardObj.value;
  pushNewCard(newCard);
  pushNewCardValaue(newCardValue);
  updateCard(newCard);
  return newCardObj, newCard, newCardValue;
}

function initiatePlayer() {
  turn = true;
  deal();
  deal();
}

function initiateDealer() {
  let randomIdx = Math.floor(Math.random() * deck.length);
  let newCardObj = deck.splice(randomIdx, 1)[0];
  let newCard = newCardObj.card;
  let newCardValue = newCardObj.value;
  pushTwoCards(newCard, newCardValue);
  return newCard, newCardValue;
}

function newHand() {
  playerHand = [];
  dealerHand = [];
  playerHandValue = [];
  dealerHandValue = [];
  winMessage.innerText = "";
  winner = undefined;
  tie = undefined;
  cardEls = document.querySelectorAll(".cardtag");
  cardEls.forEach((card) => {
    card.remove();
    hitmeBtn.disabled = false;
    standBtn.disabled = false;
  });
  console.log("newhand clicked");
  initiatePlayer();
  initiateDealer();
  initiateDealer();
  console.log(dealerHand, playerHand);
  console.log(winner, tie, turn);
  console.log(deck.length);
  console.log(deck);
}
function newGame() {
  playerHand = [];
  dealerHand = [];
  playerHandValue = [];
  dealerHandValue = [];
  winner = undefined;
  tie = undefined;
  winMessage.innerText = "";
  deck = [
    { card: "dA", value: 11 },
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
    { card: "hA", value: 11 },
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
    { card: "cA", value: 11 },
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
    { card: "sA", value: 11 },
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
  cardEls = document.querySelectorAll(".cardtag");
  cardEls.forEach((card) => {
    card.remove();
    hitmeBtn.disabled = false;
    standBtn.disabled = false;
  });
  console.log("newgame clicked");
  initiatePlayer();
  initiateDealer();
  initiateDealer();
  console.log(dealerHand, playerHand, playerHandValue, dealerHandValue);
  console.log(winner, tie, turn);
  console.log(deck.length);
  console.log(deck);
}
initiatePlayer();
initiateDealer();
initiateDealer();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
newHandBtn.addEventListener("click", newHand);
newGameBtn.addEventListener("click", newGame);

// function aceRule() {
//   if (winner === false) {
//     let dAIdx = deck.find((cardObj) => cardObj.card === "dA");
//     let hAIdx = deck.find((cardObj) => cardObj.card === "hA");
//     let cAIdx = deck.find((cardObj) => cardObj.card === "cA");
//     let sAIdx = deck.find((cardObj) => cardObj.card === "sA");
//     dAIdx.value = 1;
//     hAIdx.value = 1;
//     cAIdx.value = 1;
//     sAIdx.value = 1;
//   }
// }
