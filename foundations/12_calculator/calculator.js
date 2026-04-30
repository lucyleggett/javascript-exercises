const add = function(n1, n2) {
	const sum = n1 + n2
  return sum;
};

const subtract = function(n1, n2) {
	const product = n1 - n2;
  return product;
};

const sum = function(array) {
	const total = array.reduce((sum, value) => sum + value, 0);
  return total;
};

const multiply = function(array) {
	const total = array.reduce((sum, value) => sum * value, 1);
  return total;
};

const power = function(n1, n2) {
	const result = n1 ** n2;
  return result;
};

const factorial = function(n1) {
	let array = [];
  for (i = n1; i >= 1; i--) {
    array.push(i)
  }
  const factorial = array.reduce((acc, value) => acc * value, 1);
  return factorial;
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
