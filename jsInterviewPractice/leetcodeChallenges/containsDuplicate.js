const containsDuplicate = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
