// Creates an array that lists out all of the options (a to z).
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = "a";
var userGuesses = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

// assign  var functions
var updateComputerGuess = function() {
    var nComputerGuess = Math.floor(Math.random() * alphabet.length);
    computerGuess = String.fromCharCode(97 + nComputerGuess);
    console.log("computerGuess = " + computerGuess);
};

// function to be called when we reset

var updateWins = function() {
     document.querySelector("#Wins").innerHTML = 'Wins = ' + wins;
    
    // prints the value of the message variable
};

var updateLosses = function() {
    document.querySelector("#Losses").innerHTML = 'Losses = ' + losses;
};

var updateGuessesLeft = function() {
    document.querySelector("#GuessesLeft").innerHTML = 'Guesses Left = ' + guessesLeft;
};

var updateUserGuesses = function() {
    document.querySelector("#UserGuesses").innerHTML = 'User Guesses = ' + userGuesses;
};
var reset = function() {
    guessesLeft = 9;
    userGuesses = [];

    updateGuessesLeft();
    updateUserGuesses();
    updateLosses();
    updateWins();
    updateComputerGuess();
};

reset();

//various conditions for the game to play

document.onkeyup = function(event) {
    var keyEntered = event.key.toLowerCase();
    userGuesses.push(keyEntered);
    guessesLeft--;

    if (computerGuess == keyEntered ) {
        wins++;
        reset();
    
    }

    if (guessesLeft === 0) {
        losses++;
        reset();
    }
    else {
        updateGuessesLeft();
        updateUserGuesses();
    }
}











