//Text output
const output = document.querySelector(".output");
//Btn
const btn = document.querySelector(".btn");
//Header
const header = document.querySelector("header");
//Result
let res;
//Typing Speed
let typeSpeed = 300;
//Removing/Backspace Speed
let removeSpeed = 100;
//Word Identifier
let id = 0;

//Words to be typed
//"\xa0" = Space
const words = [
  "Web\xa0Developer", 
  "Logo\xa0Designer", 
  "App\xa0Developer",
];

//Colors for the individual words
const colors = [
  "#4069ff",
  "#eb4034",
  "Orange",
];

//Bacground Images
const backgrounds = [
  "./hero.webp",
  "./tech.webp",
  "./apps.webp"
];

//Ammount of letters
let charCount = 0;

//Time to pause each word
const pauseTime = 10;

//Set initial interval on the type function
let time = setInterval(type, typeSpeed);

//Typing letters
function type() {
  /*Filter out the ammount of 
  letters from the word*/
  res = words[id].substring(0, charCount);
  //Change word color
  output.style.color = colors[id];
  //Change button color
  btn.style.backgroundColor = colors[id];
  //Change background image
  header.style.backgroundImage = "url(" + backgrounds[id] + ")";
  /*When all letters are typed out, 
    stop typing and start removing*/
  /*Adding the '3' pauses the 
  typing for a moment when it reaches the end*/
  if (charCount >= words[id].length + pauseTime) {
    //Stop Typing
    clearInterval(time);
    //Reset character count
    charCount = 1;
    //Start Removing
    time = setInterval(remove, removeSpeed);
  }
  
  //Output the result
  output.innerHTML = res;
  //Add another letter
  charCount++;
}

//Removing letters
function remove() {
  /*Filter out the ammount of 
  letters from the word, reversed*/
  res = words[id].substring(0, words[id].length - charCount);

  /*When all letters are removed, 
    stop removing and start re-typing*/
  if (res.length <= 0) {
    /*Check if all words have been typed out*/
    if (id >= words.length - 1) {
      //If so go back to the first word
      id = 0;
    //And if not
    } else {
      //Change to next word
      id++;
    }
    //Stop Removing
    clearInterval(time);
    //Reset character count
    charCount = 0;
    //Start Typing Again
    time = setInterval(type, typeSpeed);
  }
  
  //Output the result
  output.innerHTML = res;
  //Remove another letter
  charCount++;
}