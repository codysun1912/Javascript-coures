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

const cars2 = cars.splice(0,1 , "Amg");
console.log(cars);



const random = [1,1000,"cody sun","acer",5,10] 
console.log(random.sort());

const random2 = random.sort((a,b) => (a > b ? 1 : -1));

console.log(random2);


// find 

const number = [1,2,3,4,5,6,7,8];
const number2 = number.find((element) => element > 5);
console.log(number2);

const number3 = number.findIndex((element) => element > 4);
console.log(number3);

const random3 = random.sort((a,b) => (a > b ? -1 : 1));
console.log(random3);

const listNumberDouble = number.map(function(value , index , array){
    return value * 2;
})
console.log(listNumberDouble);

const listNumberDouble1 = number.forEach((value , index , array) => {
    return value * 3;
})
console.log(listNumberDouble1);

//filter dùng để sàn lọc 

const listNumberDouble2 = number.filter((value , index , array) => value > 5);
console.log(listNumberDouble2);

const someNumber = number.some((value)=> value >3);
console.log(someNumber);

const everyNumber = number.every((value)=> value >3);
console.log(someNumber);
