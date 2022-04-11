const repeatString = function(string, num) {
  let rtrstr='';
  if(num < 0) {
    rtrstr = 'ERROR';
  } else {
    for(i = 0; i < num; i++) {
      rtrstr += string;
    }
  }
  return rtrstr;
};

// Do not edit below this line
module.exports = repeatString;
