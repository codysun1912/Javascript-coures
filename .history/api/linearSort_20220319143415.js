function linearSort(arr, value){
    let index;
    for(let i  = 0 ; i < arr.length; i++){

        if(arr[i] === value) index = i;
    }
    return index;
}