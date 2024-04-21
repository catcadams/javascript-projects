// Declare and assign the variables below
let shuttle = ('Determination');
let speed = (17500);
let distToMars = (225000000);
let distToMoon = (384400);
let mpk = (0.621)


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttle);
console.log(typeof speed);
console.log(typeof distToMars);
console.log(typeof distToMoon);
console.log(typeof mpk);

// Calculate a space mission below
console.log(distToMars * mpk);
let milesToMars = 139725000;
console.log(milesToMars / speed);
let hoursToMars = 7984.285714285715;
let daysToMars = hoursToMars / 24;
console.log(shuttle, 'will take', daysToMars, 'days to reach Mars');

// Print the results of the space mission calculations below
console.log(shuttle, "will take", daysToMars, "days to reach Mars");

// Calculate a trip to the moon below
let milesToMoon = distToMoon * mpk;
let hoursToMoon = milesToMoon / speed;
let daysToMoon = hoursToMoon / 24

// Print the results of the trip to the moon below
console.log(shuttle, 'will take', daysToMoon, 'days to reach the Moon');