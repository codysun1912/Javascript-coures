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
const result = "";
for (let i = str.length - 1; i >= 0 ; i --){
    result = result + str[i];

}
console.log(result);
