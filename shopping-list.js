function shoppingList(myArray) {
    const initialList = myArray[0].split('!');
    myArray.shift();

    for (const string of myArray) {
        let stringArray = string.split(' ');
        let command = stringArray[0];
        let product = stringArray[1];

        if (command === 'Urgent' && !checkIfItemExists(product)) {
            add(product);
        } else if (command === 'Unnecessary' && checkIfItemExists(product)) {
            remove(product);
        } else if (command === 'Correct' && checkIfItemExists(product)) {
            let newName = stringArray[2];
            rename(product, newName);
        } else if (command === 'Rearrange' && checkIfItemExists(product)) {
            sendToEnd(product);
        }
    }

    result = initialList.join(', ');
    console.log(result);

    function checkIfItemExists(item) {
        if (initialList.includes(item)) {
            return true;
        } else {
            return false;
        }
    }

    function add(item) {
        initialList.unshift(item);
    }

    function remove(item) {
        itemIndex = initialList.indexOf(item);
        initialList.splice(itemIndex, 1);
    }

    function rename(oldName, newName) {
        itemIndex = initialList.indexOf(oldName);
        initialList.splice(itemIndex, 1, newName);
    }

    function sendToEnd(item) {
        itemIndex = initialList.indexOf(item);
        initialList.splice(itemIndex, 1);
        initialList.push(item);
    }
}

shoppingList(
    [
        "Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"
    ]
)