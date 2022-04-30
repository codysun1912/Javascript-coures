// function total(x,y){
//     return;  undefind
//     x+ y
// }

// console.log(parseFloat());
// console.log(parseInt());
// console.log(Number());
// console.log(+str);
// console.log(!!str); //true

//arguments
// function number(a,b,c){
//     if(!arguments.length) console.log("enter");
//     return a+b+c;
//     const arr = Array.from(arguments);
//     const arr1 = [...arguments];    
// }

// number();


const complexArray = [[1,2,3] ,[4,5,6] ,[[1,2],[4,5,6,7],[1,3]]];

// console.log(complexArray.flat(Infinity));

function flatArray(arr , deep){
    const result = deep > 0 ? arr.reduce((a , val) => a.concat(Array.isArray(val)? flatArray(arr , deep - 1) : val) , [] ) : arr.slice();
    return result;
    
}
console.log(flatArray(complexArray,infinity));

