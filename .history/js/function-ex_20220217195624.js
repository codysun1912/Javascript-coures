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

function isYourName(word = ""){
    // let newWord = word.toLowerCase().charAt(0).toUpperCase();
    // let ortherWord = word.toLowerCase().slice(1);

    // return `${newWord}${ortherWord}`;


  
}
(isYourName("Tuan");