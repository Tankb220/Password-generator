// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){ 
  // your code here
// character and letters to be used
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var symbol = "!@#$%^&*()-_+=.,:;<>?[]`{}|~"; 
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var characterSet = "";
// length 
   length = prompt("Please enter the length of your password between 8 and 128 characters.");
  if (length < 8 || length >128){
    alert("Length must be between 8-128 characters")
    return;
  }
  //select the characters
   clower =confirm("Do you want to use lower case letters?")
   csymbol = confirm("Do you want to use any special characters?");
   cupper = confirm("Do you want to use UPPERCASE letters?");
   cnumber = confirm("Do you want to use numbers?");
  
  if (cupper != true && clower != true && csymbol != true && cnumber != true){
    alert("You must select at least one character type!!!!");
  }
  if (clower) {
    characterSet = characterSet.concat(lower);
  }
  if (cupper) {
    characterSet = characterSet.concat(upper);
  }
 if (csymbol) {
  characterSet = characterSet.concat(symbol);
 }
 if (cnumber){
  characterSet = characterSet.concat(number);
 }
console.log(characterSet)
  // once selected randomized
  var Random = ""
  for (var i = 0; i < length; i++){
  var Random = Random + characterSet[Math.floor(Math.random() * characterSet.length)];
console.log(Random)
  }
  

  

  return Random;
  

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
