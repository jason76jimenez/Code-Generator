let passwordArr = lower + upper + characters + numbers;
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var characters = ['~','!','@','#','$','%','^','&','*','(',')','_','+','`','[',']','','{','}','|',';',':','"',',','.','/','<','>','?'];  
var numbers = ['0','1','2','3','4','5','6','7','8','9'];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  window.alert("Welcome! Let's create a PassWord.")

// begin 
var confirmLength = window.prompt("How many characters are needed? Enter number between '8' and '128'"); {
  if (confirmLength < 8 || confirmLength > 128) {

    window.alert("Incorrect value. Try again.");
    window.prompt("Re-enter value between 8-128");
  }
  if (confirmLength > 7 || confirmLength < 129) {
    window.alert("OK! Your password defaults to numbers. Let's give you some other choices");
  }
}

var confirmCharacters = window.prompt("Need special characters? (ex: %, #, &) Enter 'yes' or 'no'"); {
  if (confirmCharacters === "no") 
  {
    window.alert("Using characters with numbers and letters makes your password stronger. We won't ask again, but Are You Sure?");
    window.prompt("Want special characters? Enter 'yes' or 'no'")
  }
  if (confirmCharacters === "yes") 
  {
    window.alert("Great!");
  }
  if (confirmCharacters === "no") 
  { 
    window.alert("Thats OK. We'll still create a strong password");
  }
}

var confirmLower = window.prompt("Want Lower Case letters? Enter 'yes' or 'no'."); {
    if (confirmLower === "yes") {
      window.alert("Great! One more question.");}
     
    if (confirmLower === "no") { 
      window.alert("OK. One more question."); }
    }

var confirmUpper = window.prompt("Use upper case letters also? Enter 'yes' or 'no'"); {
  if(confirmUpper === "yes") {
    window.alert("Awesome! Get your pen and paper ready!"); }
  
    if (confirmUpper === "no") {
      window.alert("OK! Get your pen and paper ready!"); }
    }
  //options end

console.log(confirmLength);
console.log(confirmCharacters);
console.log(confirmLower);
console.log(confirmUpper);

if(confirmUpper) {
  upper = upper.concat(passwordArr);
}

if(confirmCharacters) {
  characters = characters.concat(passwordArr);
}

if(confirmLength) {
  length = numbers.concat(passwordArr);
}

if(confirmLower) {
  lower = lower.concat(password.Arr);
}

for(var i=0; i<passwordArr; i ++) {
  var passwordArr=getRandomPw(choices);
  return result.join()
}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password 
function writePassword() {


function generatePassword(newPassword){
  var newPassword= (length+numbers+characters+upper+lower);
console.log(length+ upper+ lower+ characters + numbers);


 var password = generatePassword();
console.log(password);
//var passwordArr = password.split(",");
var newPassword = "";
for(var i = 0; i < passwordArr.length; i++) {
  newPassword = newPassword + passwordArr.chartAt(Math.floor(Math.random()*Math.floor(passwordArr.length -1)));
}
var newPassword = document.querySelector("#password");
}}
// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
document.getElementById("#generate");
