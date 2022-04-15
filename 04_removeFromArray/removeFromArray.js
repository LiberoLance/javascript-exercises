const removeFromArray = function(array, ...rmvelem) {
  if(array.includes(rmvelem)) {
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] === rmvelem) {
        array.splice(i,1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
