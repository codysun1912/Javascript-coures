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


const a = {
    firstName: "Tran"
};

const b = {
    lastName: "Nhut"
};

const c = Object.assign(a, b);
const d = {...a, ...b};
console.log(c);
console.log(d);


//object.freeze 

const car = {
    brand : "Ford",

};

const newcar = Object.freeze(car);
console.log(newcar);