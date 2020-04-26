"use strict";

// https://www.linkedin.com/in/urigross/
var x = Number(window.prompt("Enter number:"));
var y = Number(window.prompt("Enter Pow factor")); // Way 1:

console.log("Way #1: ".concat(Math.pow(x, y))); // Way 2:

function XPowY(x, y) {
  if (y === 0) {
    return 1;
  } else {
    var sum = -x;

    for (var i = 0; i >= -y; i--) {
      for (var j = 0; j > -i; i--) {
        sum -= -sum;
        console.log("sum: ".concat(sum, " i: ").concat(i, " j:").concat(j));
      }
    }

    return x > 0 ? sum.toString().substring(1) : sum;
  }
}

console.log("Way #2: ".concat(XPowY(x, y)));