/**
Corey McLauchlin
Expressions_Industry
script that calculates memory cost of images
 */
// gather dpi image data
var dpi = prompt("What is the dpi of the image?");
// gather width image data
var width = prompt("What is the width of the image in inches?");
// gather height image data
var height = prompt("What is the height of the image in inches?");
// converting width in inches to width in pixels
var pixWidth = width * dpi;
// converting height in inches to height in pixels
var pixHeight = height * dpi;
// establishing pixel density
var pixelDens = pixWidth * pixHeight;
// variable used to convert pixel density to size in MB
var convertMb = 1024 * 1024;
// calculating size in 24-bit RGB
var rgb24 = (pixelDens * 3) / convertMb;
// calculating size in 48-bit RGB
var rgb48 = (pixelDens * 6) / convertMb;
// calculating size in 32-bit CMYK
var cmyk = (pixelDens * 4) / convertMb;
// calculating size in 16-bit GrayScale
var grayScale16 = (pixelDens * 2) / convertMb;

var grayScale8 = (pixWidth * pixHeight) / convertMb;

var rgb24Res = rgb24.toFixed(3);

var rgb48Res = rgb48.toFixed(3);

var cmykRes = cmyk.toFixed(3);

var grayScale16Res = grayScale16.toFixed(3);

var grayScale8Res = grayScale8.toFixed(3);



console.log("The cost in memory for your image in 24-bit RGB (most common) is "+rgb24Res+"MB.\n OR:\n"+rgb48Res+"MB in 48-bit RGB.\n"+cmykRes+"MB in 32-bit CMYK.\n"+grayScale16Res+"MB in 16-bit GrayScale.\n"+grayScale8Res+"MB in 8-bit GrayScale.");