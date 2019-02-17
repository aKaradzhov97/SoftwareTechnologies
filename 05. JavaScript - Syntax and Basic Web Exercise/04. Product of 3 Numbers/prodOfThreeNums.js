function prodOfThreeNumbers(args) {
    let x = Number(args[0]);
    let y = Number(args[1]);
    let z = Number(args[2]);
    let isEven = 0;

    if (x < 0) {
        isEven++;
    }
    if (y < 0) {
        isEven++;
    }
    if (z < 0) {
        isEven++;
    }

    if (isEven % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}