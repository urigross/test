"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _airplane = _interopRequireWildcard(require("./airplane"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function displayFuelCapacity() {
  _airplane.availableAirplanes.forEach(function (element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircavailableAirplanesrafts.forEach(function (element) {
    console.log(element.name + ' meets staff requirements: ' + (0, _airplane.meetsStaffRequirements)(element.availableStaff, _airplane.flightRequirements.requiredStaff));
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  _airplane.availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets speed range requirements:' + (0, _airplane["default"])(element.maxSpeed, element.minSpeed, _airplane.flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();