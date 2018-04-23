console.log('connected');

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