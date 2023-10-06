const addition = function (arr, target) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

// console.log(addition([1,2,6,5,7,4],24));

// Algorithm - technique - two pointers / divide and conquer

const targetOptimalSolution = function (arr, target) {

    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        let value = arr[leftPointer] + arr[rightPointer]
        if (value === target) {
            return [arr[leftPointer], arr[rightPointer]];
        }
        if (value > target) {
            rightPointer--;
        }
        if (value < target) {
            leftPointer++;
        }
    }
    return 'I did not find any pair';
    
}
// console.log(targetOptimalSolution([-5,-4,-2,-1,0,1],-4));

//[-5,-4,-2,-1,0,1], 0 => [-1,1]

const findUniqueValue = function (str) {
    if (str.length <= 1) return true;
    let obj = {};
    for (let i = 0; i < str.length; i++){
        obj[str[i]] = (obj[str[i]] || 0) + 1;
        if (obj[str[i]] > 1) return false;
    }
    return true;
}

console.log(findUniqueValue("gk"));