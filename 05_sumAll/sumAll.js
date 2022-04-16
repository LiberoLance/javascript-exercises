const sumAll = function(startNum, endNum) {
  let sum = 0;

  if(isNaN(startNum) || isNaN(endNum) || startNum < 0 || endNum < 0) {
    return 'ERROR';
  }

  if(startNum > endNum) {
    let swap = startNum;
    startNum = endNum;
    endNum = swap;
  }
 
  for(let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
