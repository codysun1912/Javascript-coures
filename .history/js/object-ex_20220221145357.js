function isObject(value) {
    if(typeof value === 'object' && value !== null & !Array.isArray(value)){
        return true;
    }
    return false;
}
console.log(isObject({}));


function isObjToArray(object){
    if(!isObject(object)) return;
    return Object.entries(object);
}
console.log(isObjToArray({a : 1 , b: 2}));