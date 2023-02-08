
document.getElementById("length").addEventListener("input", function() {
  document.getElementById("charCount").innerHTML = "Password length: " + this.value + " characters";
});

document.getElementById("generateBtn").addEventListener("click", function() {
  var length = document.getElementById("length").value;
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;
  var password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
  document.getElementById("password").innerHTML = "Password: " + password;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
  var password = "";
  var characters = "";
  if (includeUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    characters += "0123456789";
  }
  if (includeSymbols) {
    characters += "!@#$%&?";
  }
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

