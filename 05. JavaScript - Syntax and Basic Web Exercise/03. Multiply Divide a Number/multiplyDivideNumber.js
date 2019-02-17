function multiplyDivideNumber(args) {
    let number1 = Number(args[0]);
    let number2 = Number(args[1]);
    if (number1 <= number2) {
        return number1 * number2;
    } else {
        return number1 / number2;
    }
}