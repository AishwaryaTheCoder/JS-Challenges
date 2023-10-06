function validString(str) {
    let tempArray = str.split("");
    let obj = {};
    for (let el of tempArray) {
        obj[el] = (obj[el] || 0) + 1;
    }
    let resultArray = [...new Set(Object.values(obj))];
    resultArray.sort((a, b) => b - a);
    if (resultArray.length > 2) return "NO";

    if (resultArray.length === 2) {
        let count0 = 0;
        let count1 = 0;

        for (let i = 0; i < Object.values(obj); i++){
            if (Object.values(obj)[i] === resultArray[0]) count0++;
            if (Object.values(obj)[i] === resultArray[1]) count1++;
        }

        if (resultArray[0] - resultArray[1] === 1 && count0 === 1) {
            return "YES";
        }
        if (resultArray[1] === 1 && count1 === 1) {
            return "YES";
        } else {
            return "NO";
        }
        
    }
    return "YES";
}

console.log(validString("aabbcd"));