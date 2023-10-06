const findElement = function (arr) {
    let maxValue = arr[0]
   
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;

        if (i === arr.length - 1) {
            return obj[maxValue];
        }
    }
}

console.log(findElement([4, 4, 1, 3]));
