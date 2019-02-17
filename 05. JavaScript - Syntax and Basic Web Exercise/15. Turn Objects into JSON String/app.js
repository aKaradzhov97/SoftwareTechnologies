function turnObjectsIntoJSON(inputArr) {
    let obj = {};
    for (let i = 0; i < inputArr.length; i++) {
        let [key, value] = inputArr[i].split(' -> ');
        if (/\d+.*/.test(value)) {
            if (!(/^[0-9]+\/[0-9]+\/[0-9]+$/.test(value))) {
                //Avoid the dates with this check
                value = Number(value);
            }
        }
        obj[key] = value;
    }
    console.log(JSON.stringify(obj));
}
turnObjectsIntoJSON(["name -> Angel", "surname -> Georgiev", "age -> 20", "grade -> 6.00", "date -> 23/05/1995", "town -> Sofia"]);