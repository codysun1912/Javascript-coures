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
    const yourTimeOut = (now.getTime() - yourTime.getTime());
    console.log(yourTimeOut);
}
timeOut("Fri Feb 18 2022 13:59:18 GMT+0700 (Indochina Time)");