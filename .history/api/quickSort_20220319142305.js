function quickSort(arr){
    const list = [...arr];
    if(list.length < 2 ) return list;
    let pivot = list[0];

    const smaller = list.filter(item => item < pivot);
    const bigger = list.filter(item => item >= pivot);


}  

const array =[6,3,4,9,8,1,0];
console.log(quickSort(array))