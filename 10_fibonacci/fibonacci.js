const fibonacci = function(x) {
	const gr = 1.618035; 
	return Math.round(((Math.pow(gr, x) - Math.pow((1 - gr), x)) / Math.sqrt(5)));
};

// Do not edit below this line
module.exports = fibonacci;
