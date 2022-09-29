// Assignment Code
var generateBtn = document.querySelector("#generate");
/* Establish each criteria as separate arrays*/
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var combineUpperSpecial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
var combineUpperLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var combineSpecialLower = ["!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var combineAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Write password to the #password input
  function writePassword() {
  //var password = generatePassword(); //generatePassword function is recommendation
  var password = "test";// might want it to be a return
  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength > 8 && passwordLength < 121){   //Wrote if statement below and then moved it to immediately after with a blank return...
    password.length = passwordLength;
  }
  else{
    alert("Password must be between 8 and 121 characters long!!");
    return;
  }
  var confirmUpper = confirm("Would you like your password to contain upper case letters?");
  var confirmLower = confirm("Would you like your password to contain lower case letter?");
  var confirmSpecial = confirm("Would you like your password to have special characters?");
  if (confirmUpper === true && confirmLower === true && confirmSpecial === true){
    function shuffleAll(){
    for (var i = 0; i < passwordLength; i++){
      //combineAll[Math.floor(Math.random() * combineAll.length)];
      console.log(combineAll[Math.floor(Math.random() * combineAll.length)]);//passwordText = randomized;
    }
  }
    shuffleAll();
    //passwordText.value = math.floor(math.random(combineAll) * combineAll.length);
  }
  else if (confirmUpper === true && confirmLower === true && confirmSpecial === false){
    console.log(combineUpperLower);
  }
  else if (confirmUpper === true && confirmSpecial === true && confirmLower === false){
    console.log(combineUpperSpecial);
  }
  else if (confirmUpper === false && confirmLower === true && confirmSpecial === true){
    console.log(combineSpecialLower);
  }
  else {
    alert("You must select AT LEAST one criteria to receive password!!");
    return;
  }
  //function passwordRequirements(passwordLength){
       /* if (passwordLength > 8 && passwordLength < 121){
          password.length = passwordLength;
        }
        else{
          alert("Password must be between 8 and 121 characters long!!");
          return;
        }*/
for (var i = 0; i < passwordLength; i++)
  
  
  /*if (passwordLength > 8 && passwordLength <121){
    return ;
    else{
      alert("Password must be greater than 8 character but less than 121");
    }
  }
  
  
  
  if(confirmUpper === true){

  }*/


  passwordText.value = password;

}

// Add event listener to generate button = everything should happen in writePassword 
generateBtn.addEventListener("click", writePassword);


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/