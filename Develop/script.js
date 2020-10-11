// Assignment code here
/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// delete and leave bracket !!! }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var characters = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','[',']','','{','}','|',';',':','"',',','.','/','<','>','?'];  
var password = [lower + upper + characters];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let writePassword = function() {
window.alert("Welcome! Let's create a PassWord.");

var promptLetters = window.prompt("How many characters are needed? Enter any number up to '4-15'");
var promptCharacters = window.prompt("Need special characters? (ex: %, #, &) Enter 'yes' or 'no'");
var promptCase= window.prompt("Do you want all upper, lower case or mixed? Enter 'upper','lower' or 'both'");


console.log(promptLetters);
console.log(promptCharacters);
console.log(promptCase);


if(promptLetters >=4 <=15 === writePassword) {
  generateBtn = lower + upper;
}
}



/*
let specialCharacters = function() {
var specialCharacters = window.prompt("Would you like special characters? Enter 'yes' or 'no'");
console.log(specialCharacters);
}






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button */
generateBtn.addEventListener("click", writePassword);