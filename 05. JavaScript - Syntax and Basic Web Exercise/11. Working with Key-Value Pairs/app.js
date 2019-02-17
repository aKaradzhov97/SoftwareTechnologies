function app(inputArr) {
    let resultArr = [];
    let printValueOfThisKey = inputArr[inputArr.length - 1];

    for (let i = 0; i < inputArr.length - 1; i++) {
        let [key, value] = inputArr[i].split(" ");
        let currentObj = {};
        currentObj[key] = value;

        if (resultArr.length === 0) {
            resultArr.push(currentObj);
        }

        for (let j = 0; j < resultArr.length; j++) {
            let obj = resultArr[j];
            if (obj.hasOwnProperty(key)) {
                obj[key] = value;
            } else {
                resultArr.push(currentObj);
            }
        }
    }

    let result = resultArr.filter((elem) => elem[printValueOfThisKey])[0];

    if (result) {
        console.log(result[printValueOfThisKey]);
    } else {
        console.log("None");
    }

}
app(["key value", "key eulav", "test tset", "key"]);