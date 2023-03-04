function printAndSum (num1, num2) {
    let myArray = []
    let total = 0
    let indexNum = num1

    for (let index = num1; index <= num2; index++)
        myArray.push(index);
    
    for (let index = num1; index <= num2; index++)
        total += index;
    
    console.log(myArray.join(' '))
    console.log(`Sum: ${total}`)
}

printAndSum (5, 10)