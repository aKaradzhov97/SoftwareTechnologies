function manageObjects(input) {
    let length = Number(input[0]);
    let resultArr = [];

    const indexRgx = /^-*\d+/gm;
    const valueRgx = /-*\d+$/gm;

    for (let i = 1; i < input.length; i++) {
        let currentStr = input[i];
        let index = getIndexOrValue(currentStr, indexRgx);
        let value = getIndexOrValue(currentStr, valueRgx);

        resultArr[index] = value;
    }

    for (let i = 0; i < length; i++) {
        if (resultArr[i]) {
            console.log(resultArr[i]);
        } else {
            console.log(0);
        }
    }

    function getIndexOrValue(inputString, regex) {
        let m;

        let result;
        while ((m = regex.exec(inputString)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            m.forEach((match, groupIndex) => {
                result = match;
            });
        }

        return result;
    }
}
manageObjects([5, "0 - 3", "3 - -1", "4 - 2"]);