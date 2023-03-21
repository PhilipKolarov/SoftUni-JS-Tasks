function isPerfect(number) {
    let divisors = [];

    for (let num = 1; num < number; num++) {
        if (number % num === 0) {
            divisors.push(num);
        }
    }
    
    let divisorsTotal = divisors.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    if (number === divisorsTotal) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

isPerfect(6)
isPerfect(10)