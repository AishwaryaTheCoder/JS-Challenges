const twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j < arr.lenght) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
      j++;
    }
  }
};
