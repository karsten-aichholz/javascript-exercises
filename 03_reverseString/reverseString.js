const reverseString = function(inputString) {
    let outputString = "";
    for (let i = 0; i < inputString.length; i++) {
        outputString = outputString + inputString.charAt(inputString.length - 1 - i)
        console.log(outputString);
    };
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
