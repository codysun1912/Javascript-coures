function isObject(value) {
    if(typeof value === 'object' && value !== null & !Array.isArray(value)){
        return true;
    }
    return false;
}
console.log(isObject({}));


function isObjToArray(object){
    if(!isObject(object)) return;
    // return Object.entries(object);

    const value = Object.keys(object).map((key) => [key , object[key]]);
    return value;
}
console.log(isObjToArray({a : 1 , b: 2}));