// Defining all the password criterias
var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var specialCharacters = "#$%&()*+<=>?@";

var numericCharacters = "0123456789";

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var characters = window.prompt("How many characters would you like your password to contain?")
  var combinedCharacters = "";
  
  // if no characters then the function is closed
  if (!characters) {
    return;
  }

  // if not a number or number is not between 8-128 reloop back to start of function
  else if (isNaN(characters)||characters < 8 || characters > 128) {
    alert("Length must be between 8-128 characters!");
    generatePassword(); 
  }

  // cycles through all password criterias and if true, adds them to combinedCharacters variable
  else {
    var sC = window.confirm("Click OK to confirm including special characters.");
    if (sC) {
      combinedCharacters += specialCharacters;
    };
    var nC = window.confirm("Click OK to confirm numerical characters.");
    if (nC) {
      combinedCharacters += numericCharacters;
    }
    var lC = window.confirm("Click OK to confirm lowercase characters.");
    if (lC) {
      combinedCharacters += lowerCasedCharacters;
    }
    var uC = window.confirm("Click OK to confirm uppercase characters.");
    if (uC) {
      combinedCharacters += upperCasedCharacters;
    }
    
    // if none of the criteria are selected, reloop to start
    if (sC != true && nC != true && lC != true && uC != true) {
      alert("You must select at least one field");
      generatePassword();
    } 
  }

  // finalPW that is generated is equal to a randomised verison of the combinedCharacters variable
  var finalPW = "";
  for (i = 0; i < characters; i++) {
    finalPW += combinedCharacters.charAt(Math.floor(Math.random()*combinedCharacters.length));
  }
  return finalPW;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
