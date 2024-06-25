// Import the modules exported from practiceExports.js below:
const practice = require('./practiceExports');
let arr = ['Hello', 'World', 123, 987, 'LC101'];
console.log(typeof(practice));
console.log(practice.palindromeCheck('mom'));
console.log(practice.evenOrOdd(9));

for (let index = 0; index < 3; index++) {
    console.log(practice.randomArrayElement(arr));
}