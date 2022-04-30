function compare(a = 0 , b = 0){
    if (typeof a !== "number" || typeof b !== "number") {
    console.log("ban can nhap lai so");
    return;
    }
    return Math.max(a , b);
}

console.log(compare("bc", 10));

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



function useCallBack(a, b ,callback){
    let max = compare(a, b);
    callback(max);
}
function render(number){
    console.log("So lon nhat là : " + number);
}
console.log(useCallBack(400, 1000 , render));


//arrow function

let square = (x) => {
    return x*x;
}