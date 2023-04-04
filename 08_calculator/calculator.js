const add = function() {
	let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

const subtract = function(a) {
	let total = a;
  for (let i = 1; i < arguments.length; i++) {
    total -= arguments[i];
  }
  return total;
};

const sum = function(array) {
	let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  let total = array[0];
  for (let i = 1; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(a, b) {
  if (b < 1) {
    return 1;
  }
  
  if (b == 1) {
    return a;
  }

	return a * power(a, b - 1);
};

const factorial = function(a) {
  if (a <= 1) {
    return 1;
  }

  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
