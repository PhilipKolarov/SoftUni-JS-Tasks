function modernTimes(text) {
    let words = text.split(' ');

    let result = [];
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }
    
    console.log(result.join('\n'))

    function checkIfWordIsValid(myWord) {
        let myWordLowerCase = myWord.toLowerCase()
            .slice(1);
        let condition = true;

        for (const symbol of myWordLowerCase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) {
                condition = false;
                break;
            }
        }

        return condition;
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')