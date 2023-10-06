//map returns a new array based on computation
const num = [1, 2, 3, 4];

const mapExample = num.map((num) => {
    return num * 10;
});

// console.log(mapExample);

//map vs foreach
//foreach doesnt returns an array. it also doesnt accept chaining methods
const foreachREsult = num.forEach((num,i) => {
   return num[i] = num + 3;
});

console.log(mapExample,foreachREsult,num );