// function getAge(year = 0){
//     if (typeof year != 'number') return 0;
//     const newYear = new Date();
//     const isYear = newYear.getFullYear();
//     return isYear - year;

// }

// console.log(getAge("wewew"));


//  function isTime(minute = 1){
//      let seconds = minute * 60;
//      let couter = 0;
//     const timer = setInterval(function(){
//         couter = couter + 1 ;
//         console.log(couter);
//         if (couter === seconds){
//             clearInterval(timer);
//             console.log("ban da het thoi gian");
//         }
//     } ,1000)
//  }
// isTime(1);


function timeOut(date){
    const now = new Date();
    const yourTime = new Date(date);
    const yourTimeOut = Math.floor((now.getTime() - yourTime.getTime())/1000);
    console.log(yourTimeOut);

    let timer = yourTimeOut / 31536000;
    if (timer > 1){
        console.log(`${Math.floor(timer)} nam truoc`);
    }
    timer = yourTimeOut / 2678400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} thang truoc`);
    }
    timer = yourTimeOut / 604800;
    if (timer > 1){
        console.log(`${Math.floor(timer)} tuan truoc`);
    }
    timer = yourTimeOut / 86400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} ngay truoc`);
    }
    timer = yourTimeOut / 3600;
    if (timer > 1){
        console.log(`${Math.floor(timer)} gio truoc`);
    }
    timer = yourTimeOut / 60
    if (timer > 1){
        console.log(`${Math.floor(timer)} phut truoc`);
    }


}
timeOut("Fri Feb 18 2022 13:59:18 GMT+0700 (Indochina Time)");