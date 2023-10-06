function makingAnagram(str1, str2) {
  //   let ans = 0;
  //   let arr = s2.split("");
  //   for (let i = 0; i < s1.length; i++) {
  //     let index = arr.indexOf(s1[i]);
  //     if (index == "-1") {
  //       ans++;
  //     } else {
  //       arr.splice(index, 1);
  //     }
  //   }
  //   return ans + arr.length;

  let result = 0;
  let str2Array = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    if (str2Array.indexOf(str1[i]) == -1) {
      result++;
    } else {
      str2Array.splice(str2Array.indexOf(str1[i]), 1);
    }
  }
  return result + str2Array.length;
}

console.log(
  makingAnagram(
    "absdjkvuahdakejfnfauhdsaavasdlkj",
    "djfladfhiawasdkjvalskufhafablsdkashlahdfa"
  )
);
