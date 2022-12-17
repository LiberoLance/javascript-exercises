const fibonacci = function(x) {
	let fib = 0;
	const gr = 1.618035;

	if(x < 0){
		fib = 'OOPS';	
	}
	else {
		fib = Math.round(((Math.pow(gr, x) - Math.pow((1 - gr), x)) / Math.sqrt(5)));
	}
	return fib;
};

// Do not edit below this line
module.exports = fibonacci;
