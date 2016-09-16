function split(wholeArray) {
  return [wholeArray.slice(0, wholeArray.length/2), wholeArray.slice(wholeArray.length/2, wholeArray.length)]

}

function merge(array1, array2) {
  var returnedArray = [];
  var i = 0
  var j = 0

  while(i < array1.length && j < array2.length) {
    if(array1[i] < array2[j]) {
      returnedArray.push(array1[i])
      i++
    }
    else {
      returnedArray.push(array2[j]);
      j++;
    }
  }
    while(i < array1.length) {
      returnedArray.push(array1[i]);
      i++;
    }
    while(j < array2.length) {
      returnedArray.push(array2[j]);
      j++;
    }


  return returnedArray;
}

mergeSort = function(array) {
  var sortedArray = [];
  var splitArray = split(array);

  if(array.length === 1) {
  }
}



// i < length && j < length
