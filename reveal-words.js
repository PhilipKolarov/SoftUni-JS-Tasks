function revealer (words, text) {
    let wordsArray = words.split(', ');

    for (const word of wordsArray) {
        let wordLength = word.length;
        let replacableWord = '*'.repeat(wordLength)
        text = text.replace(replacableWord, word)
    }

    console.log(text)
}

revealer('great', 'softuni is ***** place for learning new programming languages')
revealer('great, learning', 'softuni is ***** place for ******** new programming languages')