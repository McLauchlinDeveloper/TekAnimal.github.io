/*
Corey McLauchlin
Feb. 20, 2014
Conditionals_Personal
 */

var mem = prompt("How much memory does your phone have?  (Enter in MB)");

var memUse = prompt("How many MBs of memory are in use?");

var memPercent = (memUse / mem)*100;

if(memPercent > 60)
{
    console.log("Memory has been cleared.");
} else {console.log("Your memory does not be cleared yet.");}

