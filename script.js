// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){ 
  // your code here
// length 
  var length = prompt("Please enter the length of your password between 8 and 128 characters.");
  if (length < 8 || length >128){
    alert("Length must be between 8-128 characters")
  }
  //select the characters
  if (length >= 8 && length <= 128){
  var clower = window.confirm("Do you want to use lower case letters?");
  var csymbol = window.confirm("Do you want to use any special characters?");
  var cupper = window.confirm("Do you want to use UPPERCASE letters?");
  var cnumber = window.confirm("Do you want to use numbers?");
  }
  
  if (cupper != true && clower != true && csymbol != true && cnumber != true){
    alert("You must select at least one character type!!!!")
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()-_+=.,:;<>?[]`{}|~"; 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";


  var random = Math.floor(Math.random() * lowercase.length);

  var random = Math.floor(Math.random() * symbols.length);

  var random = Math.floor(Math.random() * uppercase.length);

  var random = Math.floor(Math.random() * numbers.length);


  
  console.log("RANDOM", random, lowercase[random]);
  console.log("RANDOM", random,symbols[random]);


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
