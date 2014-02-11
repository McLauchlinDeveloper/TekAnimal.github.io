/**
 Corey McLauchlin
 Feb. 10, 2014
 Expressions_Wacky
 calculates density
 */
// define variable and prompt user for length
var length = prompt("What is the length of your object?");
// define variable and prompt user for width
var width = prompt("What is the width of your object?");
// define variable and prompt user for height
var height = prompt("What is the height of your object?");
// define variable and prompt user for mass
var mass = prompt("What is the mass(weight) of the object?");
// define array and store variables
var densCalc = [length, width, height, mass];
// calculate volume with stored, prompted variables
var volume = densCalc[0] * densCalc[1] * densCalc[2];
// calculate density using array variables
var dense = densCalc[3] / volume;
// clean up density output by rounding decimal places
var density = dense.toFixed(4);
// output of density to user
console.log("The density of your object is " + density + ".");
