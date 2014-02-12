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

var convertMb = 1024 * 1024;

var rgb24 = (pixelDens * 3) / convertMb;

var rgb48 = (pixelDens * 6) / convertMb;

var cmyk = (pixelDens * 4) / convertMb;

var grayScale16 = (pixelDens * 2) / convertMb;

var grayScale8 = (pixWidth * pixHeight) / convertMb;

var rgb24Res = rgb24.toFixed(3);

var rgb48Res = rgb48.toFixed(3);

var cmykRes = cmyk.toFixed(3);

var grayScale16Res = grayScale16.toFixed(3);

var grayScale8Res = grayScale8.toFixed(3);



console.log("The cost in memory for your image in 24-bit RGB (most common) is "+rgb24Res+"MB. OR:\n"+rgb48Res+"MB in 48-bit RGB.\n"+cmykRes+"MB in 32-bit CMYK.\n"+grayScale16Res+"MB in 16-bit GrayScale.\n"+grayScale8Res+"MB in 8-bit GrayScale.");