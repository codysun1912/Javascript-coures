let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
button.addEventListener("click" , (function(e) {
  text.textContent = input.value;
}));    
setTimeout(function() {
    button.disabled = true;
    console.log(button)
},10000)



