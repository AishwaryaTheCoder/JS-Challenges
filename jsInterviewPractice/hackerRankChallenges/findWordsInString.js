const countWords = function (str) {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if (str[i].charCodeAt(0) >=65 && str[i].charCodeAt(0)<=90) {
            count++;
        }
        i++;
    }
    return count + 1;
}

console.log(countWords('myHusbandIsVeryFunnyAndILoveHim'));