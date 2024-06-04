let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

const superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

const dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

const tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};
superChimpOne['astronautID'] = 1;
salamander['astronautID'] = 2;
superChimpTwo['astronautID'] = 3;
dog['astronautID'] = 4;
tardigrade['astronautID'] = 5;

superChimpOne['move'] = function() {
   return Math.round(Math.random()*10);
};
salamander['move'] = function() {
   return Math.round(Math.random()*10);
};
superChimpTwo['move'] = function() {
   return Math.round(Math.random()*10);
};
dog['move'] = function() {
   return Math.round(Math.random()*10);
};
tardigrade['move'] = function() {
   return Math.round(Math.random()*10);
};

const animalCrew = [superChimpOne, salamander, superChimpTwo, dog, tardigrade];
// console.log(animalCrew);

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
const crewReports = (crewMember) => {
   return `${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`;
};

console.log(crewReports(superChimpTwo));
// Start an animal race!

const numOfTurns = (object) => {
   let numOfSteps = 0;
   let turns = 0;
   while (numOfSteps < 20) {
      numOfSteps += (object.move());
      turns++
   } return turns;
}; console.log(numOfTurns(salamander));

const fitnessTest = (array) => {
   let testResults = [];
   for (index = 0; index < array.length; index++) {
      testResults.push(numOfTurns(array[index]));
      console.log(`${array[index].name} took ${(testResults[index])} turns to take 20 steps.`);
   } return testResults;
}; console.log(fitnessTest(animalCrew));