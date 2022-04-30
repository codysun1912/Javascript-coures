let student = {
    name: "cody sun",
    age: 40
};

function Student(name , age){
    this.name = name;
    this.age = age;
}

this.getName = function(){
    return `your name is: ${this.name}`;
}

let student2 = new Student("nhut" , 21);
console.log(student2);

