function employees(input) {
    let employeesObj = {};
    for (const employee of input) {
        employeesObj[employee] = employee.length;
    }

    //let employeesObj = input.reduce((date, employee)) => {
    //  data[employee] = employee.length;
    //  return data;
    //}, {});

    for (const key in employeesObj) {
        console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`)
    }
}

employees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson', 
        'Brendan Villarreal',
    ]
)