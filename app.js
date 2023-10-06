// /*
// console.log(`We are learning !!`);

// // Adding element to an array

// // const name = "GOPAL";
// // array1.push(name);

// // array2.push(name);
// // console.log(array2);

// // array2[4] = 11;
// // console.log(array2);

// // const age = 24;

// // get out array

// // const val = array2[4];
// // console.log(val);

// // Slice and splice

// // //1. Slice -> retruns an array, but does not mutate an original array

// // const result1 = array1.slice(1, 4);
// // console.log(result1);
// // console.log(array1);

// // //2. splice - return an array,  and also mutates an original array

// // const result2 = array1.splice(2, 2);
// // console.log(result2); // [3,4]
// // console.log(array1); // [1,2,5]

// // Data Transformation methods

// // map, filter and reduce

// // higher order functions ->

// // const mapResult = array1.map((el) => el * 2);
// // console.log(mapResult);
// // console.log(array1);

// // const filterArray = array1.filter((el) => el > 3);
// // console.log(filterArray);

// // // indexOf
// // let array1 = [1, 2, 3, 4, 5];
// // const array2 = [6, 7, 8, 9, 10];

// // const index1 = array1.indexOf(4);
// // console.log(index1);

// // //findIndex

// // const find = array1.findIndex((el) => el > 2);
// // console.log(find);

// // //forEach

// // array1.forEach((el) => console.log(el));

// // Given is an array n with integers. Return true if it contains more four than zero.

// const moreThan4Zero = function (arr) {
//   let result = 0;
//   if (arr.length < 4) return;
//   if (arr.length >= 4) {
//     arr.forEach((el) => {
//       el === 0 ? result++ : result;
//     });
//   }
//   return result >= 4 ? true : false;
// };

// const r1 = moreThan4Zero([3, 1, 4, 4, 4, 1, 0, 0]);
// console.log(r1);

// // Reverse string

// // gopal -> lapog
// // Aishwarya -> ayrawhsiA
// // KOTWAL -> LAWTOK

// const reverseString = function (str) {
//   return str.split("").reverse().join("");

//   //['g','o','p','a','l'] ->
// };

// const name1 = reverseString("ayrawhsiA");
// console.log(name1);

// name1.split();

// // palindrome -> 121, 445

// function checkPalindrome(num1) {
//   let tempNum = (num1 + "").toString().split("").reverse().join("");
//   return tempNum == num1 ? true : false;
// }
// console.log(checkPalindrome("gog"));

// */

// // console.log(typeof "Aish");

// // let fruit = true;

// // fruit = "apple"; //value get changed at the time of execution for let data type
// // console.log(typeof fruit);

// // let year;
// // console.log(typeof year);

// // const surname = "Kotwal";

// // // surname = "khan";

// // var job = "coder";
// // job = "student";
// // console.log(job);

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);
// console.log("Mark BMI is " + BMIMark);

// let BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("John BMI is " + BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
// //example of template literals
// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI is (${BMIMark}) is higher than John's BMI (${BMIJohn})`
//   );
// } else {
//   console.log(
//     `John's BMI is (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`
//   );
// }

// //type conversion. only string, number can be converted.

// const year = "1996";
// console.log(year + 18);
// console.log(Number(year) + 18);

// //type coersion + will automatically do a coercion whenever there is a operation btn a no and string
// console.log("I will become a manager in another " + 5 + " years");

// // falsy values 0.'', undefined, null, NaN

// let scoreDolphin = 96 + 108 + 89;
// let scoreKoalas = 88 + 91 + 110;
// console.log(`Dolphine score ${scoreDolphin} and Koals score is ${scoreKoalas}`);

// if (scoreDolphin > scoreKoalas) {
//   console.log("Dolphins wins the trohpy");
// }
// if (scoreDolphin === scoreKoalas) {
//   console.log("Both win the trophy");
// } else {
//   console.log("Koalas wins the trohpy");
// }

// let age = 5;
// const compareAge =
//   age < 0 ? "Age cannot be in negative" : age >= 18 ? "Major" : "Minor";
// console.log(compareAge);

// let bill = 30;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(tip);

// console.log(Boolean(true) + Boolean(false));

// function foodProcessor(apples, oranges) {
//   console.log(apples, oranges);
// }

// // three ways to write functiond

// //1.0 Function declaration
// doYouLoveIndia();

// function doYouLoveIndia() {
//   console.log("yes, I do");
// }

// //2. function expression

// const india = function () {
//   console.log("INDIA IS GREAT");
// };

// india();

// //3. arrow function

// // function calling another function

// const fn1 = function callFn(Ism1) {
//   console.log(`I am function 1`);
//   india();
//   Ism1();
// };
// fn1(doYouLoveIndia);

// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphine = calcAverage(44, 23, 71);
// let scoreKoalass = calcAverage(65, 54, 49);

// console.log(scoreDolphin, scoreKoalass);

// const checkWinner = function (avgDolphine, avgKoalas) {
//   if (avgDolphine >= 2 * avgKoalas) {
//     console.log(`Dolphine team wins the trophy ${avgDolphine} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphine) {
//     console.log(`Koalas team wins the trophy ${avgDolphine} vs ${avgKoalas}`);
//   } else {
//     console.log("No team wins");
//   }
// };
// checkWinner(scoreDolphin, scoreKoalass);

// //Arrays. two imp DS are arrays and objects.

// const grocery = ["tomato", "potato", "green chilly", "cheakpees"];
// console.log(grocery.length); //4 length
// console.log(grocery[grocery.length - 1]); //to get the last element of an array(4-1)

// //array operations
// grocery.push("black chana"); //push is basically a function which we use with an array.It add
// //element at last position
// console.log(grocery);

// //unshift add element at first position
// grocery.unshift("sugar");
// console.log(grocery);

// //pop removes last element of an array
// grocery.pop();
// console.log(grocery);

// //shift removes first element of an array
// grocery.shift();
// console.log(grocery);

// //includes methods returns a boolean result
// grocery.includes("potato"); //it will return true and it also does not consider type coersion

// //
// const calcTip = function (bill) {
//   let tip;
//   let total;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   // total = bill + tip;
//   // return [tip, total];
//   return tip;
// };

// // const [tip1, total1] = calcTip(255);
// // console.log(tip1, total1);
// const bills = [255, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0]];

// console.log(total);

// //introduction to objects

// const jsonArray = ["Aish", "Kotwal", 2023 - 1996, ["Gk", "Prachii", "Niv"]]; //normal array

// const jsonObject = {
//   firstName: "Aish",
//   lastName: "Kotwal",
//   birthYear: 1996,
//   friends: ["Gk", "Prachii", "Prath"],
//   hasLisence: true,
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },
//   checkLisence: function () {
//     if (this.hasLisence) {
//       console.log(`${this.firstName} has a lisence`);
//     } else {
//       console.log(`${this.firstName} has no lisence`);
//     }
//   },
//   getSummary: function () {
//     return `${
//       this.firstName
//     } is a ${this.calcAge()} years and old and she has ${
//       this.hasLisence ? "a" : "no"
//     } lisense`;
//   },
// };
// console.log(
//   `${jsonObject.firstName} has ${jsonObject.friends.length} friends and ${jsonObject.friends[0]} is her bestfriend`
// );
// console.log(jsonObject.getSummary());

// const markObject = {
//   firstName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMIMarc: function () {
//     return (this.mass / this.height) * this.height;
//   },
// };
// const johnObject = {
//   firstName: "John",
//   mass: 84,
//   height: 1.95,
//   calcBMIJohn: function () {
//     return (this.mass / this.height) * this.height;
//   },
// };
// let compareBMI =
//   markObject.calcBMIMarc > johnObject.calcBMIJohn
//     ? "mark is higher"
//     : "john is higher";
// //order of array always matters
// console.log(compareBMI);

// const aish = [
//   "Aishwarya",
//   "Mohol",
//   28,
//   "Software Developer",
//   ["Prachii, Shubs"],
// ];
// const types = [];
// for (let i = 0; i < aish.length; i++) {
//   //reading an array
//   console.log(aish[i]);
//   //show only string values
//   if (typeof aish[i] !== "string") continue; //continue immeditely exits the current iteration and go to next
//   //filling an empty array
//   // types[i] = typeof aish[i];
//   console.log(aish[i]);
// }

// console.log("BREAK WITH NUMBER");
// for (let i = 0; i < aish.length; i++) {
//   //reading an array
//   // console.log(aish[i]);
//   //show only string values
//   if (typeof aish[i] === "number") break; //break immediately break the iteration once it meets the condition
//   // types[i] = typeof aish[i];
//   console.log(aish[i]);
// }

// //*Looping backward with an Arrays*

// for (let i = aish.length - 1; i >= 0; i--) {
//   console.log(aish[i]);
// }

// //loops in loop
// for (let chapter = 1; chapter < 5; chapter++) {
//   console.log(`Chapters are as below ${chapter}`);

//   //each chapter will have some topics. so we will use another for loop
//   for (let topics = 1; topics <= 3; topics++) {
//     console.log(`Topics are as below ${topics}`);
//   }
// }

// //challenge 1
// const billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tipValues = [];
// const totalBill = [];

// const calTipValue = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// for (let i = 0; i < billValues.length; i++) {
//   const tips = calTipValue(billValues[i]);
//   tipValues.push(tips);

//   totalBill.push(billValues[i] + tips);
// }
// console.log(billValues, tipValues, totalBill);

// //challenge 2

// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// let totalAverage;
// const calAvergaeNumer = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(arr, sum);
//   return sum / arr.length;
// };
// calAvergaeNumer(totalBill);

// console.log(calAvergaeNumer(totalBill));

// // console.log(window.Object());
//below methods to clone an array
// const arr = [1, 1, 3, 4, 5, 6];

// const newArray = [...arr,8,9]; //spread operator
// console.log(newArray, arr);

// console.log(arr.slice());

// const [a, b, c,...otherElement] = arr;
// console.log(a, b, c, otherElement);

// console.log(innerWidth);


// const pastIngredients = [];
// // console.log(Array.create(arr));

// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
//     console.log(sum);
// }

// add(1, 2, 3, 4, 5);

// let aValue = false;
// let bValue = true;

// console.log(false && true);
    
// const Person = function () {
    
// }

// const getData = function (country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {
//         console.log(response);
//         response.json();
//     });
// };
    
// // console.log(req);
// getData('portugal')

// console.log('test start');

// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('it is resolved').then(res =>
//     console.log(res));
// console.log('test end');
// addNo(2, 5);
// function addNo(num1,num2) {
//     let add;
//     add = num1 + num2;
//     console.log(add);
// }

// function makeFunc() {
//     var name = 'aish';
//     function call() {
//         console.log(name);
//     }
//     return call();
// }
// makeFunc();

// function createBase(num) {
//     return function (innernum) {
//         console.log(innernum + num);
//     }
// }

// createBase(6);

const isAnagram = function (str1, str2) {
    if (str1.trim().toLowerCase().length !== str2.trim().toLowerCase().length) return false;

   return str1.toLowerCase().trim().split('').sort().join('') === str2.toLowerCase().trim().split('').sort().join('')
}

// console.log(isAnagram('act', 'cat   '));

const isPalindrom = function (input) {
    return input.toString().toLowerCase().trim().split('').reverse().join('') === input.toString().toLowerCase().trim();
   
}

// console.log(isPalindrom('akA   '));

const isFibonacci = function (num) {
    let temp = [0, 1];
    for (let i = 2; i <= num; i++){
        temp.push(temp[i - 1] + temp[i - 2]);
    }
     return temp[num];
}

// console.log(isFibonacci(0));

const duplicateEle = function (arr) {
    let sortedArray;
    sortedArray = new Set(arr);

    return [...sortedArray];
}

// console.log(duplicateEle([11, 22, 22, 4, 5, 6]));
//[12,2,3,4,5] => 2 -5 =3 => 2-12=-10,0

const stockProfit = function (arr) {
    let minStockValue = arr[0];
    let profit = 0;
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minStockValue) {
            minStockValue = arr[i];
        }
        profit = Math.max(arr[i] - minStockValue, profit);
    }
    return profit;
}
// console.log(stockProfit([1,2,3,4,5,6,8,2,2]));

const rotateArray = function (arr, num) {
    if (num >= arr.length) {
        num = num % arr.length;
    }
    return [...arr.splice(arr.length - num), ...arr];
}
// console.log(rotateArray([1,2,3,4,5,6,7],15));

const containDuplicate = function (arr) {
    return arr.length !== new Set(arr).size;
 

}
// console.log(containDuplicate([1, 2, 3, 3])); =

const containSingleNo = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        obj[val] = (obj[val] || 0) + 1;
    }
        let temp = [];

    for (let el in obj) {
        if (obj[el] == 1) {
            temp.push(el);
        }
    }
    return temp;
    }

// console.log(containSingleNo([1, 2, 3, 3]));
    
let obj = {
    1: 1,
    2: 1,
    3:2
}

const checkString = function (str) {
    if(str.split(' ').length <= 1) return str;
   return str.split(' ').sort((a, b) => a.length - b.length).at(-2);
}

// console.log(checkString(''));

const interSectionOfArray = function (arr1, arr2) {
    let temp = [];
    for (let i = 0; i<= arr1.length; i++){     
            if (arr2.includes(arr1[i])) {
                temp.push(arr1[i]);
            }
        }
        return temp;
}
    
// console.log(interSectionOfArray([1,1,4,9],[2,6,4,9,7]));

const plusOneNo = function (arr) {
 
    let value = +(arr.join('')) + 1;
  return  value.toString().split('')
}

// console.log(plusOneNo([9]));

const moveZero = function (arr) {
    
    let zeroNo = arr.filter((el) => {
        return el == 0;
    });
    let nonZero = arr.filter((el) => el != 0)
        return [...nonZero,...zeroNo] 
    
}
// console.log(moveZero([1,4,5,0,3,0,1,1]));

const twoSum = function (arr, target) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}

// console.log(twoSum([2,7,11,15],9));

const firstUniqueChar = function (str) {
    let obj = {};
    for (let i = 0; i < str.length; i++){
        let val = str[i];
        obj[val] = (obj[val] || 0) + 1;
    }
    console.log(obj);
    for (let i in obj) {
        if (obj[i] == 1) {
            return str.indexOf(i);
        }
    }
    return -1;
}

// console.log(firstUniqueChar('leetcode'));

const convertString = function (str) {
  return  +str.split('').filter((el) => el !== 0).join('');

}

// console.log(convertString('0000444'));

const implementStrStr = function (str1, str2){
    if (str1.length > str2.length) {
        if (str1.includes(str2)) {
           return str1.indexOf(str2);
        }
    }
    if (str2.length > str1.length) {
        if (str2.includes(str1)) {
           return str2.indexOf(str1);
        }
    }
    return -1;
}

// console.log(implementStrStr('sadbutsad','aish'));

const longestPrefix = function (arr) {
    let i = 0;
    let result = '';
    while (arr.every((item) => arr[0][i] === item[i])) {
        i++;
    }
    return arr[0].slice(0, i);
}

// console.log(longestPrefix(['flower','flow','dog']));

const findTopAverage = function (arr, target, missingVal) {
    if (target <= 0) return 'Please enter valid number';
    if (target > arr.length) {
        arr = [...arr, ...Array(target-arr.length).fill(missingVal)]
    }

    let sortArray = arr.sort((a, b) => b - a).slice(0, target);
  
    return sortArray.reduce((acc, sum) => acc + sum, 0) / target;
}

// console.log(findTopAverage([5,5,5,5,5,5,5,5],10,100));

const doubleValues = function (arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        obj[val] = (obj[val] || 0) + 1;
    }
        let temp = [];

    for (let el in obj) {
        
        if (obj[el] !== 1) {
            temp.push(el * 10);
        }
    }
    return temp.length === 0 ? 'Please provide valid input' : temp;
    }

// console.log(doubleValues([1,4,7,5]));

var count = 0;

const example = function () {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
}
// console.log(example());

const stringEx = [..."aishwarya"];
// console.log(stringEx.length);

// const user = {
//     firstname: "aish",
//     getName() {
//         const firstname = "aish";
//         return this.firstname;
//     },
// };
// console.log(user.getName());

const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(b) {
        this.total *= b;
        return this;
    },
    substract(c) {
        this.total -= c;
        return this.total;
    }
};

// const result = calc.add(10).multiply(5).substract(30);
// console.log(result);
// var status = "selected";
// var status1 = "got offer";
setTimeout(() => {
    const status = "in progress";

    const data = {
        status: "approved",

        getStatus() {
            return this.status;
        },
    };
    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
     
}, 0);




