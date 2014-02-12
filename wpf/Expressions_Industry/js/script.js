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

var rgb24 = pixelDens * 3;

var rgb48 = pixelDens * 6;

var cmyk = pixelDens * 4;

var grayScale16 = pixelDens * 2;

var grayScale8 = pixWidth * pixHeight;

var convertMb = 1024 * 1024;

console.log("The cost in memory for your image in 24-bit RGB (most common) is "+rgb24/convertMb+"MB. OR:\n"+rgb48/convertMb+"MB in 48-bit RGB.\n"+cmyk/convertMb+"MB in 32-bit CMYK.\n"+grayScale16/convertMb+"MB in 16-bit GrayScale.\n"+grayScale8/convertMb+"MB in 8-bit GrayScale.");