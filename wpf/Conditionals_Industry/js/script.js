/*
Corey McLauchlin
Feb. 20, 2014
Conditionals_Industry
calculates whether a client will be able to a have a site made
 */
// asks user how much money they have for site and stores it
var money = prompt("How much money do you have to spend on your website? (Preferably over $199)");
//makes sure money has an appropriate value
if(money == "" || money <= 199){console.log("We cannot make a site for you at this time.");}
// stores what kind of site the user wants created
var site = prompt("What kind of site do you need? (Select 1-3)\n 1.  Business Site\n2.  Personal Blog\n3.  Social Media Site");
// if use picks business site, tell them so
if(site == 1 && money >= 200) {console.log("We would be happy to make a business site for you for $"+money+".");
} else if(site == 2 && money >= 200){
// if user picks personal blog, tell them so
    console.log("We would be happy to make a personal blog for $"+money+".");
} else if(site == 3 && money >= 200){
// if user picks social media, make sure you know they know
    console.log("We would love to make a social media site for $"+money+".");
}
// if user does not pick from list, site can't be made.
else {console.log("We are sorry, but we cannot make you a website at this time.")}