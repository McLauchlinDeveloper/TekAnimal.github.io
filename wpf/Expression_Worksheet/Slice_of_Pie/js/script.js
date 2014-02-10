/*
Corey McLauchlin
Feb. 10, 2014
Expression_Worksheet Slices of Pie
 */


// number of slices per pizza
var pizzaSlices = 10;

// number of people at party
var partyPeople = 23;

// number of pizzas ordered
var pizzaOrdered = 8;


//calculates how many slices per person
var slicesPerPerson = pizzaOrdered * pizzaSlices / partyPeople;

slicePerPerson = parseFloat(slicesPerPerson).toFixed(2);

// Displays result - how many slices each person gets

console.log("Each person gets " + slicePerPerson + " slices of pizza.");