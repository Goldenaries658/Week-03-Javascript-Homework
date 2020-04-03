// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  var passwordLen = prompt(
    'Choose a password length.\n(Must be 8-128 characters)'
  );

  if (passwordLen === null) {
    return 'Cancelled.';
  }

  while (passwordLen < 8 || passwordLen > 128 || isNaN(passwordLen)) {
    passwordLen = parseInt(passwordLen, 10);
    console.log(passwordLen);
    if (isNaN(passwordLen)) {
      alert('Enter a number.');
    }
    alert('Password has to be between 8-128 characters.');
    passwordLen = prompt('Choose a password length.');

    if (passwordLen === null) {
      break;
    }
  }

  var charType = {};
  var charProps = [
    'Uppercase characters',
    'Lowercase characters',
    'Numbers',
    'Special characters'
  ];
  var charTypeCount = 0;

  while (charTypeCount == 0) {
    for (i = 0; i < 4; i++) {
      var chars = charType[charProps[i]];
      chars = prompt(charProps[i] + '? (Y/N)');

      if (chars === null) {
        break;
      }

      chars = chars.toLowerCase();

      while (chars != 'y' && chars != 'n') {
        alert('Enter Y or N.');
        chars = prompt(charProps[i] + '?');

        if (chars === null) {
          break;
        }
      }

      if (chars == 'y') {
        charTypeCount++;
      }
    }

    if (chars === null) {
      break;
    }

    if (charTypeCount == 0) {
      alert('You need to select at least one character type.');
    }
  }

  if (chars === null) {
    return 'Cancelled';
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
