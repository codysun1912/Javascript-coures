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

    // const value = Object.keys(object).map((key) => [key , object[key]]);
    // return value;

    let array = [];
    for(let key in object) {
        if (object.hasOwnProperty(key)){
            array.push([key , object[key]]);
        }
    }
    return array;
}
console.log(isObjToArray({a : 1 , b: 2}));


function deleteObject(object , ...key){
    const newObject = {...object};
    key.forEach((item) => {
        delete newObject[item];

    });
    return newObject;
}
console.log(deleteObject({a : 1 , b: 2} , "b"));