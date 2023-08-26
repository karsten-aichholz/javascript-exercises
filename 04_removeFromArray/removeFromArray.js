const removeFromArray = function (sourceArray, ...elementsToBeRemoved) {
    let returnArray = [];
    console.log(`arrayToBeModified: ${sourceArray}`)
    console.log(`elementsToBeRemoved: ${elementsToBeRemoved}`)
    for (let arrayIndex = 0; arrayIndex < sourceArray.length; arrayIndex++) {
        console.log(`arrayIndex: ${arrayIndex}`)
        let matchNotFound = true;

        for (let removalIndex = 0; removalIndex < elementsToBeRemoved.length; removalIndex++) {
            console.log(`removalIndex: ${removalIndex}`)
            if (sourceArray[arrayIndex] === elementsToBeRemoved[removalIndex]) {
                matchNotFound = false;
            }
        }
        if (matchNotFound) {
            returnArray.push(sourceArray[arrayIndex]);
            console.log(`returnArray: ${returnArray}`)
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
