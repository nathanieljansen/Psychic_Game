

// Can't seem to get the game to generate another letter after a correct guess.
window.onload = function () {

  var wins = [];

  var losses = [];

  var guessedLetters = [];

  var randomLetter = [];

  var guessesRemaining = 6;

  var currentGuess = [];

  var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s,", "t", "u", "v", "w", "x", "y", "z"]

  var randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
  console.log(randomLetter);

  document.onkeyup = function (event) {

    var currentGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(currentGuess);

    if (guessedLetters.indexOf(currentGuess) < 0 && availableLetters.indexOf(currentGuess) >= 0) {
      guessedLetters[guessedLetters.length] = currentGuess;
      guessesRemaining--;
    }
  
    if (currentGuess == randomLetter) {
      wins++;
      alert("Nice guess!");
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      guessedLetters = [];
      console.log(wins);
    }
    else if(currentGuess != randomLetter) {
      guessesRemaining--;
      alert("Try again");
      document.getElementById("guessRemaing").innerHTML = "Guesses Remaining: " + guessesRemaining;
      console.log(guessesRemaining);
    }
    

    if (guessesRemaining <= 0) {
      losses++;
      alert("You lose!")
      guessedLetters = [];
      console.log(losses);
    }

  }
}


