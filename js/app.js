/*-------------------------------- Constants --------------------------------*/
const deck = [];
// const royalCards = 10

/*-------------------------------- Variables --------------------------------*/
let playerHand;
let dealerHand;
let playerSum;
let dealerSum;
let dealtCard;
let turn;

// Declare variables
let deck1 = [];
let deck2 = [];
let cardToRemove;

/*------------------------ Cached Element References ------------------------*/
const hitMe = document.querySelector("#hit-button");
const stand = document.querySelector("#stand-button");
const newGame = document.querySelector("#new-game-button");

// Cached element references
let deck1El = document.querySelector("#deck-1");
let deck2El = document.querySelector("#deck-2");

/*-------------------------------- Functions --------------------------------*/
const newDeck = () => {
    //when all the cards in the deck are delt, a new deck of is added
    // calls shuffle to randomiz ethe cards
}

const standFunc = () => {
    //called when stand is clicked
    //stores the value of the hand
    //      of whoevers turn it is
    //calls checkhand function
}

const handSumValue = () => {
    //called at the end of a turn
    // so when player hit stand
    // or when dealer hits corret conditions
    // value of cards if >= 17, and less tha n21, and greater than the players hand \
    // add the value of a dealt card to the hand sum
    // calls checkhand function
}

 const shuffle = () => {
    // randomizes teh cards in the deck
}

const gameOutcomeMessage = () => {
    // sets a message for each possible game outcome
}

const aceRule = () => {
    // sets the value of an ace card to 11
    // unless the hand is bust
    // then ace equals 1
}

const checkHand = () => {
    // checks sum of hands against each other
    //runs through win logic to determin win/loss/tie
// If sum > 21, bust
// If sum = 21, win
// Greater sum wins
}

const deal = () => {
    //called when the player clicks hit
    // and when player clicks new game
    //deals a card to whoever turn it is from the deck
    // removes a card from teh deck
    // calls function that adds card value to sum
}

const initialize = () => {
    playerSum = null;
    dealerSum = null;
    // gives the player and dealer 2 new cards each
}

//functions
const render = (cardPicked) => {
  // Remove outline class when first card is picked
  // Removes previously picked card from deck 2 class list
  // Add current card picked to deck 2 element
  // Adjust shadow when deck gets above/below halfway full
  // Remove card back color and add outline when last card is picked
};


// Function to handle a button click:
const handleClick = () => {
  // Randomly select number from total cards remaining
  // Assign card with the random index to a variable
  // Add card picked to deck 2
  // Pass card picked to render function to display
};

// initialization function: rn just starts the game with a full deck
// this probs won't work in my newgame button bc in blackjack you keep going until deck is used up
// alt option: have new cards button or restart button
const init = () => {
  deck1 = [
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
};
//make sure to invoke:
init();

/*----------------------------- Event Listeners -----------------------------*/
hitMe.addEventListener("click", () => {
  console.log(`button has been clicked`);
});
stand.addEventListener("click", () => {
  console.log(`button has been clicked`);
});
newGame.addEventListener("click", () => {
  console.log(`button has been clicked`);
});

// Event listeners
document
  .querySelector("#btn")
  .addEventListener("click", () => handleClick);
