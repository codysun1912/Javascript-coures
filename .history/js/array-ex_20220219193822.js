function reverseString(str){
    if (!str) return null;
    // const newStr = str.split(" ");
    // console.log(newStr);
    // const newStr1 = newStr.reverse().join(" ");

    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is cody"));


function reverseText(str){
    if(!str) return null;
    const newText = str.split("").reverse().join("");
    console.log(newText);
}
reverseText("i love");


function ligaturesText(word = ""){
    if(word.length ===0) return null;
    const newWord = word.charAt(0).toUpperCase();
    const newWord1 = word.slice(1);
    return `${newWord}${newWord1}`;
}

function newStrText(str){
    if(!str) return null;
   const newWord1= str.split(" ").map((item) => ligaturesText(item)).join(" ");
    console.log(newWord1);
}
newStrText("my name is cody");


const newStr1 = ["my name"];
const newWord2 = newStr1.charAt(0);
console.log(newWord2);