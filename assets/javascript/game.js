console.log('connected');
//
var charactersList = [
  {
    "name": 'Buzz Lightyear',
    "image":'../images/Buzz.jpg',
    "hint": 'To Infinity and Beyond'
  },
  {
    "name": 'Sheriff Woody',
    "image":'../images/woody.png',
    "hint": 'Reach for the sky!'
  },
  {
    "name": 'Potato Head',
    "image":'../images/mr-potato-head.gif',
    "hint": 'Hey, Hamm! Look, I\'m Picasso!'
  },
  {
    "name": 'Rex',
    "image":'../images/Rex.png',
    "hint": 'Any dinosaur-shaped ones?'
  },
  {
    "name": 'Jessie',
    "image":'../images/Jessie.png',
    "hint": 'Buzz Lightyear\'s girlfriend'
  },

]
//
document.onkeyup = function (event){
  var userEnter = event.key.toLowerCase();

  if(userEnter === "enter"){
    console.log('User pressed enter. ' + userEnter);
  }else {
    console.log('not enter');
  }
console.log(userEnter)
}


// var word = "<p>User pressed " + userEnter + "</p>";
// next line writes to the screen
// document.querySelector("#gameSpace").innerHTML = word;