function oddAndEvenSum(num) {
    let numAsString = num.toString();
    let numAsArray = numAsString.split('');
    let oddSum = 0;
    let evenSum = 0;

    for (const nAsString of numAsArray) {
        let n = Number(nAsString);
        oddOrEvenAdder(n)
    }

    result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    return result

    function oddOrEvenAdder(number) {
        if (number % 2 === 0) {
            evenSum += number;
        }
        else {
            oddSum += number;
        }

    }
}

console.log(oddAndEvenSum(1000435))
console.log(oddAndEvenSum(349589213759234))