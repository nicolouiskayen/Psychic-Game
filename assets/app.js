console.log("hello");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userLetters = []
var wins = 0;
var losses = 0;
var lives = 9;
var x = 0;
function randomNum() {
    x = Math.floor(Math.random() * 26)
}
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
function updateLives() {
    var lives = 9 - userLetters.length;
    document.querySelector("#lives").innerHTML = "Guesses left: " + lives;
}
function updateGuesses() {
    document.querySelector("#guesses").innerHTML = "Your guesses so far: " + userLetters;
}
function reset() {
    lives = 9;
    userLetters = [];
}
randomNum();
document.onkeyup = function (event) {




    var letter = event.key.toLowerCase()
    userLetters.push(letter)
    if (letter === letters[x]) {
        wins++;
        updateWins();
        reset();
        randomNum();
        updateLives();
        updateGuesses();
    } else if (userLetters.length === 9) {
        losses++;
        reset();
        randomNum();
        updateLosses()
        updateLives();
        updateGuesses();

    } else {
        updateLives();
        updateGuesses();



    }
}
