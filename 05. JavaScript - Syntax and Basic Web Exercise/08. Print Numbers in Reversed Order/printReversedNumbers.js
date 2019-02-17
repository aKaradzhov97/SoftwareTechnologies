function printReversedNumbers(numbers) {
    numbers = numbers.reverse();
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
printReversedNumbers([10, 15, 20]);