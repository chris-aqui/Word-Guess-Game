console.log('connected');
// variable
var charactersList = [{
    "name": 'Buzz',
    "image": '../images/Buzz.jpg',
    "hint": 'To Infinity and Beyond'
  },
  {
    "name": 'Woody',
    "image": '../images/woody.png',
    "hint": 'Reach for the sky!'
  },
  {
    "name": 'Rex',
    "image": '../images/Rex.png',
    "hint": 'Any dinosaur-shaped ones?'
  },
  {
    "name": 'Jessie',
    "image": '../images/Jessie.png',
    "hint": 'Buzz Lightyear\'s girlfriend'
  },
]
var computerGuess = charactersList[Math.floor(Math.random() * charactersList.length)];
var conputerGuessName = computerGuess.name.toLowerCase();
var conputerGuessImage = computerGuess.image;
var conputerGuessHint = computerGuess.hint;
var livesLeft = 10;
var score = 0;
var lose = 0;
var guessesMade = [];
var blankSpaces = [];
// var testt = blankSpaces.join("\xa0");
// End of variable

// Functions
function letterChecker(answer, playerGuess) {
  var wordArr = answer.split("");
  console.log('The current word as an array: ' + wordArr);
  guessesMade.push(playerGuess);

  for (var i = 0; i < wordArr.length; i++) {
    var element = wordArr[i];
    var letterIndex = wordArr.indexOf(playerGuess);
    console.log('player guess index: ' + letterIndex);
    //
    if (playerGuess === element) {
      blankSpaces[i] = element;
      $("#userGues").text(blankSpaces.join("\xa0"));
      console.log("show blankspace " + blankSpaces[i]);
      // score++;
      console.log('You got one, keep going');
      break
    } else {
      console.log('Wrong, try again');
      livesLeft--;
      // break
      if (livesLeft === 0) {
        // lose++;
        alert("you lose!");
        reset();
      }
    }
  }
}
//
document.onkeyup = function (event) {
  var userEnter = event.key.toLowerCase();
  console.log('User pressed: ' + userEnter);
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
  var testt = blankSpaces.join("\xa0");
  $("#userGues").text(testt);
  // \xa0 is a Unicode no-break space
}
//
function reset() {
  computerGuess = charactersList[Math.floor(Math.random() * charactersList.length)];
  conputerGuessName = computerGuess.name.toLowerCase();
  conputerGuessImage = computerGuess.image;
  conputerGuessHint = computerGuess.hint;
}
//
$(document).ready(function () {
  blank(conputerGuessName);
  updateMe();
});

function updateMe() {
  $("#hint").text(conputerGuessHint);
  $("#score").text(score);
  $("#guess").text(guessesMade);
  $("#lives").text(livesLeft);
}