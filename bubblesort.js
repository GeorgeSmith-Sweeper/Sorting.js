function bubbleSort(array) {
  console.log(array);
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
