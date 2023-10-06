const moveZero = function (arr) {
  let i = 0;
  let len = arr.length;
  while (i < arr.length) {
    if (arr[i] !== 0) {
      i++;
    }
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }
  for (let j = i; j < len; j++) {
    arr[j] = 0;
  }
  return arr;
};

console.log(moveZero([8, 4, 0, 1, 2, 0, 44]));
