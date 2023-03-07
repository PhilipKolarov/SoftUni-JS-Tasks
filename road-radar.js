function radar (speed, area) {
    motorwayLimit = 130;
    interstateLimit = 90;
    cityLimit = 50;
    residentialLimit = 20;
    withinLimit = true;
    finalLimit = undefined;

    if (area === 'motorway') {
        finalLimit = motorwayLimit;
        if (speed >= motorwayLimit) {
            withinLimit = false;
        }
    }
    else if (area === 'interstate') {
        finalLimit = interstateLimit;
        if (speed >= interstateLimit) {
            withinLimit = false;
        }
    }
    else if (area === 'city') {
        finalLimit = cityLimit;
        if (speed >= cityLimit) {
            withinLimit = false;
        }
    }
    else if (area === 'residential') {
        finalLimit = residentialLimit;
        if (speed >= residentialLimit) {
            withinLimit = false;
        }
    }

    if (withinLimit) {
        console.log(`Driving ${speed} km/h in a ${finalLimit} zone`)
    }
    else {
        diff = speed - finalLimit;
        if (diff <= 20) {
            status = 'speeding'
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${finalLimit} - ${status}`);
        }
        else if (diff <= 40 && diff > 20) {
            status = 'excessive speeding'
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${finalLimit} - ${status}`);
        }
        else {
            status = 'reckless driving'
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${finalLimit} - ${status}`);
        }
    }
}

radar(-1, 'motorway')
radar(95, 'interstate')
radar(100, 'city')
radar(45, 'residential')