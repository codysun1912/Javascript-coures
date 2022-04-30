function getAge(year = 0){
    const newYear = new Date();
    const isYear = newYear.getFullYear();
    return isYear - year;

}

console.log(getAge(2001));