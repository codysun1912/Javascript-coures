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
        return;
    }
    timer = yourTimeOut / 2678400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} thang truoc`);
        return;
    }
    timer = yourTimeOut / 604800;
    if (timer > 1){
        console.log(`${Math.floor(timer)} tuan truoc`);
        return;
    }
    timer = yourTimeOut / 86400;
    if (timer > 1){
        console.log(`${Math.floor(timer)} ngay truoc`);
        return;
    }
    timer = yourTimeOut / 3600;
    if (timer > 1){
        console.log(`${Math.floor(timer)} gio truoc`);
        return;
    }
    timer = yourTimeOut / 60
    if (timer > 1){
        console.log(`${Math.floor(timer)} phut truoc`);
        return;
    }

    if (timer >1){
        console.log(`${Math.floor(timer)} vai giay truoc`);
    }
    return;


}
timeOut("Fri Feb 18 2022 14:32:18 GMT+0700 (Indochina Time)");