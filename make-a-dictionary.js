function dictionaryMaker(input){
    myDict = {};
    result = [];

    for (const el of input) {
        const elAsObj = JSON.parse(el);
        let key = Object.keys(elAsObj)[0];
        let value = Object.values(elAsObj)[0];
        myDict[key] = value;
    }

    for (const key in myDict) {
        let description = `Term: ${key} => Definition: ${myDict[key]}`
        result.push(description);
    }

    resultSorted = result.sort();

    for (const el of resultSorted) {
        console.log(el);
    }
}

dictionaryMaker(
    [
        '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}', 
        '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
        '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
        '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
        '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '    
    ]
)