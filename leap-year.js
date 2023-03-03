function leapYearCalc (year) {
    let leap = undefined
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            leap = 'yes';
        }
        else if (year % 400 == 0) {
            leap = 'yes';
        }
        else {
            leap = 'no';
        }
    }
    else {
        leap = 'no';
    }

    console.log(leap)
}

leapYearCalc(1981)
leapYearCalc(2100)
leapYearCalc(2008)