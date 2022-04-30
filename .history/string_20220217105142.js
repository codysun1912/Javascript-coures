//string là một chuỗi

const name = "Nhut";
const name1 = "developer";
console.log(name);
console.log(typeof name);

const newString = `my name ${name} is i am ${name1} 
i love coding
`;
console.log(newString.length);

const newStr = "         Frontend developer        "
console.log(newStr.split(" "));
console.log(newStr.toLowerCase());
console.log(newStr.toUpperCase());
console.log(newStr.startsWith("Frontend"));
console.log(newStr.endsWith("developer"));
console.log(newStr.includes("end"));
console.log(newStr.indexOf("d"));
console.log(newStr.lastIndexOf("d"));
console.log(newStr.replace("developer", "designer"));
console.log(newStr.repeat(6));
console.log(newStr.slice(0,8));
console.log(newStr.trim());
console.log(newStr.trimStart());
console.log(newStr.trimEnd());
console.log(newStr.charAt(11));
