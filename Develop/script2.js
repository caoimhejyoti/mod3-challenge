var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    function generatePassword(){

        var numberOptions = "0123456789";
        var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
        var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var specialOptions = "`~!@£$%^&*()_-+={[}]|\\\";:',<.>/?*-";
        const passwordLength = window.prompt("How many characters does your password need? It must be between 8 - 128 characters");

        console.log(passwordLength);
        
            if (passwordLength<8 || passwordLength>128){
                alert ("your password must be longer than 8 characters and less than 128 character");
                passwordLength;
            
            }else  (window.confirm ("Do you want to include numbers?"));
                // result === true ? password=password+numberOptions
            
            // }else if (window.confirm "Do you want to include lower charaters?") {
            //     result === true ? password=password+lowerOptions;
            //     result === false ? password=password;

        
        
        
        
    

        }    
    

}   
generateBtn.addEventListener("click", writePassword);