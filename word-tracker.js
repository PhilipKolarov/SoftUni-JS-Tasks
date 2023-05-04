function wordTrackerParser(input) {
    let wordsSearchedFor = input.shift();
    let wordsSearchedForAsArray = wordsSearchedFor.split(' ');
    let wordsCollected = {}

    for (const word of wordsSearchedForAsArray) {
        wordsCollected[word] = 0;
    }

    for (const word of input) {
        if (wordsSearchedForAsArray.includes(word)) {
            wordAdder(word, wordsCollected)
        }
    }

    let result = []

    for (const key in wordsCollected) {
        result.push(`${key} - ${wordsCollected[key]}`)
    }

    let resultSorted = resultSorter(result);
    for (const el of resultSorted) {
        console.log(el);
    }

    function resultSorter(x){
        return x.sort((a, b) => b.charCodeAt(b.length - 1) - a.charCodeAt(a.length - 1));
    }

    function wordAdder(w, dict) {
            dict[w] += 1;
    }
}


wordTrackerParser(
    [
        'this is the sentence',
        'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence',
        'because', 'this', 'is', 'your', 'task'
    ]
)