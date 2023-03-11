function wordChecker (word, text) {
    textArray = text.split(' ');
    wordLowerCase = word.toLowerCase();
    wordFound = false

    for (const textWord of textArray) {
        textWordLowerCase = textWord.toLowerCase();
        if (wordLowerCase === textWordLowerCase) {
            wordFound = true;
        }

        if (wordFound === true) {
            console.log(word)
            break;
        }
    }

    if (wordFound === false) {
        console.log(`${word} not found!`)
    }
}

wordChecker('javascript', 'JavaScript is the best programming language')
wordChecker('python', 'JavaScript is the best programming language')