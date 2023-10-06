const findPoints = function (arr1, arr2) {
    let array1Score = 0;
    let array2Score = 0;
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] > arr2[i]) {
            array1Score++;
        } else if (arr2[i] > arr1[i]) {
            array2Score++;
        } 
    
      
    }
    return [array1Score, array2Score];
}


const findDistance = function (arr1, arr2) {
    let arr1Score = 0;
    let arr2Score = 0;
    
    
}
console.log(findPoints([5,6,7],[3,6,10]));