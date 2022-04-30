function selectionSort(arr){
    for(let i = 0 ; i < array.length ; i++){
        let minIndex = i;

        for (let j = i+ 1  ; j < arr.length ; j++){
           if(arr[i] > arr[j]){
            minIndex = j;
           }
        }
        [array[i],array[minIndex]] = [array[minIndex] , array[i]]
    }

}