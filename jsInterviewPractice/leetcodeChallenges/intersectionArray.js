function intersectionOfArray(arr1, arr2) {
  let obj1 = {};
  let res = [];
  for (let i of arr1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj1[arr2[i]] >= 1) {
      res.push(arr2[i]);
      obj1[arr2[i]]--;
    }
  }
  return res;
}

console.log(intersectionOfArray([1, 2, 2, 1], [2, 2]));
