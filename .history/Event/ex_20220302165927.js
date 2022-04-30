let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
button.addEventListener("click" , (function(e) {
  text.textContent = input.value;
  e.preventDefault();
  console.log(text.textContent);
}));    
 setTimeout(function() {
    button.disabled = false;
},10000)



