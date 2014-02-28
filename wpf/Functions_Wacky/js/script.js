/*
 Corey McLauchlin
 Feb. 27, 2014
 Functions Wacky
 calculate mach speed
*/

var dist = prompt("How far did the object travel? (in meters)");
var time = prompt("How long did it take to travel the distance? (in minutes)");
if(dist == "" || dist == 0){
    console.log("Please enter a proper value.");
}else if(time == "" || time == 0){
    console.log("Please enter a proper value.");
}
var soundSPD = 343;

var velocity = function velocity(){
    vel = dist / time;
    return(vel);
}


function machSPD(){
var machSpeed = velocity() / soundSPD;
    return(machSpeed.toFixed(0));
}

console.log("The mach speed of your object is: "+machSPD()+".");




