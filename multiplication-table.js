function table (num) {
    for (i = 1; i <= 10; i++) {
        index = i
        result = num * index;
        console.log(`${num} X ${index} = ${result}`)
    }
}

table(2)
table(3)