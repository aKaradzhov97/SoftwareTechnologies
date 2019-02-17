function sumsByTown(inputArrOfJSONs) {
    let sums = {};

    for (let i = 0; i < inputArrOfJSONs.length; i++) {
        let currentObj = JSON.parse(inputArrOfJSONs[i]);
        if (sums.hasOwnProperty(currentObj.town)) {
            sums[currentObj.town] += currentObj.income;
        } else {
            sums[currentObj.town] = currentObj.income;
        }
    }
    let towns = Object.keys(sums).sort();

    for(let town of towns) {
        console.log(`${town} -> ${sums[town]}`);
    }
}