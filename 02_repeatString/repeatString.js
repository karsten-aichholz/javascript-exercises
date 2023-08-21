const repeatString = function (inputString, howOften) {
    if (howOften < 0) {
        return "ERROR"
    } else {
        return inputString.repeat(howOften);
    }
};

// Do not edit below this line
module.exports = repeatString;
