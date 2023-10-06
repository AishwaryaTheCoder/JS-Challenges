function reverseFunction(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++, end--;
  }
}

function rotateArray(arr, k) {
  k = k % arr.length;
  reverseFunction(arr, 0, arr.length - 1);
  reverseFunction(arr, 0, k - 1);
  reverseFunction(arr, k, arr.length - 1);
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 44444444));

//87654321 => 56784321 => 56781234
console.log(rotateArray([]));
