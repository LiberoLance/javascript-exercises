const repeatString = function(string, num) {
  let rtrstr='';
  if(num > 0) {
    for(i = 0; i < num; i++) {
      rtrstr += string;
    }
  } else {
    rtrstr = 'ERROR';
  }
  return rtrstr;
};

// Do not edit below this line
module.exports = repeatString;
