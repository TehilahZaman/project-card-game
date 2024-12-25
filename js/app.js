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
/*-------------------------------- Functions --------------------------------*/
// function winMessage() {
//   if ((winner = true)) {
//     console.log("Congratualtions player! You Win with ${playerSum}!");
//   } else if (tie === true) {
//     console.log("It's a tie! With ${playerSum} points!");
//   } else if (winner === false) {
//     console.log("Player you loose.");
//   }
// }

// function gameStop(winner) {
//   if (winner === true || winner === false) {
//     return;
//   } else if (playerSum === dealerSum) {
//     tie === true;
//   }
// }

function checkWin(playerSum, dealerSum) {
  if (turn === true) {
    if (playerSum > 21) {
      winner === false;
    } else if (playerSum < 22 && playerSum === 21) {
      winner = true;
    } else {
      return;
    }
  }
  // if (turn === false) {
  //   if (dealerSum <= 17) {
  //     dealer17Logic();
  //   }
  // }
  // if (dealerSum > 17)
  if (turn === false) {
    if (dealerSum === 21) {
      winner = false;
    } else if (dealerSum > 21) {
      winner = true;
    } else if (dealerSum > 17 && dealerSum < playerSum) {
      winner = true;
    } else if (dealerSum > playerSum) {
      winner = false;
    }
  }
  //winMessage(winner);
  //gameStop(winner);
  console.log(winner, "<- winner stat");
}
function dealer17Logic(dealerSum) {
  if (turn === false && dealerSum <= 17) {
    deal();
  } else {
    checkWin();
  }
}
// function dealer17Logic(dealerSum) {
//   deal();
// }

function dealerTurn(dealerSum) {
  //changeName?
  //Element.classList.remove('back-blue');
  turn = false;
  deal();
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
  let randomIdx = Math.floor(Math.random() * deck.length);
  let newCardObj = deck.splice(randomIdx, 1)[0];
  let newCard = newCardObj.card;
  let newCardValue = newCardObj.value;
  pushNewCard(newCard);
  pushNewCardValaue(newCardValue);
  //console.log(newCardObj);
  //console.log(newCard, newCardValue, "card + value");
  return newCardObj, newCard, newCardValue;
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
  // console.log(deal.length);
}
initiate();
/*----------------------------- Event Listeners -----------------------------*/
hitmeBtn.addEventListener("click", deal);
standBtn.addEventListener("click", dealerTurn);
