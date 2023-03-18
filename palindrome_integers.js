function palindromeChecker(numebrs) {
    numebrs
        .forEach((num) => {
            console.log(isPalindrome(num));
        });

    function isPalindrome(num) {
        let reversed = Number([...num.toString()].reverse().join(''));

        return num === reversed;
    }
}

palindromeChecker([123,323,421,121])