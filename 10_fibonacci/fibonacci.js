const fibonacci = function(x) {
	return Math.round(((Math.pow(1.618, x) - Math.pow((1 - 1.618), x)) / 2.24))
};

// Do not edit below this line
module.exports = fibonacci;
