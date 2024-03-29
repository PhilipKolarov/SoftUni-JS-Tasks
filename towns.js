function towns(input) {
    let townsArray = []
    for (const line of input) {
        let [ town, latitude, longitude ] = line.split(' | ')
        let townObj = { town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) }
        townsArray.push(townObj);
    }

    for (const town of townsArray) {
        console.log(town);
    }
}

towns(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
)