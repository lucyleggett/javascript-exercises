const sumAll = function(num1, num2) {
    if (num1 < 0 
        || num2 < 0
        || num1 % 1 !== 0
        || num2 % 1 !== 0
        || typeof(num1) !== "number"
        || typeof(num2) !== "number"
    ){
        return "ERROR";
    }
    
    let inputArray = [num1, num2];
    let ascendingArray = inputArray.sort((a, b) => a - b);
    let lowNum = ascendingArray[0];
    let highNum = ascendingArray[1];
    let numArray = [];

    for (i = lowNum; i <= highNum; i++) {
        numArray.push(i);
    }
    let sum = numArray.reduce((sum, current) => sum + current, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
