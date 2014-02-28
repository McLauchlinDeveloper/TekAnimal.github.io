/*
 Corey McLauchlin
 Functions_Personal
 Feb. 27, 2014
 calculates chances to get shiny pokemon (I haven't played in years but thought it was interesting)
 */
// function declaration
var standard = standardC();
// function
function standardC(){
    // the standard chance is displayed if this function is called
    console.log("You have the standard chance of 1 in 8,192 of obtaining a shiny pokemon.");
}
// prompt and variable considering wild caught pokemon
var wild = prompt("Will the pokemon be a wild caught pokemon? (yes or no)");
// ternary calculating whether to give standard chance rate or deviate
(wild != "yes" || wild != "y") ? console.log("We will move on then.") : console.log(standard);
// prompt asking what breeding conditions
var parent = prompt("Is one of the parents foreign or shiny? (yes or no or both)");
// if one parent is foreign or shiny display chance
if(parent == "yes" || parent == "y"){
// chance display
   console.log("Your chances have increased to 1 in 200");
    // else if for if answer is no
}else if(parent == "no" || parent == "n"){
    // calling function for standard chance
    console.log(standard);
    // else if for if both parents are foreign or shiny
}else if(parent == "both" || parent == "b"){
    // displaying chance if both parents are shiny or foreign
    console.log("Your chances to obtain a shiny pokemon could be as great as 1 in 64 depending on your player ID.");
}