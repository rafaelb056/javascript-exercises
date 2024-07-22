const convertToCelsius = function(tempF) {
  let cConversion = (tempF - 32) * (5/9);
  let cRounded = Math.round(cConversion * 10) / 10;
  return cRounded;
};

const convertToFahrenheit = function(tempC) {
  let fConversion = (tempC * (9/5) + 32);
  let fRounded = Math.round(fConversion * 10)/ 10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
