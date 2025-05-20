const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((res, val) => res + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((res, val) => res * val, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(val) {
	let res = 1;
  while (val > 0) {
    res *= val;
    val--;
  }
  return res;
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
