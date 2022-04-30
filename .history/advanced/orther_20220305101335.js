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


const complexArray = [[1,2,3] ,[4,5,6] ,[[1,2],[4,5,6,7],[1,3]],];

// console.log(complexArray.flat(Infinity));

// function flatArray(arr , deep){
//     const result = deep > 0 ? arr.reduce((a , val) => a.concat(Array.isArray(val)? flatArray(val , deep - 1) : val) , [] ) : arr.slice();

//     return result;
    
// }
// console.log(flatArray(complexArray, Infinity));


//  const mySet = new Set();
//  mySet.add(1);
//  mySet.add("cody sun");
//  mySet.has(1);
//  mySet.delete(1);
//  mySet.clear();
//  console.log(mySet.size);


//  const arr = [1,2,3,3,3,4,5,6,6,6,7,7,7,8,8];

//  const mySet2 = new Set(arr);

//  for (let item of mySet2) {
//      console.log(`item: ${item}`);
//  }

//  const arr2 = Array.from(mySet2);
//  console.log(arr2);

 let arr3 = [];
 for(let index = 0; index < arr.length; index++){
     const elements = arr[index];
     if (!arr3.includes(elements)){
         arr3.push(elements);
     }
 }
 console.log(arr3);
