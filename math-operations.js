function mathOperator (a,b,str) {
    let result
    switch (str){
        case '+':
            result = a+b;
        break;
        case '-':
            result = a-b;
        break;
        case '*':
            result = a*b;
        break;
        case '/':
            result = a/b;
        break;
        case '%':
            result = a%b;
        break;
        case '**':
            result = a**b;
        break;
    }
    console.log(result);
}

mathOperator(1,2,'+')