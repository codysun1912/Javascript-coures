function linearSort(arr, value){
    let index;
    for(let i  = 0 ; i < arr.length; i++){

        if(arr[i] === value) index = i;
    }
    return index;
}

console.log(linearSort([1,2,3,4,5,6,7,8,9] , 5));