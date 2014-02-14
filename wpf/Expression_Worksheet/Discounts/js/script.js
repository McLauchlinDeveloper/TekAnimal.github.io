// Expression_Worksheet discounts
var item = "purse";

var origPrice = 35;

var discount = 15;

var disPer = origPrice * discount / 100;

var salesTax = origPrice * 9 / 100;

var priceTax = disPer + salesTax;

console.log("Your "+item+" was originally $"+origPrice+", but after a "+discount+"% discount, it is now $"+disPer+" without tax, and $"+priceTax+".");