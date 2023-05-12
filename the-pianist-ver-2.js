function pianist(inputArray) {
    let n = Number(inputArray.shift());
    registeredPieces = {};
    commandParser = {
        'Add': addFunction,
        'Remove': removeFunction,
        'ChangeKey': changeKeyFunction,
    }

    for (i = 0; i < n; i++) {
        let [ piece, composer, key ] = inputArray.shift().split('|');
        registeredPieces[piece] = { composer, key };
    }

    for (const string of inputArray) {
        if (string === 'Stop') {
            break;
        }

        let data = string.split('|');
        let command = data.shift();
        commandParser[command](...data);
    }

    for (const piece in registeredPieces) {
        const { composer, key } = registeredPieces[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

    function addFunction(piece, composer, key) {
        if (!registeredPieces.hasOwnProperty(piece)) {
            registeredPieces[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function removeFunction(piece) {
        if (registeredPieces.hasOwnProperty(piece)) {
            delete registeredPieces[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKeyFunction(piece, newKey) {
        if (registeredPieces.hasOwnProperty(piece)) {
            registeredPieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

pianist(
    [ 
        '3', 
        'Fur Elise|Beethoven|A Minor', 
        'Moonlight Sonata|Beethoven|C# Minor', 
        'Clair de Lune|Debussy|C# Minor', 
        'Add|Sonata No.2|Chopin|B Minor', 
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 
        'Add|Fur Elise|Beethoven|C# Minor', 
        'Remove|Clair de Lune', 
        'ChangeKey|Moonlight Sonata|C# Major', 
        'Stop' 
    ]
)