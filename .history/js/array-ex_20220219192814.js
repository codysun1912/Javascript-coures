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


function ligaturesText1(word = ""){
    if(word.length ===0) return null;
    
}

function newStrText(str){
    if(!str) return null;
    str.split(" ").map(item => ligaturesText(item)).john(" ");
}
newStrText("my name is cody");