function printCertificate(grade, names) {
    let [ firstName, lastName] = names;
    if (getGradesAsText(grade) !== 'Fail (2)') {
        printCertificateBody();
        printNames(firstName, lastName);
        printGrade(grade);
    } else {
        console.log('Student does not qualify')
    }

    function printCertificateBody() {
        console.log('~~~-   {@}   -~~~')
        console.log('~- Certificate -~')
        console.log('~~~-  ~---~  -~~~')
    }

    function printNames(firstName, lastName) {
        console.log(`${firstName} ${lastName}`)
    }

    function printGrade(grade) {
        console.log(getGradesAsText(grade))
    }

    function getGradesAsText(grade) {
        if (grade >= 5.50) {
            return `Excellent (${grade.toFixed(2)})`;
        } else if (grade < 5.50 && grade >= 4.50) {
            return `Very good (${grade.toFixed(2)})`;
        } else if (grade < 4.50 && grade >= 3.50) {
            return `Good (${grade.toFixed(2)})`;
        } else if (grade < 3.50 && grade >= 3.00) {
            return `Poor (${grade.toFixed(2)})`;
        }
    
        return `Fail (2)`;
    }
}

printCertificate(5.66, ['Philip', 'Kolarov'])