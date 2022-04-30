let input = document.querySelector(".text-input");
const button = document.querySelector(".btn");
const text = document.querySelector(".input-btn");
button.addEventListener("click" , (function(e) {
  text.textContent = input.value;
  console.log(text.textContent);
}));    
const timer =  setTimeout(function() {
    button.disabled = true;
},10000)



