const student = {
    firstName : "cody sun",
    lastName: "dev",
    fullName: function(){
        console.log(`${this.firstName}${this.lastName}`);
    }
}

const selector = document.querySelector.bind(document);
const selectors = document.querySelectorAll.bind(document);
const button = selector(".btn");
button.addEventListener("click", student.fullName.bind(student));