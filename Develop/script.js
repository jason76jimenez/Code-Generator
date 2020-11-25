

function start () {
  alert("Welcome to PassWord Generator! Let's get started.");
  prompt("How many characters are needed. Choose a number between '8-130'.");
  if (confirm === =>131||=<8) {
  return prompt("Invalid number. Try again.")
  }
  else {
    alert("Great!")
  }
};

document.getElementById('generate').addEventListener('click', start);