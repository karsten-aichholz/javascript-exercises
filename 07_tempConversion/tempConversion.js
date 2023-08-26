const convertToCelsius = function (fahrenheitInput) {
    console.log(`fahrenheitInput: ${fahrenheitInput}`);
    let celsiusOutput = Math.round(((fahrenheitInput - 32) * 5 / 9) * 10) / 10;
    console.log(`celsiusOutput: ${celsiusOutput}`);
    return celsiusOutput;
};

const convertToFahrenheit = function (celsiusInput) {
    return Math.round((celsiusInput * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
