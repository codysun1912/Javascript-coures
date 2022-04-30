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

const a1 = [1,2];
const a2 = [3,4];
const a3 = [5,6];

const aSum = a1.concat(a2,a3);
console.log(aSum);

//2 -
const aSum1 = [...a1 , ...a2 , ...a3];
console.log(aSum1);


const sport = ["soccer","football","basketball"];

const [a,...rest] = sport;
console.log(a , b , c);

