const superReduceString = function (str) {

    let stack = [];
    let i = 0;
    while (i < str.length) {
        stack.push(str[i]);
        i++;

        let last = stack[stack.length - 1];
        let first = stack[stack.length - 2];
        if (last === first) {
            stack.pop();
            stack.pop();
        }

    }
    return stack.join("") ? stack.join("") : "Empty String";
 
}

console.log(superReduceString('aaabccddd'));
console.log(superReduceString(""));
//abd