const isRich = false;
const myMoney = 1000000;

if(isRich) {
    console.log("I will buy new car");
}else if(myMoney > 10000){
    console.log("i have a lot of money");
} else {
    console.log("i not money");

    
}

///const yourName = prompt("vui long nhap ten cua ban", "");
//console.log(yourName);

//const isYourName = confirm("day co phai la ten cua ban khong ?");
//console.log(isYourName);

const numberAge = prompt("Nhap vao so tuoi cua ban","");
let message = "";
console.log(typeof numberAge); 
if (Number(numberAge) >= 18){
    message = "Ban du tuoi vao rap phim";
} else {
    message = "ban chua du tuoi";
}
alert(message);