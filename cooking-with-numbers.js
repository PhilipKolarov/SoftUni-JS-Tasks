function operator (numStr, a, b, c, d, e) {
    let myArray = [a, b, c, d, e];
    let num = Number(numStr);

    for (let i = 0; i < 5; i++) {
        let currentOperation = myArray[i];
        switch (currentOperation) {
            case 'chop':
                num /= 2;
                console.log(num);
            break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
            break;
            case 'spice':
                num += 1;
                console.log(num);
            break;
            case 'bake':
                num *= 3;
                console.log(num);
            break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
            break;
        }
    }
}

operator('9', 'dice', 'spice', 'chop', 'bake', 'fillet')