"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, age) {
  _classCallCheck(this, User);

  this.name = name;
  this.age = age;
};

function printName(user) {
  console.log("Your name is: ".concat(user.name));
}

function printAge(user) {
  console.log("Your age is: ".concat(user.age));
}