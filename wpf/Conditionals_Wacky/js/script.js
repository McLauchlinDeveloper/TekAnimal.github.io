/*
Corey McLauchlin
Feb. 19, 2014

 */
// calculates whether a specific jump is hard and high enough to clear the stairs
//greeting
console.log("Today we are going to calculate how easily you can get down a set of 10 stairs on a skateboard.")
// prompt and assign info to variable
var weight = prompt("How much do you weigh (enter number of lbs)");
// determines if captured data is suitable (would add loop and elseif if it wasn't ternary)
(weight == "" || weight < 60) ? (console.log("You will not make it down the stairs or did not answer properly.")):(console.log("Your weight will make it down the stairs."));
// convert weight in lbs to weight in kg
var weightKg = weight * 2.2;

var heightJmp = prompt("How high did you jump? ")