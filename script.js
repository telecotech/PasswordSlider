document.getElementById("generate").addEventListener("click", function() {
  let length = document.getElementById("length").value;
  let chars = document.getElementById("chars").value;
  let password = "";
  
  let possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (chars) {
    possibleChars += chars;
  }
  
  for (let i = 0; i < length; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  
  document.getElementById("output").innerHTML = password;
});

