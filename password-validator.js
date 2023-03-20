function passwordValidator(password) {
    const isValidLength = (p) => p.length >= 6 && p.length <= 10;
    const hasOnlyLettersAndDigits = (p) => /^\w+$/g.test(p);
    const hasAtLeastTwoDigits = (p) => [...p.matchAll(/\d/g)].length >= 2;

    let passIsValid = true;

    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters")
        passIsValid = false;
    }

    if (!hasOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits")
        passIsValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits")
        passIsValid = false;
    }

    if (passIsValid) {
        console.log("Password is valid")
    }
}

passwordValidator('Pas$s$')