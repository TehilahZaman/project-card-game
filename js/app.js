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

/*------------------------ Cached Element References ------------------------*/
const hitMe = document.querySelector("#hit-button");
const stand = document.querySelector("#stand-button");
const newGame = document.querySelector("#new-game-button");

/*-------------------------------- Functions --------------------------------*/
const newDeck () => {
    //when all the cards in the deck are delt, a new deck of is added
    // calls shuffle to randomiz ethe cards 
}

const stand () => { 
    //called when stand is clicked 
    //stores the value of the hand
    //      of whoevers turn it is
    //calls checkhand function 
}

const handSumValue () => { 
    //called at the end of a turn 
    // so when player hit stand
    // or when dealer hits corret conditions
    // value of cards if >= 17, and less tha n21, and greater than the players hand \
    // add the value of a dealt card to the hand sum
    // calls checkhand function 
}

 const shuffle () => {
    // randomizes teh cards in the deck 
}

const gameOutcomeMessage () => { 
    // sets a message for each possible game outcome 
}

const aceRule () => {
    // sets the value of an ace card to 11
    // unless the hand is bust
    // then ace equals 1
}

const checkHand() => {
    // checks sum of hands against each other 
    //runs through win logic to determin win/loss/tie
// If sum > 21, bust 
// If sum = 21, win 
// Greater sum wins 
}

const deal () => {
    //called when the player clicks hit
    // and when player clicks new game
    //ddeals a card to whoever turn it is
    // calls function that adds card value to sum 
}

const initialize () => { 
    playerSum = null;
    dealerSum = null;
    // gives the player and dealer 2 new cards each    
}

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
