/*
 Corey McLauchlin
 Functions_Personal
 Feb. 27, 2014
 calculates chances to get shiny pokemon
 */
var standard = standardC();

function standardC(){
    console.log("You have the standard chance of 1 in 8,192 of obtaining a shiny pokemon.");
}

var wild = prompt("Will the pokemon be a wild caught pokemon? (yes or no)");

(wild != "yes" || wild != "y") ? console.log("We will move on then.") : console.log(standard);

var parent = prompt("Is one of the parents foreign or shiny? (yes or no or both)");

if(parent == "yes"){

   console.log("Your chances have increased");
}