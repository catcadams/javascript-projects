const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
} 
let beginsWithA = function(password) {
  if (password[0] === 'a') {
    return true;
  } 
  return false;
};
// console.log(getValidInput("Create a password: ", beginsWithA));
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

let isAVowel = function(vowel) {
  if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'y') {
    return true; 
  } else {
    return false;
  }
}; 
console.log(getValidInput("Give me a vowel: ", isAVowel));
// Be sure to test your code!
