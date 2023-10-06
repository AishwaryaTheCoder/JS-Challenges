const stronPass = function (n, password) {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";

    let numCount = 0, lowecaseCount = 0, upperCaseCount = 0, specialCharCount = 0;
    for (let i = 0; i < password.length; i++){
        if (numbers.includes(password[i])) {
            numCount = 1;
        }
        if (lower_case.includes(password[i])) {
            lowecaseCount = 1;
        }
        if (upper_case.includes(password[i])) {
            upperCaseCount = 1;
        }
        if (special_characters.includes(password[i])) {
            specialCharCount = 1;
        }
    }
    let totalScore = numCount + lowecaseCount + upperCaseCount + specialCharCount;

    if (n >= 6) {
        if (totalScore === 4) {
            return 0;
        }
        return 4 - totalScore;
    } else {
        let addChar = 6 - n;
        if (totalScore === 4) {
            return addChar;
        }
        return Math.max(addChar, 4 - totalScore);
    }

}