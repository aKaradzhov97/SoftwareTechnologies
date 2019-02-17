function parseJSON(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        let currentObj = JSON.parse(inputArr[i]);
        console.log("Name: " + currentObj.name);
        console.log("Age: " + currentObj.age);
        console.log("Date: " + currentObj.date);
    }
}
parseJSON(['{"name":"Gosho","age":10,"date":"19/06/2005"}', '{"name":"Tosho","age":11,"date":"04/04/2005"}']);