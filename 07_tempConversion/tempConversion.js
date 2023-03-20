const convertToCelsius = function(tempf) {
  let tempc = (tempf - 32) * (5/9);
  return Number(tempc.toFixed(1));
};

const convertToFahrenheit = function(tempc) {
  let tempf = (tempc*(9/5) + 32);
  return Number(tempf.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
