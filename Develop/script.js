// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// worked way through js doc from top to bottom, following console error messages. 
// first message - error in line 2. changed generate to password due ot generate not being present in CSS. Realised error - it is present in HTML and changedf back. 
// next step was to connect line 14 (js event) to html line 29.
// next error points to writePassword function. Need to resolve function bugs to ensure generate button triggers event.

// psuedo code:
// user needs to define number of charaters - prompt

// var options = (any Number)?

// var userChoice = put user input here later


// user defines special charcter prompt - true or false
// user defines numbers prompt - true or false
// user defines lower case prompt - true or false
// user defines upper case prompt - true or false

// computer produces random string - using user options as input

// display the password in card body. 

// click on generateBtn - produces prompt




// var passwordLength = window.prompt("How many characters does your password need? It must be between 8 - 128 characters")
// var specicalCharacter = confirm("Do you want to include special characters?")

// var lowerCharacter = confirm("Do you want to include lower case charaters?")
// var upperCharacter = confirm("Do you want to include upper case charaters?")

// var options = all user choice defined charaters

var generateBtn = document.querySelector("#generate");




var n = passwordLength
var numberOptions = ["1", "2", "3","4", "5", "6", "7", "8", "9", "0"];
// var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", ]
var lowerOptions = "abcdefghijklmnopqrstuvwxyz";


function writePassword() {
  let passwordLength = window.prompt("How many characters does your password need? It must be between 8 - 128 characters");
  var numberCharacter = confirm("Do you want to include numbers?");
  if(!numberCharacter) {
    return
  }
  var lowerCharacter = confirm("Do you want to include lower case charaters?");
  if(!lowerCharacter) {
    return;
  }

  var generatePassword = n*(Math.floor(Math.random() *numberOptions.length*lowerOptions.length))

  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

// n = length of password
// generatePassword = n*