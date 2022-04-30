function quickSort(arr){
    const list = [...arr];
    if(list.length < 2 ) return list;
    let pivot = list[0];

    const smaller = list.filter(item => item < pivot);
    const bigger = list.filter(item => item >= pivot);


}  