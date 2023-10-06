
const timeConversion = function (time) {
    let timePmorAm = time.slice(time.length - 2);
    let timeSplitArray = time.slice(0, time.length - 2).split(':');
    if (timePmorAm == 'PM') {
        if (+timeSplitArray[0] < 12) {
            timeSplitArray[0] = (+timeSplitArray[0] + 12);
        }
    }
     if (timePmorAm == 'AM') {
            if (timeSplitArray[0] == '12') {
            timeSplitArray[0] = (+timeSplitArray[0] - 12) + '0';
        }
        }
    return timeSplitArray.join(':');
}

console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));
console.log(timeConversion('07:05:45PM'));