const student = {
    firstName : "cody sun",
    lastName: "dev",
    fullName: function(){
        console.log(`${this.firstName}${this.lastName}`);
    }
}

const button = document.querySelector(".btn");
button.addEventListener("click", student.fullName.bind(student));