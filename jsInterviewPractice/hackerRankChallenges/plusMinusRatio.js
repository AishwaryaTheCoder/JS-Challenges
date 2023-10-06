let positiveValueCount = 0;
let negativeValueCount = 0;
let zeroValueCount = 0;

const findRatio = function (arr, n=arr.length) {
    for (let el of arr){
        el == 0 ? zeroValueCount++ : el > 0 ? positiveValueCount++ :negativeValueCount++
        // if (arr[i] == 0) {
        //     zeroValueCount++;
            
        // } else
        // if (arr[i] < 0) {
        //     negativeValueCount++;
            
        // } 
        // if (arr[i] > 0) {
        //     positiveValueCount++;
            
        // }
    }
    return [+(zeroValueCount / n).toFixed(n),(negativeValueCount / n).toFixed(n), (positiveValueCount / n).toFixed(n)];
}

console.log(findRatio([-4,3,-9,0,4,1],6));