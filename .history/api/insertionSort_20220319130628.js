function insertionSort(arr){
   for(let i = 1 ; i < arr.length ; i++){
       let current = arr[i];
       let j;
       for(j = i - 1; j >= 0 && arr[j] > current; j--){}
       arr[j] = current;
   }
   return arr;
}
console.log(insertionSort(data));

let data = [ 5,1,6,4]