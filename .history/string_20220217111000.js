//string là một chuỗi

const name = "Nhut";
const name1 = "developer";
console.log(name);
console.log(typeof name);

const newString = `my name ${name} is i am ${name1} 
i love coding
`;
console.log(newString.length);

const newStr1 = "     Frontend developer       ";

console.log(newStr1.trim().replace("developer", "designer"));