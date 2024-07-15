//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore) {
    return this.scores.push(newScore);
  }
  average() {
    let sum = 0;
    for (let index = 0; index < this.scores.length; index++) {
      sum += this.scores[index];
    }
    const average = sum / this.scores.length;
    return Math.round(average * 10) / 10;
  }
  status() {
    const averageScore = this.average();
    if (averageScore >= 90) {
      return `Accepted`;
    } else if (averageScore >= 80) {
      return `Reserve`;
    } else if (averageScore >= 70) {
      return `Probationary`;
    } else {
      return `Rejected`;
    }
  }
}
const bubbaBear = new CrewCandidate("Bubba", 135, [88, 85, 90]);
const merryMaltese = new CrewCandidate("Merry", 1.5, [93, 88, 97]);
const gladGator = new CrewCandidate("Glad", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);
bubbaBear.addScore(83);
console.log(bubbaBear);
console.log(
  `${
    bubbaBear.name
  } earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`
);
let numOfTests = 0;
while (gladGator.average() < 90) {
  gladGator.addScore(100);
  console.log(gladGator.average());
  console.log(gladGator.status());
  numOfTests++;
}
console.log(gladGator);
console.log(numOfTests);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
