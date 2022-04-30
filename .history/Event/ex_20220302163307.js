let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
button.addEventListener("click" , setInterval(function() {
  text.textContent = input.value;
}, 1000));



