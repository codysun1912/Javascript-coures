let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
let buttonValue = 0;
button.addEventListener("click" , setInterval( function() {
   buttonValue ++;
   text.textContent = buttonValue;
}, 1));
