function reversedChars (a, b, c) {
    myArray = [a, b, c];
    myReversedArray = myArray.reverse();
    myJoinedArray = myReversedArray.join(" ")
    console.log(myJoinedArray)
}

reversedChars('x', 'y', 'z')