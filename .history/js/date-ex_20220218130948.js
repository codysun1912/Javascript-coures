function getAge(year = 0){
    if (typeof year != 'number') return 0;
    const newYear = new Date();
    const isYear = newYear.getFullYear();
    return isYear - year;

}

console.log(getAge("wewew



"));