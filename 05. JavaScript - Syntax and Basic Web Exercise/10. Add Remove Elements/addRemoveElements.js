function addRemoveElements(commands) {
    let resultArr = [];
    for (let i = 0; i < commands.length; i++) {
        let [command, numberOrIndex] = commands[i].split(' ');

        if (command === "add") {
            resultArr.push(numberOrIndex);
        } else if (command === "remove") {
            if (resultArr[numberOrIndex]) {
                resultArr.splice(numberOrIndex, 1);
            }
        }
    }

    resultArr.forEach((element) => {
        console.log(element);
    });
}
addRemoveElements(["add 3", "add 5", "add 7"]);