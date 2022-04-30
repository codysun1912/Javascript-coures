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

//IIFE

(function(){
    console.log("Your name");
})();



let isName = "cody sun";

function isIName(){
    let isName1 = isName;
    console.log(isName1);
}
isIName();




let newName = "cody sun";

function sayHi(){
    let newHi = "Hi";
    console.log(`${newHi} ${newName}`);

}

sayHi();


function sayHello(){
    let message = "Hello";
    function sayHii(){
        console.log(message);
    }
    return sayHii();
}

let sayHiii = sayHello();
sayHiii();