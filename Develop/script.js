// Assignment code here
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['@', '#', '$', '%', '^', '&', '*', '=', '"', '(', ')', '*', '+', ',', '-', '/', ';', ':', '>', '<', '=', '?', '[', ']',];
var capLet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newArray = [];
  var password = [];
  
  var genPass = window.prompt("How many characters would you like your password to be? (note: Must be between 8 and 128 characters long.)");

  if(genPass < 8 || genPass > 128) {
       window.alert("Please choose a number between 8 and 128.");
    writePassword()
  }
  if(window.confirm("include numbers?")) {
    var newArray =  newArray.concat(numbers);  
   };
   if(window.confirm("include capital letters?")) {
       var newArray = newArray.concat(capLet);
   };
   if(window.confirm("Include lowercase letters?")) {
       var newArray = newArray.concat(lowerCase);
   };
   if(window.confirm("Include special characters?")) {
       var newArray = newArray.concat(specialChar);
   };
    for(var i = 0; i < genPass; i++) {
      password.push(newArray[Math.floor(Math.random() * ((newArray.length - 1) - 0 + 1))]);
  };
  JSON.stringify(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
