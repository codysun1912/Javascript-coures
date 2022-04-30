let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
button.addEventListener("click" , setInterval(function(e) {
  text.textContent = input.value;
  e.preventDefault();
}, 1000));



