var generateBtn = document.querySelector("#generate");


function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

    function generatePassword(){

        const numberOptions = "0123456789";
        const lowerOptions = "abcdefghijklmnopqrstuvwxyz";
        const upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialOptions = "`~!@£$%^&*()_-+={[}]|\\\";:',<.>/?*-";
        let passwordLength; 
        
            while(true) {
                passwordLength = window.prompt("How long do you want your password? It must be between 8 - 128 characters");
            
                if (passwordLength<8 || passwordLength>128){
                    alert ("your password must be longer than 8 characters and less than 128 character");
                    continue;
                        
                } else {
                    break;
                };
            }

        if (window.prompt ("Do you want to use numbers?")===true){
            password=password+numberOptions;
        }

        if (window.prompt ("Do you want to use lower case characters?")===true){
            password=password+lowerOptions;
        }      
        
        if (window.prompt ("Do you want to use upper case characters?")===true){
            password=password+upperOptions;
        }      

        if (window.prompt ("Do you want to use special characters?")===true){
            password=password+specialOptions;
        }



        
        
        
        
    

        }    
    

}   
generateBtn.addEventListener("click", writePassword);

let = passwordLength;
