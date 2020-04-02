// Assignment Code
var generateBtn = document.querySelector('#generate');

var passwordLength = 0;

function generatePassword() {
  var passwordLength = prompt(
    'Choose a password length. (Must be 8-128 characters)'
  );
  while (passwordLength > 128 || passwordLength < 8) {
    if (passwordLength === null) {
      close();
    } else {
      alert('Password has to be between 8-128 characters.');
      passwordLength = prompt('Choose a password length.');
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
