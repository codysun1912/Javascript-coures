function wait(timer = 0){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, timer);
    })
}


async function run(){
    console.log("starting");
    await wait (2000);
    console.log("done");
}
run();


function makeTimer(timer = 1000 , str) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str);
        } ,1000);
    });

}

function fullTimer(){
    const timer1 = makeTimer(1000 , "first time");
}