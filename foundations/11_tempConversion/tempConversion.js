const convertToCelsius = function(i) {
return Math.round (((i - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(j) {
return Math.round ((j * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};