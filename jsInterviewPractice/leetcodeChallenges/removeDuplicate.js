function removeDuplicate(arr) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      arr[i] = arr[j];
      i++;
    }
    j++;
  }
  return i + 1;
}

console.log(removeDuplicate([1, 1, 2]));
