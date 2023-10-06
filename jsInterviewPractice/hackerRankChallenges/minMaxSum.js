const minMaxSum = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    const minSumValue = sum - Math.min(...arr);
    const maxSumValue = sum - Math.max(...arr);

    console.log(maxSumValue + " " +minSumValue);
}

console.log(minMaxSum([1,2,3,4,5]));