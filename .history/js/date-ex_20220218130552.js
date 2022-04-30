function getAge(year){
    const newYear = new Date();
    const isYear = newYear.getFullYear();
    return isYear - year;

}

console.log(getAge(2001));