var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var userLetters = []
var wins = 0;
var losses = 0;
var lives = 9;
function randomNum{
    var randNum = Math.florr(Math.random()*26)
}
function updateWins{
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateLosses{
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
function updateLives{
    document.querySelector("#lives").innerHTML = "Guesses left: " + 9-userLetters.legnth;
}
function updateGuesses{
    document.querySelector("#guesses").innerHTML = "Your guesses so far: " + userLetters;
}
document.onkeyup = function (event) {
    randomNum();
    var letter = event.key.toLowerCase()
    userLetters.push(letter)
    if (letter === letters[randNum]){
        updateWins();
    } else {
        updateLives();
        updateGuesses();
    }
}
