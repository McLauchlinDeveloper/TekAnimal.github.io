/**
 * Created by bangalorn on 2/19/14.
 */
// calculates whether a specific jump is hard and high enough to clear the stairs
//greeting
console.log("Today we are going to calculate how easily you can get down a set of 10 stairs on a skateboard.")
// prompt and assign info to variable
var weight = prompt("How much do you weigh (enter number of lbs)");
// makes sure the proper value was assigned
(weight == "" || weight < 60) ? (console.log("You will not make it down the stairs or did not answer properly.")):(console.log("Your weight will make it down the stairs."));
