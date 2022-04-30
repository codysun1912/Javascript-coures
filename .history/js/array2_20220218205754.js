//slice

const animals = ["tiger", "monkey", "cat","dog"];
console.log(animals);
const animals1 = animals.slice();
console.log(animals1);

const animals2 = animals.slice(1);
console.log(animals2);
//slice(start, end) chạy từ vị trí start đến vị trí end trừ đi 1
const animals3 = animals.slice(0,2);
console.log(animals3);


///splice xoá phần tử trong mảng
const cars = ["Subaru","Ford","Dodge","Toyota"];

// const cars1 = cars.splice(2);
// console.log(cars1);

const cars2 = cars.splice(0,1);
console.log(cars);

