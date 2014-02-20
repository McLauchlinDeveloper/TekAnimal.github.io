/*
Corey McLauchlin
Feb. 19, 2014

 */
// calculates whether a certain speed and weight will be enough to clear the stairs
//greeting
console.log("Today we are going to calculate how easily you can get down a set of 10 stairs on a skateboard.")
// prompt and assign info to variable
var weight = prompt("How much do you weigh (enter number of lbs)");
// determines if captured data is suitable (would add loop and elseif if it wasn't ternary)
(weight == "" || weight < 60) ? (console.log("You will not make it down the stairs or did not answer properly.")):(console.log("Your weight will make it down the stairs."));
// convert weight in lbs to weight in kg
var weightKg = weight * 2.2;
// gathering and storing information for distance
var distance = prompt("What is the distance (in ft) between the starting point and point at which you jump down the stairs (runup)?");
//converting feet to meters
var distaMet = distance * .3048;
// finding acceleration
var accel = weightKg * 9.8;
// outputing acceleration = force in gravity
console.log("You will have a force of gravity (your acceleration) on you equal to "+accel+"N (Newtons).");
// conditional estimating that amount of acceleration and momentum should exceed a base amount to get you down the stairs
if(distaMet+accel >= 1000){

console.log("You will make it down the stairs SAFELY.");
}else{
    console.log("If you try, you may get hurt.");
}