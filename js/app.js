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
let playerHandEl = document.querySelector("#player-hand");
let dealerHandEl = document.querySelector("#dealer-hand");
let newHandBtn = document.querySelector(".newhand-button");
let newGameBtn = document.querySelector(".newgame-button");
let winMessage = document.getElementById("win-message");
let helpBtn = document.querySelector(".help-button");
/*-------------------------------- Functions --------------------------------*/
function renderMessage() {
  if (turn === true && winner === true) {
    setTimeout(() => {
      winMessage.innerText = `Congratualtions player! You win with ${playerSum} points!`;
    }, 300);
  } else if (turn === true && winner === false) {
    setTimeout(() => {
      winMessage.innerText = `Player you lose with ${playerSum} points.`;
    }, 300);
  } else if (turn === false && winner === true) {
    setTimeout(() => {
      winMessage.innerText = `Congratualtions player! You win with ${playerSum} points to dealer's ${dealerSum} points!`;
    }, 400);
  } else if (turn === false && winner === false) {
    setTimeout(() => {
      winMessage.innerText = `Player you lose with ${playerSum} points to dealer's ${dealerSum} points.`;
    }, 400);
  } else if (tie === true) {
    setTimeout(() => {
      winMessage.innerText = `It's a tie! With ${playerSum} points!`;
    }, 400);
  }
}

function gameStop() {
  if (winner !== undefined || tie === true) {
    hitmeBtn.disabled = true;
    standBtn.disabled = true;
  }
}

function newDeck() {
  suits = ["s", "h", "d", "c"];
  let cardNumbers = [
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let altNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  let altSuites = ["spades", "hearts", "diamonds", "clubs"];
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
  for (let i = 0; i < 4; i++) {
    for (let f = 0; f < 13; f++) {
      let card = {};
      card.face = suits[i].concat(cardNumbers[f]);
      card.value = values[f];
      card.alt = altNumbers[f] + ` of ` + altSuites[i];
      deck.push(card);
    }
  }
}

function activateBtns() {
  hitmeBtn.disabled = false;
  standBtn.disabled = false;
}

function aceRule(turn) {
  if (turn === true) {
    let aceCardIdx = playerHand.findIndex((card) => card.value === 11);
    if (aceCardIdx !== -1) {
      playerHand[aceCardIdx].value = 1;
      activateBtns();
      checkWin();
      return true;
    } else {
      return false;
    }
  } else if (turn === false) {
    let aceCardIdx = dealerHand.findIndex((card) => card.value === 11);
    if (aceCardIdx !== -1) {
      dealerHand[aceCardIdx].value = 1;
      activateBtns();
      checkWin();
      return true;
    } else {
      return false;
    }
  }
}

function checkWin() {
  playerSum = addPlayerHand();
  dealerSum = addDealerHand();
  if (dealer17Logic(dealerSum)) return;

  if (turn === true) {
    if (playerSum > 21) {
      if (aceRule(turn)) return;
      winner = false;
    } else if (playerSum < 22 && playerSum === 21) {
      winner = true;
    } else {
      return;
    }
  }
  if (turn === false) {
    if (dealerSum === 21) {
      winner = false;
    } else if (dealerSum > 21) {
      if (aceRule(turn)) return;
      winner = true;
    } else if (dealerSum > 17 && dealerSum < playerSum) {
      winner = true;
    } else if (dealerSum > playerSum) {
      winner = false;
    } else if (playerSum === dealerSum) {
      tie = true;
    }
  }
  gameStop();
  renderMessage();
}

function dealer17Logic(dealerSum) {
  if (turn === false && dealerSum <= 17) {
    deal();
    return true;
  } else {
    return false;
  }
}

function flipCard() {
  let dealerHiddenCard = document.getElementById("hidden-card");
  dealerHiddenCard.classList.remove("back-red");
}

function dealerTurn() {
  turn = false;
  flipCard();
  checkWin();
}

function renderCard(newCardObj) {
  let divEl = document.createElement("div");
  divEl.classList.add("card");
  divEl.classList.add("large");
  divEl.classList.add(newCardObj.face);
  divEl.classList.add("cardtag");
  divEl.setAttribute("alt", newCardObj.alt);
  if (turn === true) {
    setTimeout(() => {
      playerHandEl.appendChild(divEl);
      checkWin(playerHand, dealerHand);
    }, 400);
  } else if (turn === false) {
    setTimeout(() => {
      dealerHandEl.appendChild(divEl);
      checkWin(playerHand, dealerHand);
    }, 400);
  } else if (turn === undefined) {
    dealerHandEl.appendChild(divEl);
    if (dealerHandEl.children.length > 1) {
      dealerHandEl.children[1].classList.add("back-red");
      dealerHandEl.children[1].id = "hidden-card";
    }
  }
}

function addPlayerHand() {
  const sum = playerHand.reduce(function (sum, playerCard) {
    return sum + playerCard.value;
  }, 0);
  return sum;
}
function addDealerHand() {
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

function help() {
  alert(
    ` You and the dealer start with 2 cards each.
    
  You're goal is to get 21 points. Royals are 10 points, ace is 11 or 1.
  
  Click 'Hit Me' to deal another card, and 'Stand' to end your turn.
  
  If no one reaches 21, closest to 21 with out going above wins!`
  );
}

function newHand() {
  playerHand = [];
  dealerHand = [];
  winMessage.innerText = "";
  winner = undefined;
  tie = undefined;
  let cardEls = document.querySelectorAll(".cardtag");
  cardEls.forEach((card) => {
    card.remove();
  });
  activateBtns();
  initiateDealer();
}
function newGame() {
  newHand();
  newDeck();
}

initiateDealer();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
newHandBtn.addEventListener("click", newHand);
newGameBtn.addEventListener("click", newGame);
helpBtn.addEventListener("click", help);
