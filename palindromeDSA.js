const isPalindrom = function (input) {
    return input === input.toString().split('').reverse().join('');
}

console.log(isPalindrom(121));