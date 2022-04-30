const student1 = ["a", "b","c","d","a"];
console.log(student1[0]);
console.log(student1[1]);
console.log(student1[student1.length - 1]);




console.log(student1.length);

//reverse

console.log(student1.reverse());

// john nối các phần tử trong mảng thành string

console.log(student1.join());

console.log(student1.indexOf("a"));

console.log(student1.lastIndexOf("a"));

console.log(student1.push("javascript"));
console.log(student1);

console.log(student1.unshift("cody sun"));
console.log(student1);
//pop xoá phần tử cuối cùng trong mảng 
console.log(student1);
student1.pop();
console.log(student1);

//shift xoá phần tử đầu tiên:

console.log(student1);
student1.shift();
console.log(student1);

const random2 = random.sort(function(a,b){
    if(a> b) return 1;
    if (a<b) return -1;
})

