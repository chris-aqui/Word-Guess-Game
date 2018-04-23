console.log('connected');
//
var charactersList = [{
    "name": 'Buzz Lightyear',
    "image": '../images/Buzz.jpg',
    "hint": 'To Infinity and Beyond'
  },
  {
    "name": 'Sheriff Woody',
    "image": '../images/woody.png',
    "hint": 'Reach for the sky!'
  },
  {
    "name": 'Potato Head',
    "image": '../images/mr-potato-head.gif',
    "hint": 'Hey, Hamm! Look, I\'m Picasso!'
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
//
document.onkeyup = function (event) {
  var userEnter = event.key.toLowerCase();
  var userAnswer = document.querySelector('#answerF').value;
  // console.log('User pressed enter. ' + userEnter);
  // displays the hint
  for (var i = 0; i < charactersList.length; i++) {
    if (userEnter === "enter") {
      console.log(userEnter);
      var userHint = charactersList[i].hint;
      var question = charactersList[i].name;
      var questimg = charactersList[i].image;
      //
      document.querySelector("#hint").innerHTML = userHint;

      if (question === userAnswer) {
        console.log('The Word is ' + question);
        console.log('The user entered '+ userAnswer);

      } else{
        console.log('The Word is ' + question);
        console.log('The user entered '+ userAnswer);
      }
    } else {
      console.log('enter not pressed');
    }
  }
}


// var word = "<p>User pressed " + userEnter + "</p>";
// next line writes to the screen
// document.querySelector("#gameSpace").innerHTML = word;

//pull whats  entered into input
//document.querySelector('#answerF').value;