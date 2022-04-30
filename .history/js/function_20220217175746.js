function sum(a, b){
    const total = a + b;
    return total;
}
console.log(sum(5 , 10));

function add(a = 0 , b = 0){
    console.log( a + b );
}

const sum2 = add;
sum2(600 , 400);