function meetingsParser(input){
    let meetings = {}
    for (const line of input) {
        lineElements = line.split(' ');
        if (!meetings.hasOwnProperty(lineElements[0])) {
            meetings[lineElements[0]] = lineElements[1];
            console.log(`Scheduled for ${lineElements[0]}`)
        } else {
            console.log(`Conflict on ${lineElements[0]}!`)
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)        
    }

}

meetingsParser(
    [
        'Friday Bob',
        'Saturday Ted',
        'Monday Bill',
        'Monday John',
        'Wednesday George'
    ]
)