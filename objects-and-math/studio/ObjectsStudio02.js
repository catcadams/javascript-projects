// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  let circumference = Math.round(2 * ((Math.PI) * radius));
  return circumference;
} console.log(orbitCircumference(100));
// Code your missionDuration function here:
function missionDuration(numOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  const time = (Math.round(((orbitCircumference(orbitRadius)) / orbitalSpeed) * 100) / 100) * numOfOrbits;
  return time;
} console.log(`This mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
// Code your oxygenExpended function here:
function oxygenExpended(candidateObject, numOfOrbits, orbitRadius, orbitalSpeed) {
  const time = missionDuration(numOfOrbits, orbitRadius, orbitalSpeed);
  console.log(time);
  const oxygenConsumed = Math.round((candidateObject.o2Used(time)) * 1000) / 1000
  return `${candidateObject.name} will perform the spacewalk, which will last ${time} hours and require ${oxygenConsumed} kg of oxygen.`
}
function findMinValue(numsArray) {
  for (let index = 0; index < numsArray.length; index++) {
    let minValue = numsArray[0];
    if (numsArray[index] < minValue) {
      minValue = numsArray[index];
      return minValue;
    }
  }
}
function minOxygenConsumed(crew, numOfOrbits, orbitRadius, orbitalSpeed) {
  let oxygenLevels = [];
  const time = missionDuration(numOfOrbits, orbitRadius, orbitalSpeed)
  for (let index = 0; index < crew.length; index++) {
    oxygenLevels.push(crew[index].o2Used(time))
  } for (let index = 0; index < crew.length; index++) {
    if (crew[index].o2Used(time) === findMinValue(oxygenLevels)) {
      return crew[index];
    } 
  }
}

// Candidate data & crew array.
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateA, candidateC, candidateE];
// console.log(selectRandomEntry(crew));
// console.log(minOxygenConsumed(crew, 3, 3500, 30000));
console.log(missionDuration(3));
console.log(oxygenExpended(minOxygenConsumed(crew, 3, 2000, 28000), 3, 2000, 28000));