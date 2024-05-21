function reverse(str) {
   let lettersArray = str.split('').reverse().join('');
   return lettersArray;
}
let reversedMessage = "reverse this message";
console.log(reversedMessage);
console.log(reverse(reversedMessage));