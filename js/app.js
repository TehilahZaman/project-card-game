/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let deck = [];
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
function renderMessage() {
  if (turn === true && winner === true) {
    winMessage.innerText = `Congratualtions player! You win with ${playerSum} points!`;
  } else if (turn === true && winner === false) {
    winMessage.innerText = `Player you loose with ${playerSum} points.`;
  } else if (turn === false && winner === true) {
    winMessage.innerText = `Congratualtions player! You win with ${playerSum} points to dealer's ${dealerSum} points!`;
  } else if (turn === false && winner === false) {
    winMessage.innerText = `Player you loose with ${playerSum} points to dealer's ${dealerSum} points.`;
  } else if (tie === true) {
    winMessage.innerText = `It's a tie! With ${playerSum} points!`;
  }
  console.log(playerSum, dealerSum, winner, "line 30");
}

function gameStop(winner) {
  if (winner !== undefined || tie === true) {
    hitmeBtn.disabled = true;
    standBtn.disabled = true;
  }
}

function newDeck() {
  console.log("new deeeck");
  deck = [
    { card: "dA", value: 11 },
    { card: "dQ", value: 10 },
    { card: "dK", value: 10 },
    { card: "dJ", value: 10 },
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
    { card: "hK", value: 10 },
    { card: "hJ", value: 10 },
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
    { card: "cK", value: 10 },
    { card: "cJ", value: 10 },
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
    { card: "sK", value: 10 },
    { card: "sJ", value: 10 },
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
}

function activateBtns() {
  hitmeBtn.disabled = false;
  standBtn.disabled = false;
}

function aceRule(turn, winner, playerSum, dealerSum) {
  if (turn === true) {
    let aceCardIdx = playerHand.findIndex((card) => card.value === 11);
    if (aceCardIdx !== -1) {
      playerHand[aceCardIdx].value = 1;
      //winner;
      checkWin(playerHand, dealerHand); // this is checking win .
      activateBtns();
      console.log(winner, playerHand);
    } else {
      winner = false;
      //renderMessage(winner, playerSum); // forgot to add sum to players turn
      return false; // added a reutn false for plaayer
    }
  } else if (turn === false) {
    let aceCardIdx = dealerHand.findIndex((card) => card.value === 11);
    if (aceCardIdx !== -1) {
      dealerHand[aceCardIdx].value = 1;
      winner;
      checkWin(playerHand, dealerHand);
      activateBtns();
      console.log(winner, dealerHand);
    } else {
      return false;
    }
  }
  return winner;
} // this function should just check for a ace and flip the value, does not need to set winner to null

function checkWin() {
  playerSum = addPlayerHand(playerHand);
  dealerSum = addDealerHand(dealerHand);
  dealer17Logic(dealerSum);

  if (turn === true) {
    if (playerSum > 21) {
      aceRule(turn, winner);
      winner = false;
    } else if (playerSum < 22 && playerSum === 21) {
      winner = true;
    } else {
      return; // added return in conditions are not met
    }
    console.log(winner, "<- winner stat1");
    renderMessage();
    return; //is this necessary?
  }
  if (turn === false) {
    if (dealerSum === 21) {
      winner = false;
    } else if (dealerSum > 21) {
      aceRule(turn, winner);
      winner = true; //delete me
    } else if (dealerSum > 17 && dealerSum < playerSum) {
      winner = true;
    } else if (dealerSum > playerSum) {
      winner = false;
    } else if (playerSum === dealerSum) {
      tie = true;
    }
  }
  gameStop(winner, tie);
  renderMessage();
  console.log(winner, "<- winner stat2");
  console.log(playerSum, dealerSum);
  return winner;
}

function dealer17Logic(dealerSum) {
  if (turn === false && dealerSum <= 17) {
    deal();
    // return true;
  } else {
    //return false;
  }
  return dealerSum;
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

function renderCard(newCardObj) {
  console.log(newCardObj, "newcardobj test");
  let divEl = document.createElement("div");
  divEl.classList.add("card");
  divEl.classList.add(newCardObj.card);
  divEl.classList.add("cardtag");
  if (turn === true) {
    setTimeout(() => {
      playerHandEl.appendChild(divEl);
      checkWin(playerHand, dealerHand);
    }, 250);
  } else if (turn === false) {
    setTimeout(() => {
      dealerHandEl.appendChild(divEl);
      // animation class
      checkWin(playerHand, dealerHand); // here would be checkwin in place of addHand >
    }, 400);
  } else if (turn === undefined) {
    dealerHandEl.appendChild(divEl);
    if (dealerHandEl.children.length > 1) {
      dealerHandEl.children[1].classList.add("back-red");
      dealerHandEl.children[1].id = "hidden-card";
    }
    // console.log(dealerHandEl.children[1]);
  }
  return divEl;
}

function addPlayerHand(playerHand) {
  const sum = playerHand.reduce(function (sum, playerCard) {
    return sum + playerCard.value;
  }, 0);
  return sum;
}
function addDealerHand(dealerHand) {
  const sum = dealerHand.reduce(function (sum, dealerCard) {
    return sum + dealerCard.value;
  }, 0);
  return sum;
}

function pushNewCard(newCardObj) {
  if (turn === true) {
    playerHand.push(newCardObj);
  } else if (turn === false) {
    dealerHand.push(newCardObj);
  } else if (turn === undefined) {
    dealerHand.push(newCardObj);
  }
  renderCard(newCardObj);
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

  pushNewCard(newCardObj);
  return newCardObj;
}

function initiateDealer() {
  turn = undefined;
  deal();
  deal();
  initiatePlayer();
}
function initiatePlayer() {
  turn = true;
  deal();
  deal();
}

function newHand() {
  playerHand = [];
  dealerHand = [];
  winMessage.innerText = "";
  winner = undefined;
  tie = undefined;
  let cardEls = document.querySelectorAll(".cardtag"); // why doesn't this work outside?
  cardEls.forEach((card) => {
    card.remove();
  });
  activateBtns();
  initiateDealer();
  console.log("newhand clicked");
  console.log(cardEls);
  console.log(dealerHand, playerHand);
  console.log(winner, tie, turn);
  console.log(deck.length);
  console.log(deck);
}
function newGame() {
  newHand();
  newDeck();
  console.log("newgame clicked");
}

initiateDealer();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
newHandBtn.addEventListener("click", newHand);
newGameBtn.addEventListener("click", newGame);

// newDeck = {
//   suits: ["s", "k", "d", "c"],
//   //numbers: [02, 03, ],
//   values: [],
// };

// function otherNewDeck() {
//   let deck = [];
//   let card = {};
//   let idx = Math.floor(Math.random() * 4);
//   let index = Math.floor(Math.random() * 12);
//   suits = ["s", "k", "d", "c"];
//   let cards = [
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   card.face = suits[idx].concat(cards[index]);
//   card.value = index;
//   // for (let i = 0; i < 4; i++) {
//   //   for (let f = 0; f < 12; f++) {
//   //   }
//   // }
//   deck.push(card);
//   //console.log();
//   console.log(card);
//   console.log(deck);
// }
// otherNewDeck();
