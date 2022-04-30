const student = {
    firstName : "cody sun",
    lastName: "dev",
    fullName: function(){
        console.log(`${this.firstName}${this.lastName}`);
    }
}

// const selector = document.querySelector.bind(document);
// const selectors = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const button = $(".btn1");
button.addEventListener("click", student.fullName.bind(student));

function log(level , time , message) {
    console.log(`${level} ${time} ${message}`);
}

const logErrorToday = log.bind(null ,"error" , "6");
logErrorToday("sever ok");
// cai nao khong co phai de dau;