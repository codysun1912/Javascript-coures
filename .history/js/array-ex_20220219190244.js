function reverseString(str){
    if (!str) return null;
    const newStr = str.split(" ");
    console.log(newStr);
    const newStr1 = newStr.reverse().join(" ");

    return newStr1;
}
console.log(reverseString("My name is cody"));