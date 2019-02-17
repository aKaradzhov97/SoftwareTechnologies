function multipleValuesForAKey(inputArr) {
    let resultArr = [];
    let printValueOfThisKey = inputArr[inputArr.length - 1];

    for (let i = 0; i < inputArr.length - 1; i++) {
        let [key, value] = inputArr[i].split(" ");
        let currentObj = {};
        currentObj[key] = [];

        if (resultArr.length === 0) {
            resultArr.push(currentObj);
        }

        for (let j = 0; j < resultArr.length; j++) {
            let obj = resultArr[j];

            if (obj.hasOwnProperty(key)) {
                obj[key].push(value);
            } else {
                resultArr.push(currentObj);
            }
        }
    }

    let result = resultArr.filter((elem) => elem[printValueOfThisKey])[0];

    if (result) {
        result[printValueOfThisKey].forEach((el) => console.log(el));
    } else {
        console.log("None");
    }
}
multipleValuesForAKey(["key value", "key eulav", "test tset", "key"]);