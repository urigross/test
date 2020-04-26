"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meetsStaffRequirements = meetsStaffRequirements;
exports.meetsSpeedRangeRequirements = meetsSpeedRangeRequirements;
exports["default"] = exports.flightRequirements = exports.availableAirplanes = void 0;
var availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
}, {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
}];
exports.availableAirplanes = availableAirplanes;
var flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
exports.flightRequirements = flightRequirements;

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

;

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  var range = maxSpeed - minSpeed;

  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}

;
var _default = meetsSpeedRangeRequirements;
exports["default"] = _default;