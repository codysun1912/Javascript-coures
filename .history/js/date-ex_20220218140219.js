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


function timeOut(Date){
    let now = new Date();
    const yourTime = timeOut(Date);
    let yourTimeOut = now.getTime() - yourTime.getTime();
}
timeOut("Fri Feb 18 2022 13:59:18 GMT+0700 (Indochina Time)")