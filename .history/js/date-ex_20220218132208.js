function getAge(year = 0){
    if (typeof year != 'number') return 0;
    const newYear = new Date();
    const isYear = newYear.getFullYear();
    return isYear - year;

}

console.log(getAge("wewew"));


 function isTime(minute = 1){
     let isYourTime = minute * 60 ; 

    let couter = 0

    const timer = setInterval(function(){
        couter = couter + 1 ;

    } , 1000)
 }

isTime(1);