function sumDigits (num) {
    let numStr = num.toString();
    let sum = 0;
    let NumLen = num.length;
    for (const digit of numStr) {
        let currentNum = Number(digit);
        sum += currentNum;
    }

    console.log(sum)
}

sumDigits(124)