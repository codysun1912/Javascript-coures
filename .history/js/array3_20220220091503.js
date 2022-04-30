console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));

const arr1 = [1,2];
const arr2 = [1,2];

const array1 = JSON.stringify(arr1);
const array2 = JSON.stringify(arr2);
console.log(array1 === array2);


const student = ["a","b","c","d","e"];

const newStudent = student.slice();
console.log(newStudent);

const newStudent1 = [...student];
console.log(newStudent1);