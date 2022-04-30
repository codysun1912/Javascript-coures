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
console.log(typeof numberAge); 
if (Number(numberAge) >= 18){
    alert("ban duoc coi phim trong rap");
} else {
    alert("ban chua du tuoi");
}