function binarySearch(arr, item ){
    let low = 0 ;
    let high = arr.length - 1 ;
    while( low <= high ){
        const midIndex = Math.floor(low + high) / 2;
        const midValue = arr[midIndex];
        if(midValue === item) return midIndex;
        if(midValue > value) {


        }
    }
}
const data = [1,3,5,7,11,13,19,23,29,31,37,41,43,53,59];
console.log(binarySearch(data , 37))