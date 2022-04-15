const reverseString = function(str) {
  let rtrstr;
  for(let i = str.length; i >= 0; i--) {
    rtrstr += str.substring[i,i-1];
  }
  return rtrstr;
};

// Do not edit below this line
module.exports = reverseString;
