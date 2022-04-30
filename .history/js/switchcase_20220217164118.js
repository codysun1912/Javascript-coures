// const car = "lambo"

// switch(car){
//     case "Ford":
//         console.log("this is ford ");
//     break;

//     case "Toyota":
//         console.log("this is Toyota");
//     break;

//     default:
//         console.log("This is lambo");
//         break;

// }


const yourAge = 9;

let message = "";

if (yourAge >= 18){
    message = "Ban da du tuoi";
} else if(yourAge<=10) {
    message = "ban chua du tuoi";
} 

console.log(message);


let message2 = yourAge >= 18 ? "ban da du tuoi " : "ban chua du tuoi ";
console.log(message2);

let message3 = yourAge >= 18 ? "ban da du tuoi " : yourAge < =  10 ? "ban chua du tuoi" : "ban la tre trau";
console.log(message3