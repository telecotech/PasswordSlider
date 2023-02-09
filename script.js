var characterLength = 8;
var choice = [];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacter = ["!","@","$","%","^","&","*","/","?","<",">",";"];
var numbers =["1","2","3","4","5","6","7","8","9","0"];



var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();
 
  if (correctPrompts){
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}
}

function getPrompts(){
  choice = [];

  characterLength = parseInt(prompt('How many characters do you want your password to be? (8-128)'));
  
  if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128){
    alert('Character length must be a number between 8-128 as a digit. Please try again');return false;
}
  if (confirm('Would you like to use lowecase characters in your password?'))
{choice=choice.concat(lowercase);
}
  
if (confirm('Would you like to use Uppercase characters in your password?'))
{ choice=choice.concat(upperCase);
}
  
if (confirm('Would you like to use special characters in your password?'))
{ choice=choice.concat(specialCharacter);
}
  
if (confirm('Would you like to use numbers in your password?'))
{ choice=choice.concat(numbers);
}

return true;
} 


function generatePassword() {
 var password ="";
 for(var i = 0; i < characterLength; i++){
  var randomIndex = Math.floor(Math.random() * choice.length);
  password = password + choice[randomIndex];
 }
 return password;
}










