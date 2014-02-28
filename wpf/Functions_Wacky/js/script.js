/*
 Corey McLauchlin
 Feb. 27, 2014
 Functions Wacky
 calculate mach speed
*/
// variable for distance traveled
var dist = prompt("How far did the object travel? (in meters)");
// variable for time it took to travel distance
var time = prompt("How long did it take to travel the distance? (in minutes)");
// if statement validating value entered

if(dist == "" || dist == 0){
    console.log("Please enter a proper value.");

}else if(time == "" || time == 0){ //else it statement validating value entered
    console.log("Please enter a proper value.");
}
// variable declaring speed of sound
var soundSPD = 343;

// anonymous function calculating and returning velocity
var velocity = function velocity(){
    vel = dist / time;
    return(vel);
}

// function to calculate and clean up mach speed
function machSPD(){
var machSpeed = velocity() / soundSPD;
    return(machSpeed.toFixed(0));
}
// giving user the desire calculation result
console.log("The mach speed of your object is: "+machSPD()+".");




