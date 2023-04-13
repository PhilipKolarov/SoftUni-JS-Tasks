function convertToObj(jsonString) {
    let information = JSON.parse(jsonString);
    for (const key in information) {
        console.log(`${key}: ${information[key]}`)
    }
}

convertToObj(
    '{"name": "George", "age": 40, "town": "Sofia"}'
)