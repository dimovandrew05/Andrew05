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

// Должно вывести:
//     [{
//         name: "Clark",
//         description: "Clark's description",
//         age: 22
//     }]
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
// const result = words.filter(word => word.length > 6);
//
// console.log(result);