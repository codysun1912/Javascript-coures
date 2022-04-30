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