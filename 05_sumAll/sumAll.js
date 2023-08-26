const sumAll = function (firstNumber, lastNumber) {
    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
        return "ERROR"
    }
    startingNumber = Math.min(firstNumber, lastNumber);
    endingNumber = Math.max(firstNumber, lastNumber);
    if (startingNumber < 0) {
        return "ERROR"
    }
    let totalSum = 0;
    for (let i = startingNumber; i < endingNumber + 1; i++) {
        totalSum = totalSum + i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
