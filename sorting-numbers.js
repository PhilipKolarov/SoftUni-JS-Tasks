function sortingNumbers (numbers) {
    newArray = []
    numbers.sort(function(a, b){return a-b})
    numbersLength = numbers.length

    for (i = 0; i < numbersLength; i++) {
        if (i % 2 === 0) {
            newArray.push(numbers.shift());
        }
        else {
            newArray.push(numbers.pop());
        }
    }

    return newArray
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))