// Задача № 2

const myArray = ["John", "Clark"]


function map(array, func) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray;
}

const myMappedArray = map(myArray, (item) => {
    return item;
})
console.log(myMappedArray)


// const myArray = ["John", "Clark"];
//
// item = myArray.map(function(item) {
//     return item.toUpperCase();
// });
// console.log(item);
