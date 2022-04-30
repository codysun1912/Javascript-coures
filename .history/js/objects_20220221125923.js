const student = {
    name: "cody sun",
    age : 20,
};
student["last-Name"] = "Tran";
student.age = 21;
delete student.age;
console.log(student.name);
console.log(student["age"]);
console.log(student);


for( let key in student){
    console.log(`${key} : ${student[key]}`);
}

// object.keys tra ve mot mang

const keyOj = Object.keys(student);
console.log(keyOj);


const values = Object.values(student);
console.log(values);

//object.entries tra ve 1 mang [[1,2],3]

const entries = Object.entries(student);
console.log(entries);