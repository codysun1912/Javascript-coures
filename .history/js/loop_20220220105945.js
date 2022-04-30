const number = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0 ; i < number.length ; i++){
    console.log(`the value :  ${number[i]}`);
    if (number[i]===8){
        break;
    }
}

for (let i = number.length -1 ; i > 0 ; i --){
    console.log(`the munber ${number[i]}`);
}


