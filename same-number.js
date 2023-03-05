function digitChecker (num) {
    let condition = true;
    let numStr = num.toString();
    let previousNum = Number(numStr[0]);
    let numSum = 0

    for (i = 0; i < numStr.length; i++) {
        currentNum = Number(numStr[i]);
        numSum += currentNum
        if (currentNum !== previousNum) {
            condition = false;
        }
    }

    console.log(condition)
    console.log(numSum)
}

digitChecker(1234)