// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){ 
  // your code here
// length 
  var length = prompt("Please enter the length of you password between 8 and 128.");
  //select the characters
  var chartype = window.prompt("Do you want to use lower case letters?");
  var chartype = window.prompt("Do you want to use any special characters?");
  var chartypee = window.prompt("Do you want to use UPPERCASE letters?");
  var chartype = window.prompt("Do you want to use numbers?");

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()-_+=.,:;<>?[]`{}|~"; 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";


  var random = Math.floor(Math.random() * lowercase.length);

  var random = Math.floor(Math.random() * symbols.length);

  console.log("RANDOM", random, lowercase[random], symbols[random], uppercase[random], numbers[random]);


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
