
const stringArray = ["apple", "banana", "cherry"];


const numberArray = [1, 2, 3, 4, 5];


const booleanArray = [true, false, true, false];


const anyArray = ["text", 42, true, { key: "value" }];


stringArray.forEach(item => console.log(item.toUpperCase()));


const squaredNumbers = numberArray.map(num => num * num);
console.log(squaredNumbers);


booleanArray.forEach(bool => console.log(bool ? "YES" : "NO"));


const transformedAnyArray = anyArray.map(item => typeof item);
console.log(transformedAnyArray);
