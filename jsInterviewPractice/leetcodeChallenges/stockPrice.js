const stockPRice = function (arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      profit += arr[i + 1] - arr[i];
    }
  }
  return profit;
};
console.log(stockPRice([7, 1, 5, 3, 6, 4]));
