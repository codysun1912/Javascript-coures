// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     console.log(this.name);
// }

// const codysun = new Person("cody sun");
// codysun.getName();


class Person{
    constructor(name){
        this.name = name;
    }
    // getName(){
    //     console.log(this.name);
    // }

    get name(){
        return this._name;
    }

    set name(newName){
        return this._name = newName;

    }
}

const codysun = new Person("cody sun");
console.log(codysun.name);