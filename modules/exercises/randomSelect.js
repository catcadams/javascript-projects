function randomFromArray(arr){
  const index = Math.floor(Math.random()*arr.length)
  return arr[index];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;