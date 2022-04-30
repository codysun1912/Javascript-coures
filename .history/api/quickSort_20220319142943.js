function quickSort(arr){
    const list = [...arr];
    if(list.length < 2 ) return list;
    let pivot = list[0];

    const smaller = list.filter(item => item < pivot);
    const bigger = list.filter(item => item > pivot);
   

    return [...quickSort(smaller),pivot, ...quickSort(bigger)];


}  
const array =[6,3,4,9,8,1,0];
const quickSort1 = [...array].sort((a,b) => a - b)
console.log(quickSort(array));