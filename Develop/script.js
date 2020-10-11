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
var characters = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','[',']','','{','}','|',';',':','"',',','.','/','<','>','?'];  
var length = ['8','9','10','11','12','13','14','15'];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  window.alert("Welcome! Let's create a PassWord.")


//queries begin 
var promptLength = window.prompt("How many characters are needed? Enter number between '8' and '128'"); {
  if (promptLength < 8 || promptLength > 128) {
    window.alert("Incorrect value. Try again.");
    window.prompt("Re-enter value between 8-128");
  }

  if (promptLength > 7 || promptLength < 129) {
    window.alert("OK! Your password default is numbers. Let's give you some other choices");
  }
}

var promptCharacters = window.prompt("Need special characters? (ex: %, #, &) Enter 'yes' or 'no'"); {
  if (promptCharacters === "no") {
    window.alert("Using characters with numbers and letters makes your password stronger. We won't ask again, but Are You Sure?");
    window.prompt("Want special characters? Enter 'yes' or 'no'");}

  else (promptCharacters === "yes"); { window.alert("Good choice!") }
  }

var promptLower = window.prompt("Want Lower Case letters? Enter 'yes' or 'no'."); {
    if (promptLower === "yes") {
      window.alert("Great! One more question.");}
    } 
    if (promptLower === "no") { window.alert("OK. One more question."); }


var promptUpper = window.prompt("Use upper case letters also? Enter 'yes' or 'no'"); {
  if(promptUpper === "yes") {
    window.alert("Great! Get your pen and paper ready!"); }

    if(promptUpper=== "no") {
      window.alert("OK! Get your pen and paper ready!");
    }
  
}


console.log(promptLength);
console.log(promptCharacters);
console.log(promptLower);
console.log(promptUpper);
}




// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

/*
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(makeid(5)); 
BORROWED FROM WEBSITE */
 










/*
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
*/
