let buyIphone = true;

const willNewIphone = new Promise(function(resolve, reject) {
    if(buyIphone) {
        resolve("Ok");

    }else {
        reject("not ok")
    }
})