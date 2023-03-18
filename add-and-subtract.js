function addAndSubtract(a, b, c) {
    const sum = (x, y) => x + y;
    const subtract = (mySum, num) => mySum - num;

    return subtract(sum(a, b), c);
}

console.log(addAndSubtract(10, 1, 3))
console.log(addAndSubtract(1000, -1000, 500))