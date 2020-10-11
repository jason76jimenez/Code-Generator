// Assignment code here
/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/


var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','[',']','','{','}','|',';',':','"',',','.','/','<','>','?'];  
//var length = ['8','9','10','11','12','13','14','15']
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  window.alert("Welcome! Let's create a PassWord.")


//queries begin 
var promptLength = window.prompt("How many characters are needed? Enter any number between '8' and '128'"); {
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Incorrect value. Try again.");
    window.prompt("Re-enter value between 8-128");
  }
  if (promptLength > 7 || promptLength < 129) {
    window.alert("OK!");
  }
}

var promptCharacters = window.prompt("Need special characters? (ex: %, #, &) Enter 'yes' or 'no'"); {
  if (promptCharacters === "no") {
    window.alert("Characters make your password stronger. Are you Sure?")
    window.prompt("Want special characters? Enter 'yes' or 'no'");
  if (promptCharacters === "yes") 
    window.alert("Good choice!")
  }

  else
  {
    (promptCharacters === "yes") 
    window.alert("Good choice!") 
  }
}



console.log(promptLength);
console.log(promptCharacters);
//console.log(promptCase);
}




// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);



 










/*
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
*/
