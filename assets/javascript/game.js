console.log('connected');
// variable

var computerGuess = charactersList[Math.floor(Math.random() * charactersList.length)];
var conputerGuessName = computerGuess.name.toLowerCase();
var conputerGuessImage = computerGuess.image;
var conputerGuessHint = computerGuess.hint;
var lettersLeft = computerGuess.name.length;
var isWin = false;
var livesLeft = 10;
var score = 0;
var lose = 0;
var guessesMade = [];
var blankSpaces = [];
// var testt = blankSpaces.join("\xa0");
// End of variable

// Functions
function letterChecker(answer, playerGuess) {
  // split my word into an array of letters
  var wordArr = answer.split("");
  // push the user guess into the guesses made array

  if (playerGuess === 'x' && isWin) {
    reset();
    isWin = false;
  }
  // loop over the word for each letter of the word array
  for (var i = 0; i < wordArr.length; i++) {
    if (playerGuess === wordArr[i]) {
      // if (wordArr.includes(playerGuess)) {
      guessesMade.push(playerGuess);
      blankSpaces[i] = playerGuess;
      $("#userGues").text(blankSpaces.join(" "));
      lettersLeft--;
      console.log(lettersLeft);
      console.log(wordArr + ' ----- ' + blankSpaces)
      if (lettersLeft === 0) {
        console.log('you win');
        score++;
        var youWinDiv = document.createElement("div")
        youWinDiv.innerHTML = `You Win! Your score is ${score}. Press X to start again.`;
        $('#userGues').append(youWinDiv);
        return isWin = true;
      }
    } else if (playerGuess != wordArr[i]) {
      // make a way to checks if the wrong letter is already in the guesses made array
      console.log('player guessed ' + playerGuess);
      console.log('word at that index ' + wordArr[i]);

      var filteredGuesses = wordArr.filter( guess => guess === playerGuess);
      console.log('filteredGuesses is ' + filteredGuesses.length);
      if (filteredGuesses.length === 0) {
        console.log('life lost');
        guessesMade.push(playerGuess);
        livesLeft--;
      }

    }

    // // sets the index of the word array to an element for easy readng
    // var element = wordArr[i];
    // // checks the user guess for the word array index
    // var letterIndex = wordArr.indexOf(playerGuess);
    // console.log('player guess index: ' + letterIndex);
    // // checks to see if the user value is present in the word array on each index
    // if (playerGuess === element) {
    //   console.log('we are checking ' + element);
    //   blankSpaces[i] = element;
    //   $("#userGues").text(blankSpaces.join("\xa0"));
    //   console.log("show blankspace with user entered value " + blankSpaces);
    //   // score++;
    //   console.log('You got one, keep going');
    //   // break
    // } else if(playerGuess != element) {
    //   // guessesMade.push(playerGuess);
    //   console.log('Wrong, try again');
    //   // livesLeft--;
    //   // break
    //   if (livesLeft <= 0) {
    //     livesLeft = 0;
    //     element = 0;
    //     // lose++;
    //     alert("you lose!");
    //     reset();
    //   }
    // }
  }
      // if(blankSpaces === wordArr){ // for some reason this is alway true...
      //       score++;
      //       console.log(score);
      //       alert("You Won!!");
      //       console.log("this is the answer: " + blankSpaces);
  // }
}
//
document.onkeyup = function (event) {
  var userEnter = event.key.toLowerCase();
  // console.log('User pressed: ' + userEnter);
  letterChecker(conputerGuessName, userEnter);
  updateMe();
}
//
function blank(x) {
  blankSpaces = [];
  for (var i = 0; i < x.length; i++) {
    // - parse the word into blanks
    if (x[i] === " ") {
      blankSpaces.push(" ");
    } else {
      blankSpaces.push("_");
    }
  }
  // var testt = blankSpaces.join("\xa0");
  // $("#userGues").text(testt);
  // \xa0 is a Unicode no-break space
}
//
function reset() {
  computerGuess = charactersList[Math.floor(Math.random() * charactersList.length)];
  conputerGuessName = computerGuess.name.toLowerCase();
  conputerGuessImage = computerGuess.image;
  conputerGuessHint = computerGuess.hint;
  livesLeft = 10;
  guessesMade = [];
  blankSpaces = [];
  blank(conputerGuessName);
  // blank(conputerGuessName);
}
//
$(document).ready(function () {
  blank(computerGuess.name);
  updateMe();
});

function updateMe() {
  $('#userGues').text(blankSpaces.join(" "))
  $("#hint").text(conputerGuessHint);
  $("#score").text(score);
  $("#guess").text(guessesMade);
  $("#lives").text(livesLeft);
}