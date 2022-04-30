const number = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0 ; i < number.length;i++){
    console.log(`the number ${number[i]}`);
    if (number[i] ===8) {
        break;
    }
}

for (let i = number.length -1 ; i >= 0 ; i --){
    console.log(`the number ${number[i]}`);
    for(let j = number.length - 1; j >=0; j--){
        console.log(j);
    }
}


const copyArr = [];
for (let i = 0 ; i < number.length ; i ++){
    copyArr.push(number[i]);
}

console.log(copyArr);


const str = "i love";
let result = "cody sun";
let result1 = "";
for (let i = str.length - 1; i >= 0 ; i --){
    result1 = result1 + str[i];

}

console.log(`${result} ${result1}`);


let number1 = 1 ;

while (number1 < 10){
    console.log(`the number is: ${number1}`);
    number1 ++;
}

let number2 = 1;
do {
    console.log(`the number is : ${number2}`);
    number2 ++;

} while (number2 < 10);


let a = [];
for (let value of number){
    value = value + 2;
    a.push(value);
}
console.log(a);


const array = [1,1000,false,null,"cody","",undefined,"javascript",[1,2,3],NaN];

const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);


const complexArray = [[1,2,3,[false,null]],[1,5,6,["javascript"]],[888,666,[90]]];
const result2 = complexArray.flat(2);
console.log(result2);


function reverseNumber(number){
    const reverseNumber1 = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(reverseNumber1);
}
reverseNumber(567);


function fizzBuzz(number){
    for (let i = 1 ; i <= number; i++) {
        if (i % 2 === 0 && i % 3 === 0){
            console.log("FizzBuzz"); 
        }  else if (i % 2 === 0 ){
            console.log("Fizz");
        } else if ( i % 3 === 0){
            console.log("Buzz");
        } 
        
    }
}
fizzBuzz(6);


function countString(string){
    let character1 = "ueoai";
    let count = 0;
    for (let c of string.toLowerCase() ){
       if(character1.includes(c)) count = count + 1;
    } 
       return count;
}
console.log(countString("CODY"));


const countNumber = [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6];
let result3 = [];
function countNumber1(array){
    if (!Array.isArray(array)) return result3;
    for(let i = 0 ; i < array.length ; i ++){
        if(!result3.includes(array[i])){
            result3.push(array[i]);
        }
    } return result3;
}
console.log(countNumber1("dsdasad"));

function splitArray(array , number){
    let result4 = [];
    const index = 0 ;
    while(inxdex < array.length){
        result4.push(array.slice(inxdex, number + index));
        index = index + 1;
    }
    console.log(result4);
    return result4;
}

splitArray([1,2,3,4,5,6] , 2);