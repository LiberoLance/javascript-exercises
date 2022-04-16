const removeFromArray = function(array, ...removeArray) {
  for(let i = 0; i < removeArray.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(removeArray[i] === array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
