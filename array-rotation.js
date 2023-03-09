function arrayRotator (myArray, rotations) {
    let numElements = myArray.length;
    let releventRotations = rotations % numElements;

    for (let i = 0; i < releventRotations; i++) {
        let num = myArray.shift();
        myArray.push(num)
    }

    console.log(myArray.join(" "))
}

arrayRotator([51, 47, 32, 61, 21], 2)