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

var numberOptions = ["0123456789"];
// var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", ]
var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialOptions = "`~!@£$%^&*()_-+={[}]|\\\";:',<.>/?*-"

function writePassword() {
  var passwordLength = window.prompt(
    "How many characters does your password need? It must be between 8 - 128 characters"
  );
  var lowerCharacter = confirm("Do you want to include lower case charaters?");
  var numberCharacter = confirm("Do you want to include numbers?");
  var upperCharacter = confirm("Do you want to include upper case charaters?");
  var specialCharacter = confirm("Do you want to include special case charaters?");

  // FIXME: this is not being used in my while statement
  


  //   if (lowerCharacter === true){
  //     var generatePassword = Math.floor(Math.random() *numberOptions.length*lowerOptions.length);
  //   }
  // else{
  //   var generatePassword = Math.floor(Math.random() *numberOptions.length);
  // }
  if (lowerCharacter, numberCharacter,upperCharacter, specialCharacter ===true){
  var generatePassword = "";
  while (generatePassword.length < passwordLength) {
    generatePassword +=
      lowerOptions[Math.floor(Math.random() * lowerOptions.length)]+
      numberOptions[Math.floor(Math.random() * numberOptions.length)]+
      upperOptions[Math.floor(Math.random() * upperOptions.length)]+
      specialOptions[Math.floor(Math.random() * specialOptions.length)];
  }
  }
  else if (specialCharacter===false + lowerCharacter, numberCharacter, upperCharacter===true){
    var generatePassword = "";
    while (generatePassword.length < passwordLength) {
      generatePassword +=
        lowerOptions[Math.floor(Math.random() * lowerOptions.length)]+
        numberOptions[Math.floor(Math.random() * numberOptions.length)]+
        upperOptions[Math.floor(Math.random() * upperOptions.length)];
    }
    }
  else if (upperCharacter===false + lowerCharacter, numberCharacter, specialCharacter ===true){
    var generatePassword = "";
    while (generatePassword.length < passwordLength) {
      generatePassword +=
        lowerOptions[Math.floor(Math.random() * lowerOptions.length)]+
        numberOptions[Math.floor(Math.random() * numberOptions.length)]+
        specialOptions[Math.floor(Math.random() * specialOptions.length)];
    }
    }
  else if (numberCharacter===false + lowerCharacter, upperCharacter, specialCharacter ===true){
    var generatePassword = "";
    while (generatePassword.length < passwordLength) {
      generatePassword +=
        lowerOptions[Math.floor(Math.random() * lowerOptions.length)]+
        upperOptions[Math.floor(Math.random() * upperOptions.length)]+
        specialOptions[Math.floor(Math.random() * specialOptions.length)];
    }
    }
  else if (lowerCharacter===false + numberCharacter,upperCharacter, specialCharacter ===true){
    var generatePassword = "";
    while (generatePassword.length < passwordLength) {
      generatePassword +=
        numberOptions[Math.floor(Math.random() * numberOptions.length)]+
        upperOptions[Math.floor(Math.random() * upperOptions.length)]+
        specialOptions[Math.floor(Math.random() * specialOptions.length)];
    }
    }




  var password = generatePassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

// n = length of password
// generatePassword = n*
