// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {

var length = prompt("Choose a length of at least 8 characters and no more than 128 characters");
console.log();
var charactertypes = prompt("confirm whether or not to include lowercase, uppercase, numeric, and/or special characters");





return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



