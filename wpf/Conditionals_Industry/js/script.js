/*
Corey McLauchlin
Feb. 20, 2014
Conditionals_Industry
calculates whether a client will be able to a have a site made
 */
// asks user how much money they have for site and stores it
var money = prompt("How much money do you have to spend on your website?");

if(money = ""){console.log("You will not have a site made for you");}

var siteType = prompt("What kind of site do you need? (Select 1-3)\n 1.  Business Site\n2.  Personal Blog\n3.  Social Media Site");


if(siteType = 1 && money > 1000){
    console.log("We would be happy to make a business site for you!");
} else if(siteType = 2 && money > 250) {
    console.log("We would love to make your personal blog for you!");
} else if(siteType = 3 && money > 500) {
    console.log("We will take pleasure in making your social media site!");
} else {console.log("We unfortunately cannot help you make a site.");}