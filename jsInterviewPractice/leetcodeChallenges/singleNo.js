const singleNo = function (num) {
  let obj = {};
  let temp = [];
  for (let i = 0; i < num.length; i++) {
    obj[num[i]] = (obj[num[i]] || 0) + 1;
  }
  for (let el in obj) {
    if (obj[el] === 1) {
      temp.push(el);
    }
  }
  return temp;
};

console.log(singleNo([5, 1, 2, 1, 2, 6]));
