function factorialDivision(a, b) {
    return (getFactorial(a) / getFactorial(b)).toFixed(2);

    function getFactorial(num) {
        if (num === 1) {
            return num;
        }

        result = num * getFactorial(num - 1);
        return result;
    }
}

console.log(factorialDivision(6, 2))