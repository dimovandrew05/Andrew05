const myArray = [{
    name: "John",
    description: "John's description",
    age: 13,
}, {
    name: "Clark",
    description: "Clark's description",
    age: 22
}];

const result = myArray.filter(myArray => myArray.age > 14);

console.log(result);
