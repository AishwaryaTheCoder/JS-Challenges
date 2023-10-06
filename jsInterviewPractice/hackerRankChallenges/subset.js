let res = [];
let temp = [];
function findSubset(arr) {
    

    function recusrsiveFunc(arr, i) {
        //base condition to break
        if (i == arr.length) return res.push([...temp]);

        temp.push(arr[i]);
        recusrsiveFunc(arr, i + 1);
        temp.pop(arr[i]);
        recusrsiveFunc(arr, i + 1);
    }
    recusrsiveFunc(arr, 0);
    return res;
}
console.log(findSubset([1,2,3]));