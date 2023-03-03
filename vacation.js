function calculator (groupNum, groupType, day) {
    let pricePerPerson = undefined
    let priceTotal = undefined

    switch (groupType) {
        case 'Students':
            if (day==='Friday') {
                pricePerPerson = 8.45;
            }
            else if (day==='Saturday') {
                pricePerPerson = 9.80;
            }
            else if (day==='Sunday') {
                pricePerPerson = 10.46;
            }
        break;
        case 'Business':
            if (day==='Friday') {
                pricePerPerson = 10.90;
            }
            else if (day==='Saturday') {
                pricePerPerson = 15.60;
            }
            else if (day==='Sunday') {
                pricePerPerson = 16;
            }
        break;
        case 'Regular':
            if (day==='Friday') {
                pricePerPerson = 15;
            }
            else if (day==='Saturday') {
                pricePerPerson = 20;
            }
            else if (day==='Sunday') {
                pricePerPerson = 22.50;
            }
        break;
    }  
    
    priceTotal = pricePerPerson * groupNum

    if (groupNum >= 30 && groupType === 'Students') {
        priceTotal *= 0.85;
    }
    else if (groupNum >= 100 && groupType === 'Business') {
        priceTotal -= 10 * pricePerPerson
    }
    else if (groupNum >= 10 && groupNum <= 20 && groupType === 'Regular') {
        priceTotal *= 0.95;
    }

    console.log(`Total price: ${priceTotal.toFixed(2)}`)
}

calculator(30, 'Students', 'Sunday')
calculator(40, 'Regular', 'Saturday')