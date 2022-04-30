function bubbleSort(array){
    const arr = [...array];

    for(let i  = 0 ; i< arr.length ; i++){
        for(let j = 0 ; j < arr.length - 1 ; j++){
            let num = arr[j];
            let next = arr[j + 1];
            if(num > next){
                // const temp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = temp;
                arr[j+1], arr[j] = arr[j] , arr[j+1];
            }
        }
    }
    return arr;
}
const arr = [1,5,4,8,43,123,0,92,63,55,999];
console.log(bubbleSort(arr));
