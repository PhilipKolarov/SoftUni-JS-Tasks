function listSorter (myList) {
    myList.sort()
    let myListLength = myList.length

    for (i = 1; i <= myListLength; i++) {
        console.log(`${i}.${myList[i-1]}`)
    }
}

listSorter(["John", "Bob", "Christina", "Ema"])