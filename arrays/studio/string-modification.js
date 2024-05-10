const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`The pig latin term for ${str} is ${pigLatin}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
const numOfLetters = input.question('How many letters will be relocated?');
const firstThreeChar = str.slice(0,numOfLetters);
// console.log(firstThreeChar);
const slicedStr = str.slice(numOfLetters)
// console.log(str);
const pigLatin = (slicedStr + firstThreeChar);
// console.log(pigLatin);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numOfLetters < str.length) {
    console.log(`The pig latin term for ${str} is ${pigLatin}`);
    // if numOfLetters is less than str.length, then 
} else {
    console.log('Input invalid; here is an example with 3 characters:');
    console.log('The pig latin term for LaunchCode is nchCodeLau.');
} 