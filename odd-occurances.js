function oddOccurances(inputString) {
    occurancesDict = {};
    inputArray = inputString.split(' ');

    for (const word of inputArray) {
        wordAsLowerCase = word.toLowerCase();
        if (occurancesDict.hasOwnProperty(wordAsLowerCase)) {
            occurancesDict[wordAsLowerCase] += 1;
        } else {
            occurancesDict[wordAsLowerCase] = 1;
        }
    }
    
    resultAsArray = [];

    for (const key in occurancesDict) {
        if (occurancesDict[key] % 2 !== 0) {
            resultAsArray.push(key);
        }
    }

    console.log(resultAsArray.join(' '));
}


oddOccurances(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)