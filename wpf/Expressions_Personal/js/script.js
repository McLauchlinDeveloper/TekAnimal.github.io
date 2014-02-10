/*
 Corey McLauchlin
 Expressions_Personal
 script calculates how much money is spent out of a yearly budget in percent
 */


// declaring, defining, and storing variable for budget for year
var budget = prompt("What is your entire budget for the year?");

// declaring, defining, and storing variable for food out of budget
var food = prompt("If you make " + budget + " a year, how much will be spent on food?");

// declaring, defining, and storing variable for rent out of budget
var rent = prompt("How much will be spent on rent out of the " + budget + "?");

// declaring, defining, and storing variable for other expenses out of budget
var other = prompt("How much of the " + budget + " will be spent on other expenses?");

//calculating food percentage
var foodPercent = food / budget * 100;
// parse food percent and only keep 2 decimal places
var foodPercentage = parseFloat(foodPercent).toFixed(2);
