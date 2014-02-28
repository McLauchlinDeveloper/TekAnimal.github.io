// Corey McLauchlin
// Feb. 27, 2014
// Functions_Personal
// multiplies two fractions and outputs the answer in decimal format

var num1 = prompt("What is the numerator of the first fraction?");
var den1 = prompt("What is the denominator of the first fraction?");
var num2 = prompt("What is the numerator of the second fraction?");
var den2 = prompt("What is the denominator of the second fraction?");
(num1 == 0) ? console.log("The number should be greater than 0.") : console.log("Ok.");
(den1 == 0) ? console.log("The number should be greater than 0.") : console.log("Ok.");
(num2 == 0) ? console.log("The number should be greater than 0.") : console.log("Ok.");
(den2 == 0) ? console.log("The number should be greater than 0.") : console.log("Ok.");

function multiply(num1, num2, den1, den2){

  var prodNum = num1 * den2;
  var prodDen = den1 * num2;
  var product = prodNum / prodDen;
   return(product.toFixed(5));

}

console.log("By multiplying the fractions the answer in decimal format is "+multiply(num1, num2, den1, den2)+".");