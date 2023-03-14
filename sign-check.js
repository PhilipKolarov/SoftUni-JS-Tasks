function signCheck(...numbers) {
    result = numbers.filter((num) => num < 0)
        .length % 2 === 0 ? 'Positive' : 'Negative';
    
    return result
}

console.log(signCheck(5, -1, -10))