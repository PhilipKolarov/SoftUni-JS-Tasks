function picollo(input) {
    let carNumbers = [];

    for (const line of input) {
        let [ command, carNumber ] = line.split(', ');

        if (command === 'IN' && !carNumbers.includes(carNumber)) {
            carNumbers.push(carNumber);
        } else if (command === 'OUT' && carNumbers.includes(carNumber)) {
            let index = carNumbers.indexOf(carNumber);
            carNumbers.splice(index, 1);
        }
        
    }

    if (carNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedNumbers = carNumbers.sort((carA, carB) => carA.localeCompare(carB));
        sortedNumbers.forEach((num) => {
            console.log(num)
        })
    }
}

picollo(
    ['IN, CA2844AA', 
    'IN, CA1234TA', 
    'OUT, CA2844AA', 
    'IN, CA9999TT', 
    'IN, CA2866HI', 
    'OUT, CA1234TA', 
    'IN, CA2844AA', 
    'OUT, CA2866HI', 
    'IN, CA9876HH', 
    'IN, CA2822UU']
)

picollo(
    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)