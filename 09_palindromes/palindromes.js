const palindromes = function (text) {
	let palindrome = false;
	let compText = '';
	text = text.trim();
	text = text.toLowerCase();
	let n = text.length;

	for(i = 0; i < n; i++){
		if(text[i] >= 'a' && text[i] <= 'z'){
			compText += text[i]
		}
	}
	const reverse = compText.split('').reverse().join('');
	console.log(compText);
	console.log(reverse);
	if(compText == reverse){
		palindrome = true;
	}
	return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
