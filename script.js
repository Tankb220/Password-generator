// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){ 
  // your code here
  var lowercase = "abcdefghijklmnopqrstuvwxyz";

  var result = prompt

  var random = Math.floor (Math.random() * lowercase.length);

  console.log('RANDOM', random, lowercase)
  return "";

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//look into alerts,confirms... java script
