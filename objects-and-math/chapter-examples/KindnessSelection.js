function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 const combinedArr = [happiness, words];

 function randomArraySelection(arr) {
  const index = Math.floor(Math.random()*arr.length);
  return arr[index];
 }
 for (index = 0; index < 1; index++) {
  let randomArray = randomArraySelection(combinedArr);
    for (index2 = 0; index2 < 2; index2++) {
      console.log(randomSelection(randomArray));
    }
 }
 let newArray = []
 newArray.push(randomSelection(happiness));
 newArray.push(randomSelection(words));
 console.log(newArray);