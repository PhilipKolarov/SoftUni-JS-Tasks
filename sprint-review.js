function sprintReview(inputArray) {
    let n = inputArray[0];
    n = Number(n);
    inputArray.shift();
    let myAssignees = {};
    let statusKey = 'status'

    for (i = 0; i < n; i++) {
        let string = inputArray[i];
        let stringElements = string.split(':');
        let board = {
            task: stringElements[1],
            title: stringElements[2],
            status: stringElements[3],
            estimatedPoints: stringElements[4],
        };
        
        if (myAssignees.hasOwnProperty(stringElements[0])) {
            myAssignees[stringElements[0]].push(board);
        } else {
            let boards = [ board ];
            myAssignees[stringElements[0]] = boards;
        }
    }

    inputArray.splice(0, n);
    
    for (const string of inputArray) {
        let stringElements = string.split(':');
        if (stringElements[0] === 'Add New') {
            if (myAssignees.hasOwnProperty(stringElements[1])) {
                let board = {
                    task: stringElements[2],
                    title: stringElements[3],
                    status: stringElements[4],
                    estimatedPoints: stringElements[5],
                };
                myAssignees[stringElements[1]].push(board);
            } else {
                console.log(`Assignee ${stringElements[1]} does not exist on the board!`)
            }
        } else if (stringElements[0] === 'Change Status') {
            if (myAssignees.hasOwnProperty(stringElements[1])) {
                let boardList = myAssignees[stringElements[1]];
                let found = false;
                
                for (const b of boardList) {
                    if (b['task'] === stringElements[2]){
                        b[statusKey] = stringElements[3];
                        found = true;
                    }
                }

                if (found === false) {
                    console.log(`Task with ID ${stringElements[2]} does not exist for ${stringElements[1]}!`)
                }

            } else {
                console.log(`Assignee ${stringElements[1]} does not exist on the board!`)
            }
        } else if (stringElements[0] === 'Remove Task') {
            if (myAssignees.hasOwnProperty(stringElements[1])) {
                if (myAssignees[stringElements[1]].length >= stringElements[2]) {
                    myAssignees[stringElements[1]].splice(stringElements[2], 1);
                } else {
                    console.log("Index is out of range!")
                }
            } else {
                console.log(`Assignee ${stringElements[1]} does not exist on the board!`)
            }
        }
    }

    let toDoPoints = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;

    for (const key in myAssignees) {
        currentBoardList = myAssignees[key];
        for (const obj of currentBoardList) {
            if (obj[statusKey] === 'ToDo') {
                toDoPoints += Number(obj['estimatedPoints']);
            } else if (obj[statusKey] === 'In Progress') {
                inProgress += Number(obj['estimatedPoints']);
            } else if (obj[statusKey] === 'Code Review') {
                codeReview += Number(obj['estimatedPoints']);
            } else if (obj[statusKey] === 'Done') {
                donePoints += Number(obj['estimatedPoints']);
            }
        }
    }

    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    let sum = toDoPoints + inProgress + codeReview;
    if (sum <= donePoints) {
        console.log('Sprint was successful!')
    } else {
        console.log('Sprint was unsuccessful...')
    }
}

sprintReview(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)

sprintReview(
    [
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]
)