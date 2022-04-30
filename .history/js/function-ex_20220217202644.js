function compare(a = 0 , b = 0){
    if (typeof a !== "number" || typeof b !== "number") {
    console.log("ban can nhap lai so");
    return;
    }
    return Math.min(a , b);
}

console.log(compare(5, 10));

// function isYourName(word = ""){
//     let newWord = word.toLowerCase().charAt(0).toUpperCase();
//     let ortherWord = word.toLowerCase().slice(1);

//     return `${newWord}${ortherWord}`;


  
// }
// console.log(isYourName("nam"));

// function isYourName(word = ""){
//     let newWord = word.toUpperCase().charAt(0);
//     let ortherWord = word.toLowerCase().slice(1);

//     return `${newWord}${ortherWord}`;
    


  
// }
// console.log(isYourName("tuan"));



// function useCallBack(a, b ,callback){
//     let max = compare(a, b);
//     callback(max);
// }
// function render(number){
//     console.log("So lon nhat là : " + number);
// }
// console.log(useCallBack(400, 1000 , render));


//arrow function

let square = (x) => {
    return x*x;
}
console.log(square(5));


function useCallback(a , b , callback){
    let min = compare(a, b);
    callback(min);
}

function printMin(number){
    console.log("so nho nhat : " + number);

}
console.log(5, 10 , printMin);