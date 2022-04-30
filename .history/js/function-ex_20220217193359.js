function compare(a = 0 , b = 0){
    if (typeof a !== "number" || typeof b !== "number") return 0;

    return Math.max(a , b);
}

console.log(compare(abc , 10));