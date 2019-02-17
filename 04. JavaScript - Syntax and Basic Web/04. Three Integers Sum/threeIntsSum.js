function threeIntsSum([input]) {
    let arr = input.split(' ');
    let firstNum = Number(arr[0]);
    let secondNum = Number(arr[1]);
    let thirdNum = Number(arr[2]);

    if (firstNum + secondNum === thirdNum) {
        console.log(Math.min(firstNum, secondNum) + " + " + Math.max(firstNum, secondNum) + " = " + thirdNum);
    } else if (firstNum + thirdNum === secondNum) {
        console.log(Math.min(firstNum, thirdNum) + " + " + Math.max(firstNum, thirdNum) + " = " + secondNum);
    } else if (secondNum + thirdNum === firstNum) {
        console.log(Math.min(thirdNum, secondNum) + " + " + Math.max(thirdNum, secondNum) + " = " + firstNum);
    } else {
        console.log("No");
    }
}
//threeIntsSum(['8, 7, 15']);