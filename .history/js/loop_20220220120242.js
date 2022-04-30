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
let result1 = ""
for (let i = str.length - 1; i >= 0 ; i --){
    result1 = result1 + str[i];
    result = `${result} ${result1}`

}
console.log(result);



