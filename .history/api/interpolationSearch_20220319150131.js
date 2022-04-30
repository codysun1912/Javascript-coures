function binarySearch(arr, item ){
    let low = 0 ;
    let high = arr.length - 1 ;
    while ( low <= high ){
        const midIndex = Math.floor(low + high) / 2;
        const midValue = arr[midIndex];
        if(midValue === item) return midIndex;
        if(midValue > item){
            high = midIndex - 1;
        } else {
            low = midIndex + 1;
        }
    }
    return null;
}
console.log(binarySearch([1,3,5,7,11,13,19,23,29,31,37,41,43,53,59] , 37));
