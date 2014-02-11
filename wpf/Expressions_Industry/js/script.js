/**
Corey McLauchlin
Expressions_Industry
script that calculates memory cost of images
 */

var dpi = prompt("What is the dpi of the image?");

var width = prompt("What is the width of the image in inches?");

var height = prompt("What is the height of the image in inches?");

var pixWidth = (width * dpi);

var pixHeight = (height * dpi);

var pixelDens = (width * dpi) * (height * dpi);

var rgb =