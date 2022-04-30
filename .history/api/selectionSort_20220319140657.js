function selectionSort(array){
    for(let i = 0 ; i < array.length - 1 ; i++){
        let minIndex = i;

        for (let j = i+ 1  ; j < array.length ; j++){
           if(array[i] > array[j]){
            minIndex = j;
           }
        }
        [array[i],array[minIndex]] = [array[minIndex] , array[i]];
    }
    return array;

}
console.log(selectionSort([4,5,1,2]));