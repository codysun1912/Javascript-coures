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


for( let key of student){
    console.log(key);
}