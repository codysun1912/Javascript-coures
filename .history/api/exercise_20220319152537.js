// array replace;

// function arrayReplace(arr ,value, valueReplace){
//     for(let i  = 0 ; i < arr.length ; i++){
//         if(arr[i] === value) {
//             arr[i] = valueReplace;
//         } 
//     }
//     return arr;

// }
// console.log(arrayReplace([1,1,1,4,5,6], 1 , 2));

//2. palindrome

function isPalindrome(str){
  const newStr = str.toLowerCase();
//   const reverseStr = newStr.split("").reverse().join("");
  let reverseStr = "";
  for(let i = newStr.length - 1 ; i > 0 ; i--){
      reverseStr += newStr[i];
  }
  return newStr  === reverseStr;
 
}
console.log(isPalindrome("aaBBa"));