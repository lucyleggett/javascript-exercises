const repeatString = function(str, num) {
    let repeated = "";
    while (num > 0) {
        num--;
        repeated += str;
    }
    return repeated;
    }

// Do not edit below this line
module.exports = repeatString;
