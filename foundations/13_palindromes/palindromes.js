const palindromes = function (input) {
    const mappedInput = input
    .toLowerCase()
    .replaceAll(" ", "")
    .replaceAll(/[^a-zA-Z0-9\s]/g, "")
    .split("")
    .join("");

    const mappedBackwards = mappedInput.split("").reverse().join("");

    return mappedInput === mappedBackwards;
};


// Do not edit below this line
module.exports = palindromes;
