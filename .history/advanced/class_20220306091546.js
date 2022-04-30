// // function Person(name){
// //     this.name = name;
// // }

// // Person.prototype.getName = function(){
// //     console.log(this.name);
// // }

// // const codysun = new Person("cody sun");
// // codysun.getName();


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     // getName(){
//     //     console.log(this.name);
//     // }

//     get name(){
//         return this._name;
//     }

//     set name(newName){
//         return this._name = newName;

//     }
// }

// const codysun = new Person("cody sun");
// console.log(codysun.name);
// codysun.name = "nhut";
// console.log(codysun.name);


class Actical {
    constructor(title , date){
        this.title = title;
        this.date = date;
    }
    static compare(a ,b){
        return a.date - b.date;
    }
}

let articles = [
    new Actical("HTML" , new Date (2021 , 1 , 1)),
    new Actical("CSS" , new Date (2021 , 0 , 1)),
    new Actical("JS" , new Date (2021 , 11 , 1)),
];

articles.sort(Actical.compare);
console.log(articles[0].title);


class Item {
    constructor(name){
        this.name = name;
    }
}
