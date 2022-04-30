// array replace;

function arrayReplace(arr ,value, valueReplace){
    for(let i  = 0 ; i < arr.length ; i++){
        if(arr[i] === value) return value = valueReplace;
    }

    return arr;

}
console.log(arrayReplace([1,1,1,4,5,6], 2));