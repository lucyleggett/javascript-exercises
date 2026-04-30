const fibonacci = function(num) {
    let defNum;

    if (typeof num !== 'number') {
        defNum = parseInt(num)
    } else {
        defNum = num
    }

    if (defNum < 0) return "OOPS";
    if (defNum == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
