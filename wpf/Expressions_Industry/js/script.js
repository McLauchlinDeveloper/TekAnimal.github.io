/**
Corey McLauchlin
Expressions_Industry
script that calculates memory cost of images
 */

var dpi = prompt("What is the dpi of the image?");

var width = prompt("What is the width of the image in inches?");

var height = prompt("What is the height of the image in inches?");

var pixWidth = width * dpi;

var pixHeight = height * dpi;

var pixelDens = pixWidth * pixHeight;

var rgb24 = pixWidth * pixHeight * 3;

var rgb48 = pixWidth * pixHeight * 6;

var cmyk = pixWidth * pixHeight * 4;

var grayScale16 = pixWidth * pixHeight * 2;

var grayScale8 = pixWidth * pixHeight;

var convertMb = 1024 * 1024;

