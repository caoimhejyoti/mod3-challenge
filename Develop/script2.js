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

        let result= ("");

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

        if (window.confirm ("Do you want to use numbers?")){
            result=result+numberOptions;
        };

        if (window.confirm ("Do you want to use lower case characters?")){
            result=result+lowerOptions;
        };
        
        if (window.confirm ("Do you want to use upper case characters?")){
            result=result+upperOptions;
        };      

        if (window.confirm ("Do you want to use special characters?")){
            result=result+specialOptions;
        };
        
        result=Math.floor(Math.random() *result.length);

        for (let i=0; i<passwordLength; i++){
            Math.floor(Math.random() *result.length)

        
        console.log(result);
    }    
    

}

}
generateBtn.addEventListener("click", writePassword)