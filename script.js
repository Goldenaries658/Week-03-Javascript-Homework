// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var passwordLen = prompt(
    'Choose a password length. (Must be 8-128 characters)'
  );
  while (
    passwordLen < 8 ||
    passwordLen > 128 ||
    typeof passwordLen === 'string'
  ) {
    if (typeof passwordLen === 'string') {
      passwordLen = passwordLen.toLowerCase();
      console.log(passwordLen);

      if (passwordLen === 'quit') {
        break;
      } else {
        alert('Enter a number.');
      }
    }
    alert('Password has to be between 8-128 characters.');
    passwordLen = prompt('Choose a password length. Enter quit to stop.');
  }

  if (passwordLen === 'quit') {
    return null;
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
