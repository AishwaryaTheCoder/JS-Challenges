function stringConstruction(str) {
   
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (!str.slice(0,i).includes(str[i])) {
            result++;
        }      
    }
    return result;

}

console.log(stringConstruction("abcd"));
console.log(stringConstruction("abab"));