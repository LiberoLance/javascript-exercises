const reverseString = function(str) {
  let rtrstr = '';
  for(let i = str.length - 1; i >= 0; i--) {
    rtrstr += str.charAt(i);
  }
  return rtrstr;
};

// Do not edit below this line
module.exports = reverseString;
