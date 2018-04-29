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
var guessesMade = [];
var blankSpaces;
// End of variable

// Functions
function letterChecker(answer, playerGuess) {
  // var currentWord = letrs;
  // console.log('This is the current word: ' + currentWord);
  var wordArr = answer.split("");
  console.log('The current word as an array: ' + wordArr);
  //
  for (var i = 0; i < wordArr.length; i++) {
    // console.log(element);
    var element = wordArr[i];
    //
    var letterIndex = wordArr.indexOf(playerGuess);
    console.log('player guess index: ' + letterIndex);
    //
    if (playerGuess === element) {
      // score++;
      console.log('You got one, keep going');
      // break
    } else {
      guessesMade.push(playerGuess);
      console.log('Wrong, try again');
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
function blank(x){
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
$(document).ready(function(){
  blank(conputerGuessName);
  updateMe();
});

function updateMe() {
  $("#hint").text(conputerGuessHint);
  $("#score").text(score);
}



//
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).



// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.



// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.



// Word Guess Game Bonuses


// Play a sound or song when the user guesses their word correctly, like in our demo.
// Write some stylish CSS rules to make a design that fits your game's theme.

// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.


// Remember: global variables, then objects, then calls.