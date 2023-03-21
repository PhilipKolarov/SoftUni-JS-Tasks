function loadingBar (number) {
    let numberDividedByTen = number / 10;
    if (numberDividedByTen === 10) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        percentages = []
        for (i = 0; i < numberDividedByTen; i++) {
            percentages.push('%')
        }
        dots = []
        for (i = 0; i < (10 - numberDividedByTen); i++) {
            dots.push('.')
        }
        bar = `[${percentages.join('')}${dots.join('')}]`;
        console.log(`${number}% ${bar}`);
        console.log('Still loading...')
    }
}

loadingBar(30)
loadingBar(100)
loadingBar(0)