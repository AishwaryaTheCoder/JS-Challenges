const plusOne = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === 9) {
      num[i] = 0;
    } else {
      num[i]++;
      return num;
    }
  }
  num.unshift(1);
  return num;
};
console.log(plusOne([9, 9]));
