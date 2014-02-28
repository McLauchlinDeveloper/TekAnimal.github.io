// Corey McLauchlin
// Feb. 27, 2014
// Functions_Personal
// multiplies two fractions and outputs the answer in decimal format


// variable for numerator of first fraction
var num1 = prompt("What is the numerator of the first fraction?");
// variable for denominator of first fraction
var den1 = prompt("What is the denominator of the first fraction?");
// variable for numerator of second fraction
var num2 = prompt("What is the numerator of the second fraction?");
// variable for denominator of second fraction
var den2 = prompt("What is the denominator of the second fraction?");
// ternaries making sure all numbers are greater zero
(num1 == 0) ? console.log("Numbers should be greater than 0.") : console.log("");
(den1 == 0) ? console.log("Numbers should be greater than 0.") : console.log("");
(num2 == 0) ? console.log("Numbers should be greater than 0.") : console.log("");
(den2 == 0) ? console.log("Numbers should be greater than 0.") : console.log("");
// function to figure the product
function multiply(num1, num2, den1, den2){
//var to find the numerator of the answer
  var prodNum = num1 * den2;
    // var  to find the denominator of the answer
  var prodDen = den1 * num2;
    // calculating decimal
  var product = prodNum / prodDen;
    // returning decimal and giving appropriate decimal places
   return(product.toFixed(5));

}
// displaying answer
console.log("By multiplying the fractions the answer in decimal format is "+multiply(num1, num2, den1, den2)+".");