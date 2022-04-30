let buyIphone = true;

const willNewIphone = new Promise(function(resolve, reject) {
    setTimeout(() => {
    if(buyIphone) {
        resolve("Ok");

    }else {
        reject("not ok");
    }
},5000);
})
console.log(willNewIphone);


// try catch;