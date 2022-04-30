function compare(a = 0 , b = 0){
    if (typeof a !== "number" || typeof !== b) return 0;

    return Math.max(a , b);
}

console.log(compare(4 , 10));