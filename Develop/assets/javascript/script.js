// Assignment code here
//function to set password length
var setPasswordLength = function() {
  var length = "";

  while (length < 8 || length > 128 || length === null) {
    length = prompt("How long should your password be? Min. 8 characters, max 128 characters.");
  }
  console.log("Your password length is " + length + " characters.");
};


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

setPasswordLength();