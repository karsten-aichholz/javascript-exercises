const palindromes = function (inputString) {
    const lettersOnly = inputString.replaceAll(' ', ',', ',');
    let result = true;
    for (let i = 0; i < lettersOnly.length; i++) {
        result = result && lettersOnly[i] === lettersOnly[-1 - i];
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
