var generateBtn = document.querySelector("#generate");

var numberOptions = "0123456789";
var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialOptions = "`~!@£$%^&*()_-+={[}]|\\\";:',<.>/?*-";
var passwordLength = window.prompt("How many characters does your password need? It must be between 8 - 128 characters"
);

function writePassword(){
    passwordLength;
    
}







generateBtn.addEventListener("click", writePassword);