// conditional logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45;
// if child is old enough and over 48 inches in height, print "you can ride!"
if(kidHeight > minHeight){
// you can ride
    console.log("You can ride!");
}
else if(kidHeight > wParentHeight){
// you can ride with a parent
    console.log("You can ride with a parent");
}
else
{
    // you cannot ride
    console.log("Sorry, you need to grow more!");
}