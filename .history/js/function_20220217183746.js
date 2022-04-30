function sum(a, b){
    const total = a + b;
    return total;
}
console.log(sum(5 , 10));

function add(a = 0 , b = 0){
    console.log( a + b );
    return a + b;
}
const sum2 = add;

function average(a , b , fn){
    const total = fn(a , b);
    return total / 2;
}

let result = average(600 , 500 , sum2);
console.log(`result : ${result}`);

//

const yourName = function(){
    console.log("Your name");

}

yourName();