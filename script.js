// Assignment Code
var generateBtn = document.querySelector("#generate");
/* Establish each criteria as separate arrays*/
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var combineSpecialNum = ["!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var combineUpperNum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var combineLowerNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var combineUpperSpecial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
var combineUpperSpecialNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
var combineUpperLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var combineUpperLowerNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var combineSpecialLower = ["!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var combineSpecialLowerNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var combineAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "(", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Write password to the #password input
  function writePassword() {
  //var password = generatePassword(); //generatePassword function is recommendation
  var password = "" //empty string allows everything to be visible // might want it to be a return  I need test to now be my console.log in my for loop functions
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
  var confirmNumeric = confirm("Would you like your password to include numbers?"); 
  if (confirmUpper === true && confirmLower === true && confirmSpecial === true && confirmNumeric === true){
    function shuffleAll(){
    for (var i = 0; i < passwordLength; i++){
      password = password + combineAll[Math.floor(Math.random() * combineAll.length)];
      //console.log(combineAll[Math.floor(Math.random() * combineAll.length)])

      //return combineAll[Math.floor(Math.random() * combineAll.length)];//passwordText = randomized;
    }
  }
    shuffleAll();
    //passwordText.value = math.floor(math.random(combineAll) * combineAll.length);
  }
  else if (confirmUpper === true && confirmLower === true && confirmSpecial === false && confirmNumeric === false){
    //console.log(combineUpperLower) used these console logs to test the system as I built;
    function shuffleUpperLower(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineUpperLower[Math.floor(Math.random() * combineUpperLower.length)];
      }
    }
    shuffleUpperLower();
  }
  else if (confirmUpper === true && confirmSpecial === true && confirmLower === false && confirmNumeric ===false){
    //console.log(combineUpperSpecial)-;
    function shuffleUpperSpecial(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineUpperSpecial[Math.floor(Math.random() * combineUpperSpecial.length)];
        console.log(combineUpperSpecial[Math.floor(Math.random() * combineUpperSpecial.length)]);
      }
    }
    shuffleUpperSpecial();
  }
  else if (confirmUpper === false && confirmLower === true && confirmSpecial === true && confirmNumeric === false){
    //console.log(combineSpecialLower);
    function shuffleSpecialLower(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineSpecialLower[Math.floor(Math.random() * combineSpecialLower.length)];
      }
    }
    shuffleSpecialLower();
  }
  else if (confirmUpper === true && confirmLower === true && confirmSpecial === false && confirmNumeric === true){
    function shuffleUpperLowerNum(){  
    for (var i = 0; i < passwordLength; i++){
        password = password + combineUpperLowerNum[Math.floor(Math.random() * combineUpperLowerNum.length)];
      }
    }
    shuffleUpperLowerNum();
  }
  else if (confirmUpper === true && confirmSpecial === true && confirmLower === false && confirmNumeric === true){
    
    function shuffleUpperSpecialNum(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineUpperSpecialNum[Math.floor(Math.random() * combineUpperSpecial.length)];
      }
    }
    shuffleUpperSpecialNum();
  }
  else if (confirmUpper === false && confirmLower === true && confirmSpecial === true && confirmNumeric === true){
    function shuffleSpecialLowerNum(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineSpecialLowerNum[Math.floor(Math.random() * combineSpecialLower.length)];
      }
    }
    shuffleSpecialLowerNum();
  }
  else if (confirmUpper === true && confirmLower === false && confirmSpecial === false && confirmNumeric === true){
    function shuffleUpperNum(){  
    for (var i = 0; i < passwordLength; i++){
        password = password + combineUpperNum[Math.floor(Math.random() * combineUpperLowerNum.length)];
      }
    }
    shuffleUpperNum();
  }
  else if (confirmUpper === false && confirmSpecial === true && confirmLower === false && confirmNumeric === true){
    
    function shuffleSpecialNum(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineSpecialNum[Math.floor(Math.random() * combineUpperSpecial.length)];
      }
    }
    shuffleSpecialNum();
  }
  else if (confirmUpper === false && confirmLower === true && confirmSpecial === false && confirmNumeric === true){
    function shuffleLowerNum(){
      for (var i = 0; i < passwordLength; i++){
        password = password + combineLowerNum[Math.floor(Math.random() * combineSpecialLower.length)];
      }
    }
    shuffleLowerNum()
  }
    else if (confirmUpper === true && confirmLower === false && confirmSpecial === false && confirmNumeric === false){
      function shuffleUpper(){  
      for (var i = 0; i < passwordLength; i++){
          password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
        }
      }
      shuffleUpper();
    }
    else if (confirmUpper === false && confirmSpecial === true && confirmLower === false && confirmNumeric === false){
      
      function shuffleSpecial(){
        for (var i = 0; i < passwordLength; i++){
          password = password + special[Math.floor(Math.random() * special.length)];
        }
      }
      shuffleSpecial();
    }
    else if (confirmUpper === false && confirmLower === true && confirmSpecial === false && confirmNumeric === false){
      function shuffleLower(){
        for (var i = 0; i < passwordLength; i++){
          password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
        }
      }
    shuffleLower();
  } 
  else if (confirmUpper === false && confirmLower === false && confirmSpecial === false && confirmNumeric === true){
    function shuffleNum(){
      for (var i = 0; i < passwordLength; i++){
        password = password + numeric[Math.floor(Math.random() * numeric.length)];
      }
    }
  shuffleNum();
} 
  else {
    alert("You must select AT LEAST ONE criteria to receive password!!");
    return;
  }
  
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