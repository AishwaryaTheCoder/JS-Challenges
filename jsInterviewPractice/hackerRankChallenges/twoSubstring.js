const twoString = function (str1, str2) {
  let obj1 = {},
    obj2 = {};
  if (str1.length <= 0 || str2.length <= 0) return "Please enter valid string";

  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = 1;
  }
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      return "Yes";
    }
  }
  return "No";
};

console.log(twoString("cdecdecdecde", "hackerrankcommunity"));
