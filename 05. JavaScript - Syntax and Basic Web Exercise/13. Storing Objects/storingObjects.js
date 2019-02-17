function storingObjects(inputArr) {
    let resultArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        let [name, age, grade] = inputArr[i].split(" -> ");
        let person = {
            name: name,
            age: age,
            grade: grade
        };
        console.log("Name: " + person.name);
        console.log("Age: " + person.age);
        console.log("Grade: " + person.grade);
    }
}
storingObjects(["Pesho -> 13 -> 6.00", "Ivan -> 12 -> 5.57", "Toni -> 13 -> 4.90"]);