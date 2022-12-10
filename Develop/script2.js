// Global variables
var generateBtn = document.getElementById("generate");
const passwordText = document.querySelector("#password");

function writePassword() {
    const password = generatePassword();
    passwordText.value = password;

    function generatePassword(){
        
        // character options
        const numberOptions = "0123456789";
        const lowerOptions = "abcdefghijklmnopqrstuvwxyz";
        const upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialOptions = "`~!@£$%^&*()_-+={[}]|\\\";:',<.>/?*-";

        let result= "";

        let passwordLength; 
        
            // ask user 
            while(true) {
                passwordLength = window.prompt("How long do you want your password? It must be between 8 - 128 characters");
            
                if (passwordLength<8 || passwordLength>128){
                    alert ("your password must be longer than 8 characters and less than 128 character");
                    continue;
                        
                } else {
                    break;
                };
            }

        // ask user what option they want to use.
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
        
        // confirm user has selected at least one option
        if (result==""){
            alert ("You must select a character type");
            // if not, repeat - select from where is the best spot for user (options)
            // return ask: passwordoptions function
            return generatePassword();
        }    

        let password1="";

        // generate password based on input collected.
        for (let i=0; i<passwordLength; i++){
            password1=password1+result[Math.floor(Math.random() *result.length)];
        }  

        // display password
        return password1;
    }

}
// Event listener: triggers write password function on click.
generateBtn.addEventListener("click", writePassword)