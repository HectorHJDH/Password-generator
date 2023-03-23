// Assignment code here
// Is going to store the number that the user introduces and use it to determine the lenght of the password
var inputLength;
/* Empty array used to store the characters of the selected options in the alerts (lowercase, uppercase, special characters, numbers), 
ex: If I only select uppercase and lowercase, the password generated will have only those two character types */
var storeArr = [];
// Array that stores lowercase letters
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array that stores uppercase letters
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array that stores the numbers
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array that stores the special characters
var specialArr = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

function getPrompts() {
  // For cleaning the array everytime the button is clicked
  storeArr = [];
  // Asks how many characters would you want in your password by a prompt and stores it in the inputLength
  inputLength = parseInt(prompt('Type how long would you want your password to be.'));

  /* Determines that the password is not empty, is between 8-128 characters and must be a number, else, it returns false and you
  have to start over (click the button again) */
  if (isNaN(inputLength) || inputLength < 8 || inputLength > 128) {
    parseInt(alert('Cancelled / Invalid input type or length (numbers 8 - 128 valid).'));
    return false;
  }

  // If true, adds lowercase type to your password
  if (confirm('Would you like lowercase in your password?')) {
    storeArr = storeArr.concat(lowerArr);
  }
  // If true, adds uppercase type to your password
  if (confirm('Would you like uppercase in your password?')) {
    storeArr = storeArr.concat(upperArr);
  }
  // If true, adds numbers type to your password
  if (confirm('Would you like numbers in your password?')) {
    storeArr = storeArr.concat(numArr);
  }
  // If true, adds special characters type to your password
  if (confirm('Would you like special characters in your password?')) {
    storeArr = storeArr.concat(specialArr);
  }
  /* If the user doesn't select a minimum of 1 character type for the password, then return an alert saying that no type was 
  selected and the user needs to start over. */
  if(storeArr.length == 0) {
    alert('No type selected! - Please start again selecting at least one data type for your password.');
    return false;
  }
  return true;
}

function generatePassword() {
  var password = '';
  // The password is going to be generated here and it's going to be stored in 'password', the limit of characters is the inputLength
  for(var i = 0; i < inputLength; i++) {
    // Math.floor because Math.random also uses decimal numbers, we dont need that
    var randomIndex = Math.floor(Math.random() * storeArr.length);
    password = password + storeArr[randomIndex];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  // Calls the function
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  // If true call generatePassword function and creates a new password
  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else { 
    passwordText.value = '';
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
// On click executes the writePassword function
generateBtn.addEventListener("click", writePassword);
