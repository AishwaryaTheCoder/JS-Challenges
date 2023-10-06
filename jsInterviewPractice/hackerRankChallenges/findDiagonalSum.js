const diagonalSumdifference = function (arr) {
    let length = arr.length;
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length; j++){
            if (i === j) {
                d1 += arr[i][j];
            }
            if (i + j === length - 1) {
                d2 += arr[i][j];
            }
        }
   

    }

 return Math.abs(d1 - d2);
}

console.log(diagonalSumdifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
console.log(object);
