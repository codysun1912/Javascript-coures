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
  const reverseStr = newStr.split("").reverse().join("");
  return newStr  === reverseStr;
 
}

console.log(isPalindrome("aaBBa"));