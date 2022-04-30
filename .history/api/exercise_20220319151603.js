// array replace;

function arrayReplace(arr ,value, valueReplace){
    for(let i  = 0 ; i < arr.length ; i++){
        if(arr[i] === value) {
            arr[i] = valueReplace;

        } 
    }

    return arr;

}
console.log(arrayReplace([1,1,1,4,5,6], 1 , 2));