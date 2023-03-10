function arrayPrinter (myArray, n) {
    let arrayLength = myArray.length;
    let nElementArray = []

    for (i = 0; i < arrayLength; i++) {
        if (i % n === 0) {
            currentNum = myArray[i];
            nElementArray.push(currentNum);
        }
    }

    return(nElementArray)
}

console.log(arrayPrinter(['5', '20', '31', '4', '20'], 2))