const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(list) {
	let sum = 0;
	for(const num of list) {
		sum += num;
 	}
	return sum;
};

const multiply = function(list) {
	let product = 1;

	for(const num of list) {
		product *= num;
	}
	return product;
};

const power = function(x, y) {
	const base = x;

	if(y == 0) {
		x = 1;
	}
	while(y > 1){
		x *= base;
		y--;
	}
	return x;
};

const factorial = function(x) {
	let product = x;
	if(x == 0) {
		product = 1;
	}
	x--;
	while(x > 1){
		product *=  x;
		x--;
	}
	return product;
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
