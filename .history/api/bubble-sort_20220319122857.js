function bubbleSort(array){
    for(let i  = 0 ; i< array.length ; i++){
        for(let j = 0 ; j < array.length - 1 ; j++){
            let num = array[j];
            let next = array[j + i];
            if(num > next){
                const temp = array[j + i];
                array[j + i] = array[j];
                array[j] = temp;
            }

 
        }
    }
    console.log(array);

}

bubbleSort([1,5,4,8,43,123,0,92,63,55,999])