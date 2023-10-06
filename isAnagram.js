// Frequency counters technique-algorithm

const isAnagram = function (str1, str2) {
    // guard clausing

    if (str1.length !== str2.length) return false;
    let obj1 = {}, obj2 = {};

    for (let i = 0; i < str1.length; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("ACT", "CTT"));