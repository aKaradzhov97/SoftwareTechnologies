function largestThreeNums(input) {
    let arr = input.map(Number);
    arr.sort((a, b) => b - a);
    let count = Math.min(3, arr.length);
    for (let i = 0; i < count; i++) {
        console.log(arr[i]);
    }
}
largestThreeNums([10, 20, 30]);