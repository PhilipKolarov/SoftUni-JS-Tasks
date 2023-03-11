function pascalCaseSplitter (str) {
    let result = [];
    for (const symbol of str) {
        const asciiCode = symbol.charCodeAt(0);
        
        if (asciiCode >= 65 && asciiCode <= 90) {
            if (result.length > 0) {
                result += ', '
            }
            result += symbol;
        } else {
            result += symbol;
        }
    }

    console.log(result)
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')