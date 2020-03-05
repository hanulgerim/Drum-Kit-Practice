
/*
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {alert("I got clicked!");
}) ;
} */


// what to do when click is detected.

// 1. Explaination: instead of giving a function a name and include it in the event listener which then it might get called right away UNLESS you remove the parentheses after the function IN the addEventListener method. SO the common practice to minimize this is to use "anonymous function" meaning you don't give a name to it. So it will look like function () {}; Instead of function NAME() {}; See above. Then your addEventListener("click", function without parenthesis); becomes addEventListener("click", function () { action);}


//2. Challenge is to make I got click message to happen to every single button instead of the very first one. one option is literally repeate the code but you'd have to write many lines. ex. document.querySelectorAll("button")[1].addevent..... meaning too add an event lister to [0]=first, button [1]=second button.. So let's do a for loop

//2-1 So when doing a for loop, we decided to specify original "button" to ".drum", using class, to avoid future conflict when we add more buttons.
//2-2 Then var i = 0; i<document.querySelectorAll(".drum").lengh) and here .length will count how many 'class drums' we have and run it that many times.
//2-3 so tehcnically, you can use the same line as var numberOfDrumButtons = var document.querySelectorAll(".drum").lengh;
//2-4 Then forloop changes to: for (var i=0; i<numberofdrumbutton' i++)



// 3. HOW TO PLAY SOUND ON JAVASCRIPT
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();

});
}
