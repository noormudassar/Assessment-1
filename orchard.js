///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// we start by creating a variable for the total number of acres
let totalAcres = 0;

// we want to loop through the array and then taking each individual value, add it to the total
for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i];
}
// we do this for the gala acres and then the pink acres
for (let i = 0; i < galaAcres.length; i++) {
  totalAcres += galaAcres[i];
}
for (let i = 0; i < pinkAcres.length; i++) {
  totalAcres += pinkAcres[i];
}
// console log the total to make sure all the values are computing correctly
console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// using the total acres from before, we divide that number by 7 to find the average number of acres picked per day
let averageDailyAcres = totalAcres / 7;

// we log that to the console
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

// the while loop will continue as long as the numbers of acres is larger than or equal to 0
while (acresLeft >= 0) {
  acresLeft -= averageDailyAcres; // this subtracts the daily number from the acres that are left
  days++; // this could also be written as days += 1. we jsut want to add a day per average hours taken away from the total to calculate how many days this will take
}
// we log that to the console
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// i used the second method from above and looped through the original array, took each value and multiplied it by the number of tons per acre. that value was then added to the new array.

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * 6.5);
}
console.log(fujiTons);

for (let i = 0; i < galaAcres.length; i++) {
  galaTons.push(galaAcres[i] * 6.5);
}
console.log(galaTons);

for (let i = 0; i < pinkAcres.length; i++) {
  pinkTons.push(pinkAcres[i] * 6.5);
}
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// we iterate through each of the tons of apples then multiply that value by 2000 to get pounds per day per ton. these values are then added to the individual apple totals.
for (let i = 0; i < fujiTons.length; i++) {
  fujiPounds += fujiTons[i] * 2000;
}
console.log(fujiPounds);

for (let i = 0; i < galaTons.length; i++) {
  galaPounds += galaTons[i] * 2000;
}
console.log(galaPounds);

for (let i = 0; i < pinkTons.length; i++) {
  pinkPounds += pinkTons[i] * 2000;
}
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// to get total profits, the number of total pounds per each individual apple variety are multiplied by the price per pound of the apples
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(
  `Fuji apple profit: ${fujiProfit}, Gala apple profit: ${galaProfit}, Pink apple profit: ${pinkProfit}`
);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// adding up all the individual profits to get the total profit number
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`Total profit: ${totalProfit}`);
