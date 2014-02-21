/*
Corey McLauchlin
Feb. 20, 2014
Conditionals_Personal
 */
//establishes how much memory the phone has
var mem = prompt("How much memory does your phone have?  (Enter in MB)");
// establishes how much of the memory is in use
var memUse = prompt("How many MBs of memory are in use?");
// converts the memory in use to a percentage
var memPercent = (memUse / mem)*100;
// if statement saying that if the memory is in use over a certain limit, in this case 60%
if(memPercent > 60)
{
    // the memory has been cleared, telling user
    console.log("Memory has been cleared.");
}
//if the memory does not exceed use limit, it does not need to be cleared.
else {console.log("Your memory does not be cleared yet.");}

