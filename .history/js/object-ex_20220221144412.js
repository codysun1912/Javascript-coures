function isObject(value) {
    if(typeof value === 'object' && value !== null & !Array.isArray(value)){
        return true;
    }
    return false;
}
isObject({"nhut"});