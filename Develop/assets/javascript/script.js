// Assignment code here
//function to set password length

function passwordLength() {
  var length = (window.prompt("How long should your password be? Min. 8 characters, max 128 characters."));
    if (length < 8 || length > 128 || length === null) {
      window.alert("You need to provide a valid answer. Please try again.");
      passwordLength();
    }
  };

passwordLength();

var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");

var uppercaseConfirm = window.confirm("Would you like to include uppercase letters?");

var numberConfirm = window.confirm("Would you like to include numbers?")

var specialCharacterConfirm = window.confirm("Would you like to include special characters?")
       


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordParameters();