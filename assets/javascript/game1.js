// Creates an array that lists out all of the options (a to z).
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = null;
var userGuesses = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

// assign  var functions
var updateComputerGuess = function() {
    computerGuess = alphabet[Math.floor(Math.random * alphabet.length)];
    
};


// function to be called when we reset
var updateWins = function() {

    document.querySelector("#Wins").innerHTML = 'Wins = ' + wins;
    // prints the value of the message variable


    // document.write(YOU WIN!);
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
};

reset();


document.onkeyup = function(event) {
    var keyEntered = event.key.toLowerCase();
    userGuesses.push(keyEntered);
    guessesLeft--;

    if (keyEntered === computerGuess) {
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
console.log('ComputerGuess'+ 'alphabet');










