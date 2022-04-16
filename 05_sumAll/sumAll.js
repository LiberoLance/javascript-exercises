const sumAll = function(startNum, endNum) {
  let sum = 0;
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
