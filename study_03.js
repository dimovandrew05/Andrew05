const myArray = [{
    name: "John",
    description: "John's description",
    age: 13,
}, {
    name: "Clark",
    description: "Clark's description",
    age: 22
}];

const filteredArray = myArray.filter (function(item) {
    return item > 14;
});

console.log(filteredArray);

// Должно вывести:
//     [{
//         name: "Clark",
//         description: "Clark's description",
//         age: 22
//     }]