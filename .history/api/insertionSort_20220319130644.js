function insertionSort(arr){
   for(let i = 1 ; i < arr.length ; i++){
       let current = arr[i];
       let j;
       for(j = i - 1; j >= 0 && arr[j] > current; j--){}
       arr[j] = current;
   }
   return arr;
}
let data = [ 5,1,6,4];
console.log(insertionSort(data));

