function convertToJson(firstName, lastName, hairColor) {
    myObj = { firstName, lastName, hairColor };
    myObjConverted = JSON.stringify(myObj)
    console.log(myObjConverted)
}

convertToJson(
    'George', 'Jones', 'Brown'
)