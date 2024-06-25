//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  if (integer === 1) {
    return integer;
  } 
  else if (integer < 0 || typeof(integer) === 'string' || String(integer).split('').includes('.')) {
    return "ERROR: Invalid input";
  } else {
    return integer*(factorial(integer-1));
  }
}

console.log(factorial(4));
console.log(typeof(factorial(4)));
//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
